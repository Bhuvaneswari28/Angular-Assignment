import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { HomefooterComponent } from './homefooter/homefooter.component';

import { RegisterModule } from './modules/register/register.module';
import { CloningModule } from './modules/cloning/cloning.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeheaderComponent,
    HomefooterComponent,
    HomepageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule,
    CloningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
