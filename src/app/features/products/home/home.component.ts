import { Component, inject, signal } from '@angular/core';
import { MainSliderComponent } from "./main-slider/main-slider.component";
import { ProductsSliderComponent } from "./products-slider/products-slider.component";
import { ProductsSharedComponent } from "../../../shared/components/products-shared/products-shared.component";
import { ProductService } from '../../../core/services/product/product.service';
import { Category, Product } from '../../../core/interfaces/product';
import { CategoryService } from '../../../core/services/category/category.service';

@Component({
  selector: 'app-home',
  imports: [MainSliderComponent, ProductsSliderComponent, ProductsSharedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeHeader : string = "Popular Products";
  private productService: ProductService = inject(ProductService);
  private categoryService : CategoryService = inject(CategoryService);
  allProducts = signal<Product[]>([]);
  allCategories = signal<Category[]>([]);

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.allProducts.set(res.data)
      },
      error: (err) => {
        console.log(err)
      }
    })

    this.categoryService.getCategory().subscribe({
      next : (res)=> {
        this.allCategories.set(res.data);
        // console.log(res.data)
      },
      error : (err) => {
        console.log(err)
      }
    })
  }


}
