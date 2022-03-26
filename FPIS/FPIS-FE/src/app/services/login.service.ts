import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser = <user>{};

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
  });
  options = { headers: this.headers };

  constructor(private http: HttpClient) { }

  getUser(username:string,password:string){
    return this.http.post<user>("http://localhost:8080/login",{
      username: username,
      password: password
    },this.options).pipe(
      map((res) => {
        this.currentUser = res;
        return res;
      })
    );
  }

  returnUser(){
    return this.currentUser;
  }

  isUserAuthenticated() :any{
    if(this.currentUser.id != undefined) return true;
    return false;
  }

  logoutUser() : any{
    this.currentUser = <user>{};
  }
}
