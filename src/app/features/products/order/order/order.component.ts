import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckoutService } from '../../../../core/services/order/checkout.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  private checkoutService: CheckoutService = inject(CheckoutService)
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute)

  cartId = signal<string | null>("")

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((p) => {
      this.cartId.set(p.get("cartId"))
    })
  }

  addressForm: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl(null, [Validators.required])
  })

  checkout() {
    this.checkoutService.checkoutSession(this.cartId(), this.addressForm.value).subscribe({
      next : (res) => {
        window.location.href = res.session.url;
      }
    })
  }
}
