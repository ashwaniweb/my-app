import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myData: Array<any>;
  title = 'app';

  constructor(private http:Http) {
    
    this.http.get('/assets/data/photos.json')
      .map(response => response.json())
      .subscribe(res => this.myData = res);

  }
}