import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IconsProviderModule } from './icons-provider.module';
import { ProductsComponent } from './components/products/products.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { NzModule } from './nz/nz.module';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductsSortBarComponent } from './components/products/products-sort-bar/products-sort-bar.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductEditComponent } from './components/products/product-edit/product-edit.component';
import { AuthComponent } from './components/auth/auth.component';
import { BlockedComponent } from './components/blocked/blocked.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductCreateComponent,
    ProductsSortBarComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    AuthComponent,
    BlockedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    NzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
