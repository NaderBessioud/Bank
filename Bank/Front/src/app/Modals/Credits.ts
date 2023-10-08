import { Offer } from "./Offer";
import { User } from "./user";

 
export class credits{
    id:any;
    amount:number;    
    jobActivity:string;
    state:string;
    startDate:Date;
    birthday:Date;
    gender:string;
    duration_months:number; 
    clientcr:User;
    offer:Offer;
}