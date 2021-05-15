//Generics
//hover mouse to function name and check the type

function insertAtBegining(arr:any[], value:any){
    return ([(value),...arr]);
}

//This function will accept any type of value. but we can not do math operation on
//number, vise versa

const resultt= insertAtBegining([1,2,3],0);
//this will throw error as we have numbers in the array.

//Generics

function genericsDemo<T>(arr: T[], value:T){
    return([value,...arr])
}

let genresultNum=genericsDemo([1,2,3],0);
console.log(genresultNum)

let genresultStr=genericsDemo(['a','b','c'],'d');
console.log(genresultStr)