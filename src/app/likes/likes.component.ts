import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() likeCount: number = 0;
  @Input() isLiked: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onClick() {

    this.likeCount += (this.isLiked) ? -1 : 1;
    this.isLiked = !this.isLiked;
  }

}
