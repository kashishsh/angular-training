import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
  private url = 'https://1234jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }
  getPosts() {
    return this.http.get(this.url);
  }
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
  }
  deletePost(id) {
    return this.http.delete(this.url+"/"+id);
  }

}
