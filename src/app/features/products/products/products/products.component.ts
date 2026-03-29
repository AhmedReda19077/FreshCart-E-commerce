import { Component, inject, signal } from '@angular/core';
import { ProductsSharedComponent } from "../../../../shared/components/products-shared/products-shared.component";
import { Product } from '../../../../core/interfaces/product';
import { ProductService } from '../../../../core/services/product/product.service';

@Component({
  selector: 'app-products',
  imports: [ProductsSharedComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  private productService : ProductService = inject(ProductService);

  productHeader: string = "Products";
  allProducts = signal<Product[]>([]);

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.allProducts.set(res.data)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
