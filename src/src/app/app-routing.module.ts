// Routing and navbar

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutsComponent } from './abouts/abouts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path : "", component:AboutsComponent},
  {path : "about", component:AboutsComponent},
  {path : "contact", component:ContactsComponent},
  {path : "product", component:ProductsComponent},
  {path : "**", component:PageNoteFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
