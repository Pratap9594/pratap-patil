import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent1Component } from './parent1/parent1.component';
import { ChildsModule } from '../childs/childs.module';



@NgModule({
  declarations: [Parent1Component],
  imports: [
    CommonModule,
  ChildsModule,
  ParentsModule
  ]
})
export class ParentsModule { }
