import { Component, OnInit } from '@angular/core';
import { UsersListService } from './users-list.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users=[];

  constructor(private usersListService:UsersListService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.usersListService.getUsers().subscribe(
      (res)=>{
        this.users=res;
        console.log(res,"...from users list component");
                     
      }
    );
  }



}
