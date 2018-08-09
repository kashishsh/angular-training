import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Response } from '@angular/http';
import { AppError } from './../common/app.error';
import { NotFoundError } from './../common/not-found-error';
import { BadRequestError } from './../common/bad-request-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value= "";

    this.service.create(post)
      .subscribe(
        newPost => {
          post.id = newPost.id;
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if(error instanceof BadRequestError){
            //this.form.setErrors(error.json());
            alert(error.originalError);
          }
          else throw error;
        });
  }
  deletePost(post) {
    // let index = this.posts.indexOf(post);
    // this.posts.splice(index, 1);
    // this.service.delete(post.id).subscribe(
    //   null,
    //   (error: AppError) => {
    //     this.posts.splice(0, 0, post);
    //     if(error instanceof NotFoundError)
    //       alert('This post has already been deleted')
    //     else throw error;
    // });
    //this.service.delete(post.id).subscribe();
    this.service.delete(post.id)
  }
  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts =>  this.posts = posts);
  }

}
