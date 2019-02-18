import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-fail-list',
  templateUrl: './fail-list.component.html',
  styleUrls: ['./fail-list.component.css']
})
export class FailListComponent implements OnInit {
  @Input() failLoged: [{ login: string, password: string, date: any }];
  @Output() onClearList = new EventEmitter<{ clearList: string }>();
  failEnter: [{ login: string, password: string, date: any }] = [{ login: 'default', password: 'default', date: 'default' }];
  btnInfo = 'open';
  clear = '';
  @Input() rezult: string;

  constructor() {
  }

  showFailLog() {
    this.failEnter = this.failLoged;
    this.btnInfo === 'open' ? this.btnInfo = 'close' : this.btnInfo = 'open';

  }

  clearListFun() {
    this.clear = 'clear';
    this.onClearList.emit({clearList: this.clear});
    this.failEnter = [{ login: '', password: '', date: '' }];
    this.btnInfo = 'open';
  }

  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   for (let propName in changes) {
  //     let chng = changes[propName];
  //     let cur = JSON.stringify(chng.currentValue);
  //     let prev = JSON.stringify(chng.previousValue);
  //     console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
  //   }
  // }

}

