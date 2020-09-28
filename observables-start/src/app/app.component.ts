import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user1actvated=false;
  user2actvated=false;

  constructor(private userService:UsersService){}

  ngOnInit(){
    this.userService.userActivated.subscribe(
      (id:number)=>{
        if(id === 1){
          console.log(id)
          this.user1actvated=true;
        }
        if(id ===2){
          console.log(id)
          this.user2actvated=true;
        }
      }
    );
  }

}
