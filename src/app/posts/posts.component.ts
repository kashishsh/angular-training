import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };

    this.service.createPost(post)
      .subscribe(
        response => {
        post.id = response.json().id;
        this.posts.splice(0, 0, post);
        input.value= "";
      },
        (error: Response) => {
          if(error.status === 400){
            //this.form.setErrors(error.json());
          }
          else {
            alert('Unexpected error occured');
            console.log(error);
          }

      });
  }
  deletePost(post) {
    this.service.deletePost(345).subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
    },
      (error: Response) => {
        if(error.status === 404)
          alert('This post has already been deleted')
        else
          alert('Unexpected error occured');
          console.log(error);
    });
  }
  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      },  error => {
        alert('Unexpected error occured');
        console.log(error);
      })
  }

}
