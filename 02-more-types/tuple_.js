"use strict";
// const user: (string | number)[] = ["a", 1]  // here you can do also [1, "a"]
Object.defineProperty(exports, "__esModule", { value: true });
var user;
user = ["a", 1, true]; // you can not do user = ["a", true, 1]
// NB: Tuple make sure not just what is inside the array, even the ordr of the array matters
// It's very use for things like API calls when data has to be in a specific order sometimes
// Another classic example is RGB values where we don't expect there will a fourth number
var rgb = [255, 109, 18]; // you can't add the fourth number like an opacity since this is not how the tuple was declared
var newUser = [1, "abc"];
newUser[1] = "cbd";
