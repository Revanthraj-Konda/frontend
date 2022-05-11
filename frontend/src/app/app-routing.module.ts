import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { response } from 'src/app/services/response.model';
import { BaseComponent } from './base/base.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
//import { AuthGuard } from './helpers/auth.guard';




const routes: Routes = [
  { path: 'base', component: BaseComponent },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  { path: '', component: UploadFilesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }


