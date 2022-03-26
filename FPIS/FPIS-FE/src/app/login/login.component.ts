import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../models/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser = <user>{};
  errorMessage = '';

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  getUser(login: NgForm){
    this.errorMessage = '';
    var username = login.value.username;
    var password = login.value.password;
    try {
      this.service
        .getUser(username, password)
        .subscribe((res) => {
          this.currentUser = res;
          console.log(res);
          if(this.currentUser != null){
            this.router.navigate(['welcome'])
          }else{
            this.errorMessage = "Invalid username or password!";
          }
        });
    } catch (e) {
      console.log(e);
    }

  }

}
