import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RankingModel } from './ranking.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RankingService {

  url = 'http://localhost:3000/times';

  constructor(private readonly http: HttpClient) { }

  public lista(): Observable<RankingModel[]> {

    return this.http.get<RankingModel[]>(this.url);
  }

  public remove(current: string) {

    return console.log(current);
  }

}
