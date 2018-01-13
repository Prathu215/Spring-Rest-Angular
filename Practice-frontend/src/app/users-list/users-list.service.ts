import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersListService {

  constructor(private http:Http) { }
  private baseUrl="http://localhost:8080/tabner/userslist";

  getUsers():Observable<any>{
    return this.http.get(this.baseUrl).map(res=>res.json());
  }

}
