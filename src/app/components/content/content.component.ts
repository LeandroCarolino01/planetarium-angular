import { Component, OnInit } from '@angular/core';
import { Curiosity } from '../../../Curiosity';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  curiosities:Curiosity[];
  constructor() { }

  ngOnInit() {
    this.curiosities =  [
      {
        id:1,
        name:'first',
        img:'assets/images/img1.jpg',
        description: 'another test'
      },
      {
        id:2,
        name:'first',
        img:'assets/images/img2.jpg',
        description: 'another test'
      },
      {
        id:3,
        name:'first',
        img:'assets/images/img3.jpg',
        description: 'another test'
      }
    ]
  }

}
