import { Component, inject, signal } from '@angular/core';
import { CategoryService } from '../../../core/services/category/category.service';
import { Category } from '../../../core/interfaces/product';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  private categoryService: CategoryService = inject(CategoryService);
  allCategories = signal<Category[]>([]);

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe({
      next: (res) => {
        this.allCategories.set(res.data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
