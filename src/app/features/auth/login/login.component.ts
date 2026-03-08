import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private auth: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  errorMessage = signal<string>("");
  isLoading = signal<boolean>(false);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/)])
  })


  loginSubmit() {
    if (this.loginForm.valid) {
      this.isLoading.set(true);
      this.auth.loginAPI(this.loginForm.value).subscribe({
        next: (res) => {
          if (res.message == "success" && res.token) {
            // حفظ الـ token في localStorage أولاً
            localStorage.setItem("userToken", res.token);

            // ثم تحديث بيانات المستخدم
            this.auth.setUserData();

            this.isLoading.set(false);

            // بعدها انقل إلى home
            this.router.navigate(["/home"]);
          }
        },
        error: (err) => {
          console.log(err)
          this.errorMessage.set(err.error.message);
          this.isLoading.set(false);
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      })
    }
  }
}
