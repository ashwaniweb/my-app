import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  moduleId: module.id
})
export class DetailComponent implements OnInit {
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
