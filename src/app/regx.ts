export class UserRegx{
     static FirstName(control)
     {
      const regx=  /^[a-zA-Z0-9]+$/;
      const valid= regx.test(control.value);
      return valid ? null :{FirstName:true} 
     }

     static LastName(control)
     {
        const regx=  /^[a-zA-Z0-9]+$/;
        const valid= regx.test(control.value);
        return valid ? null :{LastName:true} 
       }
       static MobileNo(control)
       {
        const regx=/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
        const valid= regx.test(control.value);
        return valid ? null :{MobileNo:true} 
       }

       static Email(control)
       {
        const regx=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        const valid= regx.test(control.value);
        return valid ? null :{EmailId:true} 
       }
       
       static UserName(control)
       {
           const regx=/^[a-zA-Z0-9]+$/      ;
           const vaild=regx.test(control.value);
           return vaild ? null :{UserName:true}
       }

       static Password(control)
       {
           const regx=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
           const vaild=regx.test(control.value);
           return vaild ? null :{Password:true}
       }

       


       
   
}