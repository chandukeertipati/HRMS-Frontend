import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './modules/admin/admin.module';
import { AdminRoutingModule } from './modules/admin/admin.routing.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './modules/user/user.routing.module';
import { UserModule } from './modules/user/user.module';
// import { ToastrModule } from 'ngx-toastr';
// import { MakeBoldPipe } from './make-bold';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // MakeBoldPipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    UserModule,
    AdminModule,
    // ToastrModule.forRoot(),


  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
