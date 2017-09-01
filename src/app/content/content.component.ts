import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor(private http:Http) {
    this.http.get('/assets/data/home.json')
    .map(response => response.json())
    .subscribe(res => this.myData = res);    
  }
  myData: Array<any>;
  title = 'app';
  ngOnInit() {
  }
}
