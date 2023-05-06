import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './productDetails/productDetails.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeactivateGuard } from './deactivate.guard';
import { IDeactivateComponent } from './IDeactivate/IDeactivate.component';
import { UserRegistrationComponent } from './UserRegistration/UserRegistration.component';
import { RegisterComponent } from './Register/Register.component';
import { FormComponent } from './form/form.component';
import { FormRDFComponent } from './form-RDF/form-RDF.component';
import { ChooseComponent } from './choose/choose.component';
import { CountryComponent } from './country/country.component';
import { AAAAAAComponent } from './AAAAAA/AAAAAA.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      ProductComponent,
      AboutComponent,
      ContactComponent,
      ProductDetailsComponent,
      LoginComponent,
      IDeactivateComponent,
      UserRegistrationComponent,
      RegisterComponent,
      FormComponent,
      FormRDFComponent,
      ChooseComponent,
      CountryComponent,
      AAAAAAComponent
       ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
