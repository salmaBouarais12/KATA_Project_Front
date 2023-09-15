import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  users: any[] = [];

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers()
      .subscribe(users => { // Subscribing to the Observable
        console.log("data", users);  // Logging the response data
        this.users = users;
      });
  }

  editUser(user : any){
    this.router.navigateByUrl("/edit-user/" + user.id)
  }
}
