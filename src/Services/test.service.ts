import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public toDo: any = 'Test';
  private url = 'http://localhost:8080/todos';
  // url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  getToDoById(id, name): Observable<any> {
    return this.http.get(`${this.url}/${id}/${name}`);
    // return this.http.get(`${this.url}/${id}`);
  }
}
