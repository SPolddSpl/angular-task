import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { BlockedComponent } from './components/blocked/blocked.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductEditComponent } from './components/products/product-edit/product-edit.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './guards/auth.guard';
import { BlockedGuard } from './guards/blocked.guard';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: ProductsComponent },
      { path: 'details/:id', component: ProductDetailsComponent },
      { path: 'edit/:id', component: ProductEditComponent }
    ]
  },
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: 'blocked', component: BlockedComponent, canActivate: [BlockedGuard]
  }
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
