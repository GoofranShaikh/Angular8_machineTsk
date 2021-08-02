import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './appmoduleComponents/home/home.component';
import { NavComponent } from './appmoduleComponents/navbar/nav/nav.component';
import { MidsectionHomeComponent } from './appmoduleComponents/midsection-home/midsection-home.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MidsectionHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
