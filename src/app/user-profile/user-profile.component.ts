import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit {
  constructor(private us: UserServiceService) {}
  profile: User[];
  ngOnInit(): void {
    this.us.getUser().subscribe((u: User[]) => {
      this.profile = u;
    });
  }
  ondelete(id: number) {
    this.us.deleteUser(id).subscribe();
    alert('user delete Succesfully');
  }
}
