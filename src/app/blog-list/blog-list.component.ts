import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  constructor() {
  }

  updateList(postArr: {title: string, post: string, author: string}) {
    this.postArr.push(postArr);
  }

  postArr: [{ title: string, post: string, author: string}] = [];
  //
  // pushArr() {
  //   console.log(this.title, ' - this.title');
  //   console.log(this.post, ' - this.post');
  //   console.log(this.author, ' - this.author');
  //   this.postArr.push({title: this.title, post: this.post, author: this.author, id: new Date().getMilliseconds()});
  //
  // this.title = '';
  // this.post = '';
  // this.author = '';
  // }


  ngOnInit() {
  }

}
