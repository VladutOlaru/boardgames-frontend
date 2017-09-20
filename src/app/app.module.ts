import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';


import { AppComponent } from './app.component';
import {BoardgameDetailComponent} from "./boardgame/boardgame-detail.component";
import {AppRoutingModule} from "./app-routing-module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    BoardgameDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'boardgames',
        component: BoardgameDetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
