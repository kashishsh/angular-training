import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


import { AppError } from './../common/app.error';
import { NotFoundError } from './../common/not-found-error';
import { BadRequestError } from './../common/bad-request-error';
@Injectable()
export class DataService {
  constructor(private http: Http , private url: string) { }
  getAll() {
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }
  create(resource) {
    //return Observable.throw(new AppError());
    return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }
  delete(id) {

    // return this.http.delete(this.url+"/"+id)
    //   .map(response => response.json())
    //   .catch(this.handleError);
    return this.http.delete(this.url+"/"+id)
      .map(response => response.json())
      .toPromise()
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    if(error.status === 404)
      return Observable.throw(new NotFoundError());
    else if(error.status === 400)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error.json()));
  }
}
