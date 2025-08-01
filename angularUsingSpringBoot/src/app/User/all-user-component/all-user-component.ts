import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.model';
import { UserService } from '../../Service/user-service';

@Component({
  selector: 'app-all-user-component',
  standalone: false,
  templateUrl: './all-user-component.html',
  styleUrl: './all-user-component.css'
})
export class AllUserComponent implements OnInit{


users: User[] = [];
constructor(
  private userService: UserService
){}

  ngOnInit(): void {
    this.loadAllUsers();
  }


loadAllUsers() {
  this.userService.getAllUser().subscribe({
    next: (res) => {
      this.users = res;
    },
    error: (err) => {
      console.log(err);
    }
  });
}

}
