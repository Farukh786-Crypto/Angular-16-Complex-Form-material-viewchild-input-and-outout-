import { Skill } from "./skills";

export interface Student{
    name:string;
    phoneNumber:string,
    emailAddress:string,
    skills:Skill[] | null
}
