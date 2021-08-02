import { NgModule } from '@angular/core';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormComponent],
  imports: [
    TagInputModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormComponent
  ]
})
export class SharedModule { }
