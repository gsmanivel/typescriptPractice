function addMe(a:number, b: number){
    return a+b;
}

const result=addMe(4,3);
console.log(result);

let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
console.log(numberStore)