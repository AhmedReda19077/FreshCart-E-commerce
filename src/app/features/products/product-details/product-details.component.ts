import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../../core/services/cart/cart.service';
import { ProductService } from './../../../core/services/product/product.service';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../core/interfaces/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private productService: ProductService = inject(ProductService);
  private cartService: CartService = inject(CartService);
  private toastrService: ToastrService = inject(ToastrService);

  pId: string | null = "";

  product = signal<Product>({} as Product);


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        this.pId = p.get("id")
        this.productService.getSpecProduct(this.pId!).subscribe({
          next: (res) => {
            this.product.set(res.data)
            console.log(res.data)
          },
          error: (err) => {
            console.log(err)
          }
        })
      }
    })
  }

  addCart(pId: string) {
    // console.log(pId);
    this.cartService.addToCart(pId).subscribe({
      next: (res) => {
        this.toastrService.success(res.message, "Cart Operations!", {
          closeButton: true,
          progressBar: true,
          timeOut: 3000
        });
      }
    })
  }
}
