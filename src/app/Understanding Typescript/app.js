// // https://www.youtube.com/watch?v=BwuLxPH8IDs 
function combine(input1, input2, responseType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (responseType = 'number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
console.log(combine('30', '56', 'string'));
console.log(combine(30, 56, 'number'));
//function return types 
//normally ts knows the return type already, if there's no need to define the return type explicitly don't do it.
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
// let pt: Function = print; //ts now knows the only function can be put into 'pt' variable
// let pt: (a: number, b:number) => number = add; //ts now knows that only function with two number parameters and return type number can be put in 'pt' variable
// const add1 = function (n1: number, n2: number)  {
//     return n1 + n2;
// }
// console.log(pt(5,14));
console.log(add(5, 14));
//callbacks in higher ordered functions 
function useCallback(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
useCallback(20, 15, function (a) {
    console.log(a);
});
//unknown and never types
// //unknown type can be seen similar to any type, but is different. While using any ts, doesn't do any type checking but that's not the case with the unknown type
// //for example:
// let userInput: unknown;
// let userName: string;
// userInput = 1;
// userInput = 'Abhi'; //userInput can take any type of value just the 'any' type
// userName = userInput; //but this will show error as type checking is done by ts in this case. If the type of userInput had been 'any', then there would have been no errors
// //'unknown' and 'any' are similar but not the same
function generateError(message, code) {
    throw {
        errorMessage: message,
        errorCode: code
    };
}
generateError('Resource Not Found!', 404);
