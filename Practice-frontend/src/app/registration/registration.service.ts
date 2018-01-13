import { Injectable } from '@angular/core';
import {Http,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService {

  constructor(private http:Http) { }

  private baseUrl="http://localhost:8080/tabner/users";

  getUsers():Observable<any>{
    return this.http.get(this.baseUrl).map(res=>res.json());
  }

  saveUsers(formData:any):Observable<any>{

    let headers=new Headers({'Content-Type':'application/json'});
    let options=new RequestOptions({headers:headers})
    return this.http.post(this.baseUrl,formData,options).map(res=>res.json());
    
  } 

}


