import { Component } from '@angular/core';
import { User } from './user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'List of dummy users';
  constructor(private userService: UserService) {}

  users: User[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
      return this.users;
    });
  }
}
