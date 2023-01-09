import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    RouterModule,
    MatButtonModule
  ]
})
export class HomeModule { }
