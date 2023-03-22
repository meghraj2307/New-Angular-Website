import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempConverterPipe } from './temp-converter.pipe';
import { AboutsComponent } from './abouts/abouts.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';

@NgModule({   //Angular module -- MgModule is decorator which provied information about the class
  declarations: [    //list of components under this module
    AppComponent, TempConverterPipe, AboutsComponent, ProductsComponent, ContactsComponent, PageNoteFoundComponent
  ],
  imports: [     //external modules which are imported
    BrowserModule,   
    AppRoutingModule,
    FormsModule    //for two way data binding
  ],
  providers: [],    //services
  bootstrap: [AppComponent]    //which component will be loaded first in this project
})
export class AppModule { }   //Class for module
