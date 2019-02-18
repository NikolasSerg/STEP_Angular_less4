import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  login = '';
  password = '';
  @Input() rezult: string;

  constructor() {
  }

  @Output() onlogIn = new EventEmitter<{ login: string, password: string }>();

  logInUser() {
    this.onlogIn.emit({login: this.login, password: this.password});
    console.log(this.login, ' - login');
    console.log(this.password, ' - password');

    this.login = '';
    this.password = '';
  }

  ngOnInit() {
  }

}
