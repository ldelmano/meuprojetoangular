import { Component, OnInit } from '@angular/core';
import { RankingService } from '../ranking.service';
import { RankingModel } from '../ranking.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public todos: RankingModel[] = [];

  constructor(private rankingService: RankingService) { }

  ngOnInit() {
    this.rankingService
      .lista()
      .subscribe(data => this.todos = data);
  }

  public remove(time: string) {
    this.rankingService.remove(time);
  }

}
