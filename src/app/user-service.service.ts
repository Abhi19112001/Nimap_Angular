import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}
  saveUser(user: User) {
    return this.http.post('http://localhost:3000/User', user);
  }
  getUser() {
    return this.http.get('http://localhost:3000/User');
  }
  deleteUser(id: number) {
    return this.http.delete('http://localhost:3000/User/' + id);
  }
}
