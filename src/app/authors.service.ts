import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {
  authors = [
    'Author 1',
    'Author 2',
    'Author 3',
    'Author 4'
  ];
  getAuthors() {
    return this.authors;
  }
  constructor() { }

}
