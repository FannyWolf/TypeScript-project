import { log } from "console";

function Lesson06() {

// 1. String

// let username: string = 'Bob';
// username = 'Harry;'
// console.log(username);

// 2. Number

let number: number = 42;
number = 7.1;
console.log(number);

// 3.boolean

let isAdmin:boolean = false;
isAdmin = true;
isAdmin = 2 > 3;
console.log(isAdmin);

// null / undefined

// arrays

const colors:string[] = ['red', 'green', 'blue'];
colors.push("");
colors[3] = 'yellow';
console.log(colors);


return (
    <div className="lesson-container">
        <h4>Lesson 06</h4>
    </div>)
}

export default Lesson06;