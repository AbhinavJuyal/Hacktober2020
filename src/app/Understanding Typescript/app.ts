// // https://www.youtube.com/watch?v=BwuLxPH8IDs 
 
//  //when using ENUM like the following way, default values will be assigned,
// // enum Role { ADMIN, READ_ONLY, AUTHOR }; //ADMIN = 0, READ_ONLY = 1, AUTHOR = 2
// // enum role { ADMIN = 1, READ_ONLY, AUTHOR }; //ADMIN = 1, READ_ONLY = 2, AUTHOR = 3 
// enum role { ADMIN = 'Admin', READ_ONLY = 'READ', AUTHOR = 'Abhinav' }; //Custom values can also be used

//     // Declaring OBJECT type, though more details about it's property is required to access the key:value pairs or else it shows errors
// // const person: object = {
// //     name: 'Abhinav Juyal',
// //     age: 30,
// //     hobbies: ['drawing','basketball','volleyball']
// // };

//     //Giving more details so that the key:value pairs can be accessed easily
// // const person: {
// //     name: string;
// //     age: number;
// // } =

//     //this is also just fine, when it comes to declaring object type
// const person = {
//     name: 'Abhinav Juyal',
//     age: 30,
//     hobbies: ['drawing','basketball','volleyball'],
//     role: [0,'admin'],
//     acType: 'Admin'
// };

// //for tuple [.push() function works on the tupple regardless of the fact it has a fixed length, otherwis tuple can be easily edited as well];
// // const person: {
// //     name: string;
// //     age: number;
// //     hobbies: string[];
// //     role: [number, string]; //defining tuple
// //     response: boolean;
// // } = {
// //     name: 'Abhinav Juyal',
// //     age: 30,
// //     hobbies: ['drawing','basketball','volleyball'],
// //     role: [0,'admin'],
// //     response: true
// // }

// console.log(person.name,person.age);

// let i = 1;
// for(const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
//     // console.log(hobby.map()); //ERROR!!!
//     console.log(`My name is ${role.AUTHOR}, and my ${i} hobby is ${hobby.toUpperCase()}`); //using enum
//     i++;
// }

    //always try to avoid :any type, as it takes out the advantages ts is used for


    //UNION and LITERALS

    //input1: number | string -> is an union, it shows 2 different data types can be expected/stored in the variable  

// function combine(input1: number | string, input2: number | string) { 
//     // return input1 + input2; 
//     //ERROR!! not that the '+' operator doesn't work with number or string, 
//     //but ts is unsure if '+' can be used with the values present in input1 & input2, you have to work your way around it
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number') {
//         result = +input1 + +input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }

//     return result;
// }
// console.log(combine('30','56'));
// console.log(combine(30,56));

    //here responseType: 'number' | 'string' => are string literals. More examples below
    // const str = 'abhinav';
    // const num = 2.8;
    // const truthy = true;

// function combine(input1: number | string, input2: number | string, responseType: 'number' | 'string') { 
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number') {
//         result = +input1 + +input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }

//     if(responseType = 'number') {
//         return +result;
//     } else  {
//         return result.toString();
//     }
// }


    // TYPE ALIAS
type combinator = number | string; //type alias
type responseDesc = 'number' | 'string';
function combine(input1: combinator, input2: combinator, responseType: responseDesc) { 
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    if(responseType = 'number') {
        return +result;
    } else  {
        return result.toString();
    }
}
console.log(combine('30','56','string'));
console.log(combine(30,56,'number'));



    //function return types 
//normally ts knows the return type already, if there's no need to define the return type explicitly don't do it.
function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

// let pt: Function = print; //ts now knows the only function can be put into 'pt' variable
// let pt: (a: number, b:number) => number = add; //ts now knows that only function with two number parameters and return type number can be put in 'pt' variable

// const add1 = function (n1: number, n2: number)  {
//     return n1 + n2;
// }

// console.log(pt(5,14));
console.log(add(5,14));

    //callbacks in higher ordered functions 

function useCallback(n1: number, n2: number, cb: (num: number) => void) {
    let result = n1 + n2;
    cb(result);
}

useCallback(20,15,(a) => {
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


        //the following function doesn't return anything, instead it crashes/stops the script in it's execution
        //if never return type is not explicitly defined, then ts considers the function with void return type
    // function generateError(message: string, code: number): never {
    //     throw {
    //         errorMessage: message,
    //         errorCode: code
    //     };
    //     // while(true) {} //infinite loop like this results into never return type.
    // }

    // generateError('Resource Not Found!',404);
