import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { TextStyleComponent } from './text-style/text-style.component';
import { TableStylingComponent } from './table-styling/table-styling.component';
import { VideoStylingComponent } from './video-styling/video-styling.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { SideBarNavigationComponent } from './side-bar-navigation/side-bar-navigation.component';
import { PopUpScreensComponent } from './pop-up-screens/pop-up-screens.component';
import { PushPullComponent } from './push-pull/push-pull.component';
import { PopUpWindowComponent } from './pop-up-window/pop-up-window.component';

@NgModule({
  declarations: [
    AppComponent,
    GridSystemComponent,
    TextStyleComponent,
    TableStylingComponent,
    VideoStylingComponent,
    NavigationBarComponent,
    AlertBoxComponent,
    SideBarNavigationComponent,
    PopUpScreensComponent,
    PushPullComponent,
    PopUpWindowComponent
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
