import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudInfoComponent } from './stud-info/stud-info.component';



@NgModule({
  declarations: [StudInfoComponent],
  imports: [
    CommonModule
  ],
  exports:[StudInfoComponent]
})
export class StudentModule { }
