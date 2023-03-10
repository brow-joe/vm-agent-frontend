import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ComponentsModule } from './components/components.module';
import { ToastrModule } from 'ngx-toastr';

import { HomeComponent } from './public/home/home.component';

import { AgentsService } from './services/agents.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      closeButton: true,
      preventDuplicates: true,
    })
  ],
  providers: [
    AgentsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
