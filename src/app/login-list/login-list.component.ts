import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {
  loginUsers: { login: string, password: string } = {login: 'default', password: 'default'};
  trueLogin: [{ login: string, password: string }] = [
    {login: 'vasulko', password: '123'},
    {login: 'kolik', password: '1234'}
  ];
  failLog: [{ login: string, password: string, date: any }] = [];
  rezult = 'test';
  clear = '';

  constructor() {
  }


  tryLogin(eventUsers: { login: string, password: string }) {
    this.loginUsers = eventUsers;
    console.log(this.loginUsers, ' - loginUsers');
    let rez = '';

    userMark: for (const i of this.trueLogin) {
      if ( i.login === this.loginUsers.login && i.password === this.loginUsers.password ) {
        console.log('i.login === userLogin.login', i, true);
        rez = 'succesful';
        break userMark;
      } else {
        console.log('i.login === userLogin.login', i, false);
        rez = 'try again';
      }
    }
    if (rez === 'try again') {
      const date = new Date();
      this.failLog.push({
        password: this.loginUsers.password,
        login: this.loginUsers.login,
        date
      });
    } else {
      console.log(rez, ' - rez');
    }
    console.log(this.failLog);
    console.log(rez);

    this.rezult = rez;
  }

  clearFailListUsers(eventClear: {clearList: string}) {
    this.clear = eventClear.clearList;
    console.log(this.clear);
    this.failLog = [{ login: '', password: '', date: '' }];
  }

  ngOnInit() {
  }
//
// ngOnChanges(changes: SimpleChanges): void {
//   for (let propName in changes) {
//     let chng = changes[propName];
//     let cur  = JSON.stringify(chng.currentValue);
//     let prev = JSON.stringify(chng.previousValue);
//     console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
//   }
// }
}
