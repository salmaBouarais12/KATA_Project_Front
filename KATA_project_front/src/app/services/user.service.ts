import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../domain/user';
import { HttpClient } from '@angular/common/http';
import { configEndpointsApi } from '../api/config-endpoints-api';
import { UsersResponse } from './dtos/UsersResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    // Making an HTTP GET request using Angular's HttpClient
    return this.http.get<UsersResponse>(configEndpointsApi.endpoints.users.read)
      .pipe(map(this.mapUsersResponseToUsers));
  }

  mapUsersResponseToUsers(response: UsersResponse): User[] {
    return response.persons.map(p => ({
      id: p.id,
      firstName: p.firstName,
      lastName: p.lastName
    }));
  }
}
