console.log("This is tutorial 34");

function greet(name, greetText="Greetings from JavaScript"){
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}
function sum(a,b,c){
    let d = a + b + c;
    return d;
    // This line will never execute (Unreachable code)
    // console.log("Function is returned");
}


let name = "Sam";
let name1 = "Shubham";  
let name2 = "Rohan";
let name3 = "Sagar";
let greetText1 = "Good Morning";
greet(name, greetText1);
greet(name1, greetText1);
greet(name2, greetText1);
// let returnVal = greet(name3);
// console.log(returnVal)

let returnVal = sum(2,4,6);
console.log(returnVal)
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy"); 