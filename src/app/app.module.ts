import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {BoardgameDetailComponent} from "./boardgame/detail/boardgame-detail.component";
import {AppRoutingModule} from "./app-routing-module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap"
import {BoardgameAllComponent} from "./boardgame/all/boardgame-all.component";
import {BoardgameService} from "./boardgame/boardgame.service";

@NgModule({
  declarations: [
    AppComponent,
    BoardgameDetailComponent,
    BoardgameAllComponent,
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
    ]),
    NgbModule.forRoot()
  ],
  providers: [BoardgameService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
