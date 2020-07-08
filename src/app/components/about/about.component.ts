import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  img:string = '../../../../../assets/images/me1.jpg';

  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.img = '../../../../../assets/images/me2.jpg';
  }

  onMouseOut(): void {
    this.img = '../../../../../assets/images/me1.jpg';
  }

}
