"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Alby",
    email: "alby@gmail.com",
    isActive: false
};
function createUser(obj) { }
createUser({ name: "Alby", email: "alby@gmail.com" });
var newUser = { name: "Alby", email: "alby@gmail.com", age: 29 };
// objects weird behaviour(more information has been passed) age was passed here even if it is not what is expected from the function def.
// Not all the weirdness of JS will be removed by writting TS
createUser(newUser);
// Returning general object
function displayCourse() {
    return {};
}
// Returning object with the special values
function registerCourse() {
    return { name: "angular", price: 9.99 };
}
// type myString = string  // whenever you are using a string type, you can say myString
function userCreate(user) {
    return { name: user.name, email: user.email, isActive: true };
}
userCreate({ name: "name", email: "email@email.com", isActive: true });
