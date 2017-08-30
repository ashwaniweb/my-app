import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private http:Http) {
    this.http.get('/assets/data/categories.json').map(response => response.json()).subscribe(res => this.myData = res);
  }
  myData: Array<any>;
  title = 'app';
  ngOnInit() {
  }

}
