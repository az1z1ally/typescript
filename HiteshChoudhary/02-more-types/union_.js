"use strict";
// union is recommended instead of any type to have more control of your code
Object.defineProperty(exports, "__esModule", { value: true });
var score;
score = 33;
score = "44";
var alby = { name: "a", id: 123 };
alby = { username: "az", id: 145 };
function getDBId(id) {
    // Making some API calls
    if (typeof id === "string") {
        id.toLowerCase();
    }
    console.log("DB id is: ".concat(id));
}
getDBId(3);
getDBId("3");
// Union & Arrays
// Classical errors in creating array mix of two types
// const data: string | number[] = [1, 2, "3"]
// const data: string[] | number[] = [1, 2, "3"]  // The interpretation is data can either be all(array of) strings or all numbers 
// const data: any[] = ["1", 2, "3"] // it works but not the best practise
var data = ["1", 2, "3"]; // The correct way: you can have multiple types
var pi = 3.14;
var seatAllotment;
// seatAllotment = "crew" // This will complain
seatAllotment = "window";
