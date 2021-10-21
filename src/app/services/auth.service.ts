import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comment } from './products.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})

//Auth service for mock authorization, but i didnt finish it 
export class AuthService {
  baseUrl: string;
  constructor(private http: HttpClient, private userService: UsersService) {
    this.baseUrl = environment.baseUrl;
  }

  //there should be some logic for auth users
  async authUser(userName: string, password: string, rememberMe: boolean) {
    if (password === '123') {
      const users = await this.userService.getUsers();
      const user = users.find(user => user.firstName === userName);

      localStorage.setItem('userRole', user.role);
      localStorage.setItem('isBlocked', String(user.isBlocked));
    }
  }
}


