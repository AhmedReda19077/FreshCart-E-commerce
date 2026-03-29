import { Component, inject, signal } from '@angular/core';
import { BrandsService } from '../../../../core/services/brand/brands.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Brand } from '../../../../core/interfaces/brand';

@Component({
  selector: 'app-spec-brand',
  imports: [RouterLink],
  templateUrl: './spec-brand.component.html',
  styleUrl: './spec-brand.component.scss',
})
export class SpecBrandComponent {
  private brandsService: BrandsService = inject(BrandsService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  bId: string | null = "";
  brand = signal<Brand>({} as Brand)


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (b) => {
        this.bId = b.get("id");
        this.brandsService.getSpecBrand(this.bId!).subscribe({
          next: (res) => {
            this.brand.set(res.data);
          },
          error: (err) => {
            console.log(err)  
          }
        })
      }
    })
  }
}
