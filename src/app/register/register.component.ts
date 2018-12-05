import {Component,OnInit} from '@angular/core';
import {ReactiveForm} from '../model/reactiveform';
import {Validators,FormGroup,FormBuilder} from '@angular/forms';
import {UserRegx} from '../regx';
import  {FormServices} from '../model/form.services';
import {Router} from '@angular/router';

@Component({
    selector:'app-register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css'],
})
export class RegisterComponent implements OnInit{
    userForm:FormGroup;
    constructor (private _fb: FormBuilder,private formservices:FormServices,private router:Router){}
     ngOnInit(){
         this.userForm= this._fb.group({
            
            'FirstName':['', [Validators.required, UserRegx.FirstName]],
            'LastName': ['', [Validators.required, UserRegx.LastName]],
            'MobileNo': ['',[Validators.required,  UserRegx.MobileNo]],
            'EmailId': ['',[Validators.required,   UserRegx.Email]],
          UserLogin: this._fb.group({
             'UserName':['',[Validators.required,UserRegx.UserName]],
             'Password':['',[Validators.required,UserRegx.Password]]
          })
            })
      }
      Save(data:ReactiveForm){
        console.log(data);
          this.formservices.Register(data).subscribe(value=>{
              if(value)
              {
                  alert('registration succesful');
                  this.router.navigateByUrl('/login');
                  
              }
          })
      }

} 
