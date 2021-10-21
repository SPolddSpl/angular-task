import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
//User Service, still in work
export class UsersService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  async getUsers(): Promise<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`).toPromise();
  }
}
interface User {
  role: string;
  firstName: string;
  lastName: string;
  isBlocked: boolean;
  comments: Comment[];
  date: string;
}