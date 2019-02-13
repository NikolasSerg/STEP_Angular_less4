import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-indata',
  templateUrl: './indata.component.html',
  styleUrls: ['./indata.component.css']
})
export class IndataComponent implements OnInit {
  title = '';
  post = '';
  author = '';


  constructor() {
  }

  ngOnInit() {
  }

}
