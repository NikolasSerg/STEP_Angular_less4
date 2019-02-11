import { Component, OnInit } from '@angular/core';
import {stringify} from 'querystring';
import {Data} from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  title = '';
  post = '';
  author = '';
  // id = new Date().getMilliseconds();


// postArr: [{title: string, post: string, author: string}] =
//   [{title: 'testposts', post: 'Lorem', author: 'sergiu'}];
postArr: [{title: string, post: string, author: string, id: number}] = [];

 pushArr(event: Event) {
   event.preventDefault();
   console.log(this.title, ' - this.title');
   console.log(this.post, ' - this.post');
   console.log(this.author, ' - this.author');
   this.postArr.push({title: this.title, post: this.post, author: this.author, id: new Date().getMilliseconds()});
   // this.postArr.sort(
   //   function (a, b) {
   //     if (a.id > b.id) {
   //       return 1;
   //     }
   //     if (a.id < b.id) {
   //       return -1;
   //     }
   //     // a должно быть равным b
   //     return 0;
   //   }
   // );
   this.title = '';
   this.post = '';
   this.author = '';
 }

  constructor() { }

  ngOnInit() {
  }

}
