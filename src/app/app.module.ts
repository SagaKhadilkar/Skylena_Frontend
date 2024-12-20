import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RouterComponent } from './router/router.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { Service3Component } from './service3/service3.component';
import { Service4Component } from './service4/service4.component';
import { Service5Component } from './service5/service5.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AchivementsComponent } from './achivements/achivements.component';
import { CoursesComponent } from './courses/courses.component';
import { SafePipe } from './safe.pipe';
import { SkyHomeComponent } from './sky-home/sky-home.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NoOfUsersComponent } from './no-of-users/no-of-users.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    RouterComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    Service4Component,
    Service5Component,
    AboutUsComponent,
    ContactUsComponent,
    DashboardComponent,
    AchivementsComponent,
    CoursesComponent,
    SafePipe,
    SkyHomeComponent,
    DataManagementComponent,
    AdminDashboardComponent,
    NoOfUsersComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RecaptchaModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  imagePath = 'assets/Images/bg.1.png';
}
