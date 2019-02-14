import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  login = '';
  password = '';

  constructor() { }

  @Output() onlogIn = new EventEmitter <{login: string, password: string}>();

  logInUser() {

    console.log(this.login, ' - login');
    console.log(this.password, ' - password');

    this.login = '';
    this.password = '';
  }

  ngOnInit() {
  }

}
