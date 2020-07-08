import { Component, OnInit } from '@angular/core';

import { Users } from '../model/Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularCRUDTest';
  users = {} as Users;
  user: Users[] = [
    { 'username': "example", 'email': "example@gmail.com", 'rol': "User" },
    { 'username': "example2", 'email': "example2@gmail.com", 'rol': "Administrator" },
    { 'username': "example3", 'email': "example3@gmail.com", 'rol': "User" }
  ];
  editing: boolean = true;
  reading: boolean = false;

  ngOnInit() {
    this.user;
  }

  register() {
    this.user.push(this.users);
    console.log(this.user);
    this.users = {} as Users;
  }

  read(user:Users){
    this.users = user;
    this.reading = true;
    this.editing = true;
  }

  edit(user: Users) {
    //console.log(user);
    this.users = user;
    this.editing = false;
    if (this.editing) {
      this.users = {} as Users;
    }
  }

  update(user: Users) {
    //console.log(user);
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i] == user) {
        this.user[i] = user;
      }
    }
    this.users = {} as Users;
    this.editing = true;
  }

  delete(user: Users) {
    //console.log(user);
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i] == user) {
        this.user.splice(i, 1);
      }
    }
  }

  cancel() {
    this.editing = true;
    this.reading = false;
    this.users = {} as Users;
  }

}