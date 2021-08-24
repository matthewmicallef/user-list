import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models';

/**
 * In a real-life scenario with bigger scope this would be placed in app.config.ts (using InjectionToken)
 * and the value passed on by the app consumed the SDK library for these services.
 */
const USER_LIST_API_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${USER_LIST_API_URL}`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${USER_LIST_API_URL}/${id}`);
  }
}
