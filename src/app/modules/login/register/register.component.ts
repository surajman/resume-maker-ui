import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private name: string;
  private email: string;
  private password: string;

  @ViewChild('loginForm') loginForm: NgForm;
  constructor(private http: Http) { }

  ngOnInit() {
  }

  private register() {
    const obj = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    const myHeader = new Headers();
    myHeader.append('content-type', 'application/json');
    myHeader.append('Access-Control-Allow-Origin', '192.168.0.100:8080');
    const options = new RequestOptions({headers: myHeader});
    this.http.post('http://192.168.0.100:8080/register', obj, options).
      subscribe(
        data => {
          //
        },
        err => {
          //
        }
      );
  }

}
