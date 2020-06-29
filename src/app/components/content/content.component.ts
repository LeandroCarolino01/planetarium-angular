import { Component, OnInit } from '@angular/core';
import { CURIOSITIES } from '../../data/mock-curiosities';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  curiosities = CURIOSITIES;
  constructor() { }

  ngOnInit() {
    
  }

}
