import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favourite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name: null
  }
}
