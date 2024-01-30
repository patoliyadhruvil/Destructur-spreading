let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let s = [11, 12, 13]
let student = {
    name: "raj",
    age: 20,
    email: "raj@gmail.com"
}


let a1 = number[0];
let b2 = number[1];


// destructur



let {email} = student;
console.log("name", email);

let d1 = {...student, id:"301"}
console.log(d1);

let [a, b, c, d, e, f, g] = number;
console.log("a,b,c,d,e,f,g", a, b, c, d, e, f, g);

console.log('a1 , b2', a1, b2);

let n = [...number, ...s,];
console.log(n);

