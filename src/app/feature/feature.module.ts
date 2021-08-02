import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './feature-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { ProfilepageComponent } from './profilepage/profilepage.component';




@NgModule({
  declarations: [ProfilepageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
