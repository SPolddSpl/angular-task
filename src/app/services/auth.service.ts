import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comment } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  async authUser(userName: string, password: string, rememberMe: boolean) {
    if (password === '123') {
      const users = await this.getUsers();
      console.log('UserName', userName);
      const user = users.find(user => user.firstName === userName);

      localStorage.setItem('userRole', user.role);
      localStorage.setItem('isBlocked', String(user.isBlocked));
    }
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