import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router) {


  }

clickCard(page: string) {
  this.router.navigateByUrl(`/${page}`);
}


  ngOnInit(): void {
  }

}
