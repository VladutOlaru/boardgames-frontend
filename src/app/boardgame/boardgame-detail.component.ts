import {Component, OnInit} from "@angular/core";
import {Boardgame} from "./boardgame";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'boardgame-detail',
  templateUrl: './boardgame-detail.component.html',
  styleUrls: ['./boardgame-detail.component.css']
})
export class BoardgameDetailComponent implements OnInit {
  boardgame: Boardgame;

  constructor(
    private route: ActivatedRoute
  ){}


  ngOnInit(): void {
    this.boardgame = new Boardgame();
    this.boardgame.name = "This is just the beginning";
  }

}
