var student = /** @class */ (function () {
    /*  public firstName:string;
     public lastName:string;
     public age:number;
  */
    function student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return student;
}());
var studentObj = new student('mani', 'vel', 33);
console.log(studentObj.firstName);
