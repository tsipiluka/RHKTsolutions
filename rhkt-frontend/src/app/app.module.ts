import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//primeng
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { DescribitionCardComponent } from './components/describition-card/describition-card.component';
import { LogoCardComponent } from './components/logo-card/logo-card.component';

@NgModule({
  declarations: [AppComponent, ProfileComponent, NavbarComponent, DescribitionCardComponent, LogoCardComponent],
  imports: [BrowserModule, AppRoutingModule, CardModule, DividerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
