import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthunticateService {

  constructor() { }

  authenticate(username, password) {
    if (username === "admin" && password === "test@123") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
