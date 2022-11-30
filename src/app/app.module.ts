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
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { AddCoursesComponent } from './add-courses/add-courses.component'

const myRoute:Routes=
[
{
  path:"",
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
},
{
  path:"contactus",
  component:ContactUsComponent
},
{
  path:"viewcourses",
  component:ViewCoursesComponent
},
{
  path:"viewfriends",
  component:ViewFriendsComponent
},
{
  path:"addfriends",
  component:AddFriendsComponent
},
{
  path:"addcourses",
  component:AddCoursesComponent
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
    GalleryComponent,
    ContactUsComponent,
    NavbarComponent,
    ViewCoursesComponent,
    ViewFriendsComponent,
    AddFriendsComponent,
    AddCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
