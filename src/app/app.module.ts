//External imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { Component, VERSION } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';

import { AuthService } from "./components/firebase/shared/services/auth.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartDisplayItemComponent } from './components/cart-display-item/cart-display-item.component';
import { RenderCartDisplayComponent } from './components/render-cart-display/render-cart-display.component';
import { SignInComponent } from './components/firebase/sign-in/sign-in.component';
import { environment } from 'src/assets/environments/environment';
import { AppRoutingModule } from './components/app-routing.module';
import { DashboardComponent } from './components/firebase/dashboard/dashboard.component';
import { SignUpComponent } from './components/firebase/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/firebase/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/firebase/verify-email/verify-email.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { CartProductComponent } from './allAboutCart/cart-product-component/cart-product-component.component';
import { ProductComponent } from './allAboutCart/product/product.component';
import { WishListComponent } from './allAboutCart/wish-list/wish-list.component';
import { ProductListComponent } from './allAboutCart/product-list-component/product-list-component.component';
import { PurchaseComponent } from './allAboutCart/purchase/purchase.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '/', redirectTo: 'home'},
      { path: '', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'products/:productId/:productName', component: ProductDetailsComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'displaycart', component: CartDisplayItemComponent },
      { path: 'verifyemail', component: VerifyEmailComponent },
      { path: 'forgotpassword', component: ForgotPasswordComponent },
      { path:'purchase', component: PurchaseComponent },
      { path: '**', redirectTo: 'page-not-found'},
      { path: 'page-not-found', component: PageNotFoundComponent },
    ]),
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    AppComponent, 
    RenderCartDisplayComponent,
    CartDisplayItemComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ShoppingCartComponent,
    ProductDetailsComponent,
    ProductItemComponent,
    ProductsListComponent,
    PurchaseComponent,
    CartProductComponent,
    ProductComponent,
    WishListComponent,
    ProductListComponent,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
