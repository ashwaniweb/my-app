import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Array<any>;
  title = "Categories";

  constructor(private http:Http){
    this.http.get('./assets/data/categories.json')
    .map(response => response.json().category)
    .subscribe(res => this.categories = res);
  }
  
  likeMe(i){
    if(this.categories[i].liked == 0)
      this.categories[i].liked = 1;
    else
      this.categories[i].liked = 0;
  }
  
  deleteMe(i){
    this.categories.splice(i,1);
  }  
  ngOnInit() {
  }

}
