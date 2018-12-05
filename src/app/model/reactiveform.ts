export interface ReactiveForm{
    FirstName:string;
    LastName:string;
    Gender:boolean;
    DOB:number;
    MobileNo:number;
    EmailId:string;
    FlatNo?:number;
    WingNo?:string;
    Address?:any;
    MaritalStatus?:boolean;
    FamilyCount?:number;
    Education?:string;
    Occupation?:string;
    AnniversaryDate?:number;
    ProfilePic?:any;
    UserLogin:{  
       UserName:string;
       Password:any;
    }
 }
 
