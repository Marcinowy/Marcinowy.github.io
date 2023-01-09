import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ContactRoutingModule,
    MatIconModule
  ]
})
export class ContactModule { }
