import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  genders = ['male', 'female'];
  signUpForm:FormGroup;
  forbiddenUserNames=['Mike','jack']

  ngOnInit(){
    this.signUpForm= new FormGroup({
      'userData': new FormGroup({
        'username':new FormControl(null,[Validators.required,this.forbiddennames.bind(this)]),
        'email': new FormControl(null,[Validators.required,Validators.email])
      }),
      'gender':new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.signUpForm);
  }

  onAddhobbies(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  forbiddennames(control:FormControl):{[s:string]: boolean}{
    if (this.forbiddenUserNames.indexOf(control.value) != -1){
      return { 'nameisforbidden':true};
    }else{
      return null;
    }
  }
  
}
