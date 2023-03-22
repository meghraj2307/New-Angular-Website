import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path : '', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  {path:'Shop', component:ShopComponent},
  {path:'Contact-Us',component: ContactUsComponent},
  {path:'About-Us',component: AboutUsComponent},
  {path:'Cart', component:CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
