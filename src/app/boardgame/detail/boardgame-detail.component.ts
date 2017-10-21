import {Component, OnInit} from "@angular/core";
import {Boardgame} from "../boardgame";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {BoardgameService} from "../boardgame.service";
import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'boardgame',
  templateUrl: './boardgame-detail.component.html',
  styleUrls: ['./boardgame-detail.component.css']
})
export class BoardgameDetailComponent implements OnInit {
  boardgame: Boardgame;

  constructor(private boardgameService: BoardgameService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.boardgameService.getBoardgame(params.get('name')))
      .subscribe(boardgame => this.boardgame = boardgame);
  }

  goBack(): void {
    this.location.back();
  }

}
