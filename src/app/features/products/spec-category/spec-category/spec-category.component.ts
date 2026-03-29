import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CategoryService } from '../../../../core/services/category/category.service';
import { Category } from '../../../../core/interfaces/product';

@Component({
  selector: 'app-spec-category',
  imports: [RouterLink],
  templateUrl: './spec-category.component.html',
  styleUrl: './spec-category.component.scss',
})
export class SpecCategoryComponent {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private categoryService: CategoryService = inject(CategoryService)

  cId: string | null = "";

  category = signal<Category>({} as Category)

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (c) => {
        this.cId = c.get("id");
        this.categoryService.getSpecCategory(this.cId!).subscribe({
          next: (res) => {
            this.category.set(res.data);
          },
          error: (err) => {
            console.log(err.error.message)
          }
        })
      }
    })
  }
}
