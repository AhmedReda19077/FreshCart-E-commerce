import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../core/interfaces/product';
import { RouterLink } from "@angular/router";
import { CartService } from '../../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { HiPipe } from '../../../core/pipes/hi.pipe';


@Component({
  selector: 'app-card',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() oneProduct: Product = {} as Product;
  private cartService: CartService = inject(CartService);
  private toastrService: ToastrService = inject(ToastrService)
  addCart(pId: string) {
    // console.log(pId);
    this.cartService.addToCart(pId).subscribe({
      next: (res) => {
        this.toastrService.success(res.message, "Cart Operations!", {
          closeButton: true,
          progressBar: true,
          timeOut: 3000
        });
      },
      error: (err) => {
        // this.toastrService.error(err.error.message)
      }
    })
  }
}
