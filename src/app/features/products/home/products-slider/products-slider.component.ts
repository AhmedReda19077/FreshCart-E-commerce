import { Component, Input } from '@angular/core';
import { Category } from '../../../../core/interfaces/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-products-slider',
  imports: [CarouselModule],
  templateUrl: './products-slider.component.html',
  styleUrl: './products-slider.component.scss',
})
export class ProductsSliderComponent {
  @Input() categories: Category[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-circle-arrow-left"></i>', '<i class="fa-solid fa-circle-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
}
