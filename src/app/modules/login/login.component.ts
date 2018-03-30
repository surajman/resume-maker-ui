import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email: string;
  private password: string;
  @ViewChild('loginForm') loginForm: NgForm;

  constructor(private router: Router,
    private http: Http) { }

  ngOnInit() {
  }

  private test() {
    const obj = {
      email: this.email,
      password: this.password
    };
    const myHeader = new Headers();
    myHeader.append('content-type', 'application/json');
    myHeader.append('Access-Control-Allow-Origin', '192.168.0.100:8080');
    const options = new RequestOptions({headers: myHeader, withCredentials: true});
    this.http.post('http://192.168.0.100:8080/login', obj, options)
      .subscribe(
        data => {
          if (!!data) {
            this.router.navigate(['login/success']);
          }
        },
        err => {
          //
        }
      );
  }

  private register() {
    this.router.navigate(['login/register']);
  }

}
