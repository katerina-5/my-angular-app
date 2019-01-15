import { Component, OnInit } from '@angular/core';
import { Hero } from '../app/hero';
import { HEROES } from '../app/mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Ms. Fantastic'
  // };

  heroes = HEROES;

  selectedHero: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
