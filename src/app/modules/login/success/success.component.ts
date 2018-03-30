import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  private data: any = null;
  constructor(private http: Http) { }

  ngOnInit() {
    const myHeader = new Headers();
    // myHeader.append('Access-Control-Allow-Origin', '192.168.0.100:8080');
    const options = new RequestOptions({headers: myHeader, withCredentials: true});
    this.http.get('http://192.168.0.100:8080/user/get', options)
      .subscribe(
        data => {
          this.data = data.text();
        },
        err => {
          //
        }
      );
  }

}
