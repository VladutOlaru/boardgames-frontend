import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardgameDetailComponent} from "./boardgame/detail/boardgame-detail.component";
import {BoardgameAllComponent} from "./boardgame/all/boardgame-all.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'boardgame/:name',  component: BoardgameAllComponent },
  { path: 'boardgames', component: BoardgameDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
