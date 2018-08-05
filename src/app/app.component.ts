import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    isFavorite: true
  }
  favoriteChanged() {
    console.log('Favorite changed');
  }

}
