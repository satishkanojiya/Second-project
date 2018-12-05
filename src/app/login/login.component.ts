import {Component} from '@angular/core';
import {ReactiveForm} from '../model/reactiveform';
import {Validators,FormGroup,FormBuilder} from '@angular/forms';
import {UserRegx} from '../regx';
import  {FormServices} from '../model/form.services';
import {Router} from '@angular/router';
@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css'],
})
export class LoginComponent{

    userForm:FormGroup;
    constructor (private _fb: FormBuilder,private formservices:FormServices,private router:Router){}
     ngOnInit(){
         this.userForm= this._fb.group({
          UserLogin: this._fb.group({
             'UserName':['',[Validators.required,UserRegx.UserName]],
             'Password':['',[Validators.required,UserRegx.Password]]
          })
            })
      }
      Save(data:ReactiveForm){
        console.log(data);
          this.formservices.Register(data).subscribe(val=>{
              if(val)
              {
                  alert('Login succesful');
                  this.router.navigateByUrl('/home');
                  
              }
          })
      }


    
}