import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public $subj = new Subject();
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get("http://localhost:3000/posts");
  }

}
