import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { TextStyleComponent } from './text-style/text-style.component';

@NgModule({
  declarations: [
    AppComponent,
    GridSystemComponent,
    TextStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
