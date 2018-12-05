import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable()
export class FormServices {
    private url=  'http://test.web.api.acorsociety.com/ideators/api/users/userregistrationasync';
    private login =   'http://test.web.api.acorsociety.com/ideators/api/users/userloginasync';
    
     
     headers:HttpHeaders;
    constructor(private http:HttpClient){
  this.headers=new HttpHeaders({'Content-Type': 'Application/json' });
    }
    Register(item){
        return this.http.post(this.url,JSON.stringify(item), {headers:this.headers});
    }
    user(item){
        return this.http.post(this.login,JSON.stringify(item),{headers:this.headers})
    }
}