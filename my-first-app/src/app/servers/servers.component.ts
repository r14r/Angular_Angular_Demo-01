import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';
 

@Component({
  // can be used as deirect elemnt
 // selector: 'app-servers',
  // can be used as attribute
    // selector: '[app-servers]',

    // can be used as class 
    selector: '.app-servers',

    // using html file path
   // templateUrl:'./servers.component.html',

  // inline teamplte 
  // template: `<app-server></app-server>
  //               <hr>
  //               <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  servrCreationStaus='server is not created';
  serverName=' test server'
  serverCreated=false;
  servers=['testserver 1','test server 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName)
    this.servrCreationStaus='server was created , server name is'+this.serverName;
  }

  onUpdateServerName(event:any){
        this.serverName=(<HTMLInputElement>event.target).value;
  }
}
