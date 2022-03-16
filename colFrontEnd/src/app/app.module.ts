import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { DetailsComponent } from './details/details.component';
import { HaematologyComponent } from './haematology/haematology.component';
import { SampleComponent } from './sample/sample.component';
import { HomeComponent } from './home/home.component';
import { ThyroidComponent } from './thyroid/thyroid.component';
import { GlucometryComponent } from './glucometry/glucometry.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AuthGuard } from './Guard/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditregisterComponent } from './editregister/editregister.component'
import { FilterPipe } from './Pipe/filter.pipe';
import { SortnamePipe } from './Pipe/sortname.pipe';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { InterceptorInterceptor } from './Interceptor/interceptor.interceptor';
import { SpinnerComponent } from './spinner/spinner.component';
import { ViewThyroidComponent } from './view-thyroid/view-thyroid.component';
import { ViewglucoComponent } from './viewgluco/viewgluco.component';
import { ViewhaemotolgyComponent } from './viewhaemotolgy/viewhaemotolgy.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    DetailsComponent,
    HaematologyComponent,
    SampleComponent,
    HomeComponent,
    ThyroidComponent,
    GlucometryComponent,
    UserpageComponent,
    EditregisterComponent,
    FilterPipe,
    SortnamePipe,
    ViewdetailsComponent,
    SpinnerComponent,
    ViewThyroidComponent,
    ViewglucoComponent,
    ViewhaemotolgyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
