import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { Observer, Subscription } from 'rxjs/Rx';
import { d } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  numberObssubs:Subscription;
  customObssubs:Subscription;

  constructor() { }

  ngOnInit() {
    const myNumber=Observable.interval(1000)
    .map(
      (data:number) =>{
        return data*2;
      }
    )
   this.numberObssubs= myNumber.subscribe(
      (number:number)=>{
        console.log(number);
      }
    )

    const myobersvable=Observable.create((observer:Observer<string>) =>{
      setTimeout(() =>{
        observer.next("first package")
      },2000);
      setTimeout(() =>{
        observer.next("second package")
      },4000);
      setTimeout(() =>{
        //observer.error("this is not working")
        observer.complete();
      },5000);
      setTimeout(() =>{
        observer.next("fourth package")
      },6000);
  
    });
    this.customObssubs=myobersvable.subscribe(
      (data:string)=>{console.log(data)},
      (error:string)=>{console.log(error)},
      () =>{ console.log("complted")}
    );
  }


  ngOnDestroy(){
    this.numberObssubs.unsubscribe();
    this.customObssubs.unsubscribe();
  }

}
