import { Component, OnInit } from '@angular/core';
import { CURIOSITIES } from '../../../mock-curiosities';

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
