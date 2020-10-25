import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatIconModule} from  '@angular/material/icon' ;
import {  MatButtonModule }  from '@angular/material/button';
import { MatSidenavModule }  from '@angular/material/sidenav' ;
import {MatToolbarModule }  from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list' ;
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { PaComponent } from './pa/pa.component';
import { BiComponent } from './bi/bi.component';

import { EsbComponent } from './esb/esb.component';
import { MobileComponent } from './mobile/mobile.component';

import { DesktopComponent } from './desktop/desktop.component';
import { FullstackComponent } from './fullstack/fullstack.component';

import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PaComponent,
    BiComponent,

    EsbComponent,
    MobileComponent,
  
    DesktopComponent,
    FullstackComponent,

    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule ,
    MatSidenavModule ,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
