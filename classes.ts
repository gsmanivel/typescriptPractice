class student{
   /*  public firstName:string;
    public lastName:string;
    public age:number;
 */
    constructor(public firstName:string, public lastName:string,public age:number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    } 
}

const studentObj=new student('mani','vel',33);
console.log(studentObj.firstName);