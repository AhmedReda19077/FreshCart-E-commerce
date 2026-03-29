import { Cart } from '../../../core/interfaces/cart';
import { CartService } from './../../../core/services/cart/cart.service';
import { Component, inject, signal, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  allCartProdycts = signal<Cart[]>([]);
  totalPrice = signal<number>(0);
  cartId = signal<string>("");

  private cartService: CartService = inject(CartService);
  private toastrService: ToastrService = inject(ToastrService);
  private router: Router = inject(Router);

  ngOnInit(): void {
    this.getAllCart()
  }

  getAllCart() {
    this.cartService.getAllCart().subscribe({
      next: (res) => {
        this.allCartProdycts.set(res.data.products);
        this.totalPrice.set(res.data.totalCartPrice);
        this.cartId.set(res.cartId)
        // console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  removeItem(pId: string) {
    this.cartService.removeSpecProduct(pId).subscribe({
      next: (res) => {
        this.toastrService.success("Cart Item Deleted Successfully", "Cart Operations!", {
          closeButton: true,
          progressBar: true,
          timeOut: 3000
        })
        this.getAllCart();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  updateCount(pCount: number, pId: string) {
    if (pCount <= 0) {
      this.removeItem(pId);
    }
    else {
      this.cartService.upadateCart(pId, pCount).subscribe({
        next: () => {
          this.toastrService.success("Cart Item Updated Successfully", "Cart Operations!", {
            closeButton: true,
            progressBar: true,
            timeOut: 3000
          })
          this.getAllCart()
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

  clearCart() {
    Swal.fire({
      title: 'Are you sure?',
      text: "This will remove all items from cart!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#dc2626',
      confirmButtonText: 'Yes, clear it!'
    }).then((result) => {

      if (result.isConfirmed) {

        this.cartService.clearAllCart().subscribe({
          next: () => {
            Swal.fire(
              'Cleared!',
              'Your cart is now empty.',
              'success'
            );
            this.router.navigate(["/home"]);
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    });
  }

  requestOrder() {
    this.router.navigate(["/order" , this.cartId()])
  }
}
