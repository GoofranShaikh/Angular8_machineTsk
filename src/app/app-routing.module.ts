import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './appmoduleComponents/home/home.component';



const routes: Routes = [
  {path:'profile', loadChildren:'./feature/feature.module#FeatureModule'},
  {path:'', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
