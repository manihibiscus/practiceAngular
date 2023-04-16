import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthendGuard } from './authend.guard';
import { ContactComponent } from './contact/contact.component';
import { DeactivateGuard } from './deactivate.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './productDetails/productDetails.component';
import { RegisterComponent } from './Register/Register.component';
import { UserRegistrationComponent } from './UserRegistration/UserRegistration.component';


const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"product",
    component:ProductComponent,
    canActivate:[AuthendGuard],
    // canActivateChild:[AuthendGuard],
    children:[
      {
        path:':check',
        component:ProductDetailsComponent
      }
    ]
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"register",
    component:RegisterComponent,
    canDeactivate:[DeactivateGuard]
  },
  {
    path:"login",
    component:LoginComponent
  }
  // {
  //   path:"product/:check",
  //   component:ProductDetailsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
