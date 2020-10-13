import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aptlist',
  templateUrl: './aptlist.component.html',
  styleUrls: ['./aptlist.component.scss']
})
export class AptlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Six', cols: 1, rows: 1, color: '#DDBDF1'},
  ];
  
}
