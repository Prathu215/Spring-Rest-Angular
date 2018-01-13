import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrationService } from './registration/registration.service';
import { HttpModule } from '@angular/http';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersListService } from './users-list/users-list.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, 
    HttpModule,
    RouterModule.forRoot([
      {path:'users',component:RegistrationComponent},
      {path:'userslist',component:UsersListComponent}

    ])
  ],
  providers: [RegistrationService,UsersListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
