import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupform:NgForm;

  defaultQuestion='teacher'
  answer='';
  genders=['male','female']

  user={
    'username':'',
    'email':'',
    'secret':'',
    'qanswer':'',
    'gender':''
  }

  isSubmiited=false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // # using set value
    // this.signupform.setValue({
    //   userdata:{
    //     'username':suggestedName,
    //     'email':''
    //   },
    //   'secret':'pet',
    //   'gender':'male',
    //   'questionAnser':'test'
    // });

    // using patch 
    this.signupform.form.patchValue({
      userdata:{
      'username':suggestedName
    }
    });
  }


  


  onSubmit(form:NgForm){
    // console.log(form);
   // console.log(this.signupform);
   this.isSubmiited=true;
   this.user.username=this.signupform.value.userdata.username;
   this.user.email=this.signupform.value.userdata.email;
   this.user.secret=this.signupform.value.secret;
   this.user.qanswer=this.signupform.value.questionAnser;
   this.user.gender=this.signupform.value.gender;

   //this.signupform.reset();
  }

  onclear(){
    // console.log(form);
   //console.log(this.signupform);
   this.isSubmiited=true;
   this.user.username=""
   this.user.email="";
   this.user.secret="";
   this.user.qanswer="";
   this.user.gender="";

   this.signupform.reset();
  }

 
}
