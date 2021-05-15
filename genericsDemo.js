//Generics
//hover mouse to function name and check the type
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function insertAtBegining(arr, value) {
    return (__spreadArray([(value)], arr));
}
//This function will accept any type of value. but we can not do math operation on
//number, vise versa
var resultt = insertAtBegining([1, 2, 3], 0);
//this will throw error as we have numbers in the array.
//Generics
function genericsDemo(arr, value) {
    return (__spreadArray([value], arr));
}
var genresultNum = genericsDemo([1, 2, 3], 0);
console.log(genresultNum);
var genresultStr = genericsDemo(['a', 'b', 'c'], 'd');
console.log(genresultStr);
