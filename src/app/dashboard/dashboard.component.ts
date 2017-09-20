import {Component, OnInit} from "@angular/core";

import {Boardgame} from "../boardgame/boardgame";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  boardgames: Boardgame[] = [];

  ngOnInit(): void {
    this.boardgames = [];//TODO-get some boardgames here
  }
}
