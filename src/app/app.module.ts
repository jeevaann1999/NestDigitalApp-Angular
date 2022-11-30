import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';

const myRoute:Routes=
[
{
  path:"home",
  component:HomePageComponent
},
{
  path:"admin",
  component:AdminLoginComponent
},
{
  path:"employee",
  component:EmployeePortalComponent
},
{
  path:"employeereg",
  component:EmployeeRegistrationComponent
},
{
  path:"aboutus",
  component:AboutUsComponent
},
{
  path:"gallery",
  component:GalleryComponent
}
]


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminLoginComponent,
    EmployeePortalComponent,
    EmployeeRegistrationComponent,
    AboutUsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
