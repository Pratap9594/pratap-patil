import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { ClgInfoComponent } from './college/clg-info/clg-info.component';
import { Child1Component } from './childs/child1/child1.component';
import { Parent1Component } from './parents/parent1/parent1.component';




@NgModule({
  declarations: [
    AppComponent,
    ClgInfoComponent,
    Child1Component,
    Parent1Component
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
