var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function addMe(a, b) {
    return a + b;
}
var result = addMe(4, 3);
console.log(result);
var numberStore = [0, 1, 2];
var newNumber = 12;
numberStore = __spreadArray(__spreadArray([], numberStore), [newNumber]);
console.log(numberStore);
