import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// locale config
import localEsCO from '@angular/common/locales/es-CO';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localEsCO);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
