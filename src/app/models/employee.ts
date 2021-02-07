import { Name } from "./name";
import { Picture } from "./picture";

export class Employee{
    cell:string;
    email:string;
    gender: 'male' | 'female';
    name:Name;
    picture:Picture;
    
    public constructor(name : Name, dateJoined : string){}
}