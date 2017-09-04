import { Component, OnInit } from '@angular/core';
import {MdDialog,MdDialogRef} from '@angular/material';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor(private http:Http) {
    this.http.get('/assets/data/photos.json')
    .map(response => response.json())
    .subscribe(res => this.photosData = res);    
  }
  photosData: Array<any>;
  ngOnInit() {
  }
}
