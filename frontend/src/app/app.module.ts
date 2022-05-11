import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BaseComponent } from './base/base.component';
import { DndComponent } from './dnd/dnd.component';
import { ProgressComponent } from './progress/progress.component';
import { ToastrModule } from 'ngx-toastr';
// services
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, UploadFilesComponent, HeaderComponent, FooterComponent, BaseComponent, DndComponent, ProgressComponent, LoginComponent, RegistrationComponent, ProfileComponent,
    //LoginComponent, 
    //RegisterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ToastrModule.forRoot(), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
