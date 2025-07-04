import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ViewAllManagement } from './view-all-management/view-all-management';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Home } from './home/home';
import { AddEmployee } from './add-employee/add-employee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddManagement } from './add-management/add-management';
import { UpdateManagement } from './update-management/update-management';
import { ViewAllEmployee } from './view-all-employee/view-all-employee';
import { UpdateEmployee } from './update-employee/update-employee';
import { ViewAllLocation } from './view-all-location/view-all-location';
import { AddLocation } from './add-location/add-location';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    ViewAllManagement,
    Home,
    AddEmployee,
    AddManagement,
    UpdateManagement,
    ViewAllEmployee,
    UpdateEmployee,
    ViewAllLocation,
    AddLocation
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
   provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
