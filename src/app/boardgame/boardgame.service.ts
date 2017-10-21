import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise';

import {Boardgame} from "./boardgame";

@Injectable()
export class BoardgameService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private boardgamesUrl = '/boardgames';

  constructor(private http: Http) { }

  getBoardgame(name: string): Promise<Boardgame> {
    const url = '${this.boardgamesUrl}/${name}';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Boardgame)
      .catch(BoardgameService.handleError);
  }

  getBoardgames(page: number, size: number): Promise<Boardgame[]> {
    let params = new URLSearchParams();
    params.append("page", page.toString());
    params.append("size", size.toString());
    return this.http.get('${this.boardgamesUrl}/all', {headers: this.headers, params: params})
      .toPromise()
      .then(response => response.json().data as Boardgame[])
      .catch(BoardgameService.handleError);
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
