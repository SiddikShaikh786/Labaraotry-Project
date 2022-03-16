import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DetailsComponent } from './details/details.component';
import { EditregisterComponent } from './editregister/editregister.component';
import { GlucometryComponent } from './glucometry/glucometry.component';
import { AuthGuard } from './Guard/auth.guard';
import { HaematologyComponent } from './haematology/haematology.component';
import { HomeComponent } from './home/home.component';
import { SampleComponent } from './sample/sample.component';
import { ThyroidComponent } from './thyroid/thyroid.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ViewThyroidComponent } from './view-thyroid/view-thyroid.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { ViewglucoComponent } from './viewgluco/viewgluco.component';
import{ViewhaemotolgyComponent} from './viewhaemotolgy/viewhaemotolgy.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'userLogin', component: UserLoginComponent, canActivate: [AuthGuard] },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'reg', component: UserRegistrationComponent, canActivate: [AuthGuard] },
  { path: 'details', component: DetailsComponent, canActivate: [AuthGuard] },
  { path: 'sample', component: SampleComponent },
  { path: 'haematology', component: HaematologyComponent },
  { path: 'thyroid', component: ThyroidComponent },
  { path: 'glucometry', component: GlucometryComponent },
  { path: 'userpage', component: UserpageComponent },
  { path: 'getUser/:_id', component: EditregisterComponent },
  { path: 'viewdetails', component: ViewdetailsComponent },
  {path:'getthyroid', component:ViewThyroidComponent},
  {path:'getgluco',component:ViewglucoComponent},
  {path:'gethaemo', component:ViewhaemotolgyComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
