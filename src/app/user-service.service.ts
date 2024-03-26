import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
const myheader = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  url = 'http://localhost:3000/User';
  constructor(private http: HttpClient) {}
  insertData(registerData): Observable<User> {
    return this.http.post<User>(this.url, registerData, {
      headers: myheader,
    });
  }
  getData(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id);
  }

  updateData(editData): Observable<User> {
    return this.http.put<User>(this.url + '/' + editData.id, editData, {
      headers: myheader,
    });
  }

  updateProfileData(editProfileData): Observable<User> {
    return this.http.patch<User>(
      this.url + '/' + editProfileData.id,
      editProfileData,
      {
        headers: myheader,
      }
    );
  }
}
