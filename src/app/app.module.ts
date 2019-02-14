import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
// import { IndataComponent } from './indata/indata.component';
import { AddpostComponent } from './addpost/addpost.component';
import { AuthComponent } from './auth/auth.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginListComponent } from './login-list/login-list.component';
import { ProfilesComponent } from './profiles/profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogItemComponent,
    // IndataComponent,
    AddpostComponent,
    AuthComponent,
    LoginFormComponent,
    LoginListComponent,
    ProfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
