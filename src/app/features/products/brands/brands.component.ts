import { Component, inject, signal } from '@angular/core';
import { BrandsService } from '../../../core/services/brand/brands.service';
import { Brand } from '../../../core/interfaces/brand';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-brands',
  imports: [RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent {
  private brandsService: BrandsService = inject(BrandsService);

  allBrands = signal<Brand[]>([])

  ngOnInit(): void {
    this.brandsService.getAllBrands().subscribe({
      next: (res) => {
        this.allBrands.set(res.data);
      }
    })
  }
}
