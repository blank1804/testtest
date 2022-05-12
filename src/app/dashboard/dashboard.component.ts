import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Hero } from '../interface/Hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.appService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
