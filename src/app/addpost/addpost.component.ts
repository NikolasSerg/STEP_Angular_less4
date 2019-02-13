import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  constructor() {
  }

  title = '';
  post = '';
  author = '';

  @Output() onAddPost = new EventEmitter <{title: string, post: string, author: string}>();
  // postArr: [{title: string, post: string, author: string}] = [];

  addPost() {
    this.onAddPost.emit({title: this.title, post: this.post, author: this.author});
    console.log(this.title, ' - this.title');
    console.log(this.post, ' - this.post');
    console.log(this.author, ' - this.author');
    // this.postArr.push({title: this.title, post: this.post, author: this.author, id: new Date().getMilliseconds()});
    this.title = '';
    this.post = '';
    this.author = '';
  }

  ngOnInit() {
}

}
