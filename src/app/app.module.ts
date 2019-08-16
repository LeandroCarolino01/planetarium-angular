import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  
  MatInputModule, 
  MatButtonModule,
  MatExpansionModule

} from '@angular/material';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule, 
    MatButtonModule,
    FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
