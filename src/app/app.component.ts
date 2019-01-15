import { Component } from '@angular/core';
import { Hero } from '../app/hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
  // selector— the component's CSS element selector
  // templateUrl— the location of the component's template file.
  // styleUrls— the location of the component's private CSS styles.

})

export class AppComponent {
  title = 'My First Angular App!';
}