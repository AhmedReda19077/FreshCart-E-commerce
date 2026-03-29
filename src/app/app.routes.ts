import { SpecCategoryComponent } from './features/products/spec-category/spec-category/spec-category.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/products/home/home.component';
import { CartComponent } from './features/products/cart/cart.component';
import { BrandsComponent } from './features/products/brands/brands.component';
import { CategoriesComponent } from './features/products/categories/categories.component';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { authGuard } from './core/guard/auth.guard';
import { ProductsSharedComponent } from './shared/components/products-shared/products-shared.component';
import { ProductsComponent } from './features/products/products/products/products.component';
import { SpecBrandComponent } from './features/products/spec-brand/spec-brand/spec-brand.component';
import { OrderComponent } from './features/products/order/order/order.component';
import { AllordersComponent } from './features/products/order/allorders/allorders.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "register", component: RegisterComponent, title: "Register" },
  { path: "login", component: LoginComponent, title: "Login" },
  { path: "home", component: HomeComponent, title: "Home", canActivate: [authGuard] },
  { path: "cart", component: CartComponent, title: "Cart", canActivate: [authGuard] },
  { path: "products", component: ProductsComponent, title: "Products", canActivate: [authGuard] },
  { path: "order/:cartId", component: OrderComponent, title: "Request Order", canActivate: [authGuard] },
  { path: "allorders", component: AllordersComponent, title: "Orders", canActivate: [authGuard] },
  { path: "brands", component: BrandsComponent, title: "Brands", canActivate: [authGuard] },
  { path: "categories", component: CategoriesComponent, title: "Categories", canActivate: [authGuard] },
  { path: "spec-cat/:id", component: SpecCategoryComponent, title: "Category Details", canActivate: [authGuard] },
  { path: "spec-brand/:id", component: SpecBrandComponent, title: "Brand Details", canActivate: [authGuard] },
  { path: "details/:id", component: ProductDetailsComponent, title: "Product Details", canActivate: [authGuard] },
  { path: "**", component: NotFoundComponent, title: "Not Found" }
];
