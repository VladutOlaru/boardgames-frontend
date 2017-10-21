import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";

import 'rxjs/add/operator/switchMap';
import {Boardgame} from "../boardgame";
import {BoardgameService} from "../boardgame.service";

@Component({
  selector: 'boardgame-all',
  templateUrl: './boardgame-all.component.html',
  styleUrls: ['./boardgame-all.component.css']
})
export class BoardgameAllComponent implements OnInit {

  boardgames: Boardgame[] = [];

  constructor(private route: ActivatedRoute,
              private boardgameService: BoardgameService) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.boardgameService.getBoardgames(+params.get('page'), +params.get('size')))
      .subscribe(boardgames => this.boardgames = boardgames);
  }

}
