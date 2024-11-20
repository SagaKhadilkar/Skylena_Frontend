import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Service1Component } from './service1/service1.component';
import { HomeComponent } from './home/home.component';
import { Service2Component } from './service2/service2.component';
import { Service3Component } from './service3/service3.component';
import { Service4Component } from './service4/service4.component';
import { Service5Component } from './service5/service5.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AchivementsComponent } from './achivements/achivements.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
 {path:'ser1',component:Service1Component},
 {path:'create',component:RegisterComponent},
 {path:'ser2',component:Service2Component},
 {path:'ser3',component:Service3Component},
 {path:'ser4',component:Service4Component},
 {path:'ser5',component:Service5Component},
 {path:'achivements',component:AchivementsComponent},
 {path:'courses',component:CoursesComponent},
 {path:'about',component:AboutUsComponent},
 {path:'contact',component:ContactUsComponent},
 {path:'dashboard',component:DashboardComponent},

 { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
