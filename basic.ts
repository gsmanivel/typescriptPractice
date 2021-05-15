//------------------------------------------------------
//primitives
let age:number; // number
age=12;

let userName: string;   //string
let isInst:boolean;     // boolean

//------------------------------------------------------
//more complex types

let person:{
    myName:string;
    age:number;
};

person={
    myName:'mani',
    age:12
};
//------------------------------------------------------
//implicit type declaration (type inference)
/* Here we do not declare the type of the variable explicitly.
 By default typescript understands and implicitly assigns type */

let course='asdas';
//course=12; 
//------------------------------------------------------

//array
let newage:number[];
newage=[1,2,3,4]
//------------------------------------------------------

//union

let myunion:string | number
myunion='mani'
myunion=12
//------------------------------------------------------

//alias
let amount:number;
let newamount=amount;

newamount=12;
//------------------------------------------------------

// explicitl declare return type in function
function add(a:number,b:number):number|string{
    return a-b;
}

//------------------------------------------------------
//any and void . mouse hover on function name. void is mentioned as return type
function print(value:any){
    console.log(value);
}

//------------------------------------------------------



