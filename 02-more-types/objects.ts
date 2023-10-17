let User = {
    name: "Alby",
    email: "alby@gmail.com",
    isActive: false
}


function createUser(obj: {name: string, email:string}){}

createUser({name: "Alby", email: "alby@gmail.com"})

let newUser = {name: "Alby", email: "alby@gmail.com", age: 29}

// objects weird behaviour(more information has been passed) age was passed here even if it is not what is expected from the function def.
// Not all the weirdness of JS will be removed by writting TS
createUser(newUser)



// Returning general object
function displayCourse(): {}{
    return {}
}

// Returning object with the special values
function registerCourse(): {name: string, price: number}{
    return {name: "angular", price: 9.99}
}



// Type aliases
type User = {
    name: string;
    email: string;
    isActive: boolean
}

// type myString = string  // whenever you are using a string type, you can say myString

function userCreate(user: User): User{
    return {name: user.name, email: user.email, isActive: true}
}

userCreate({name: "name", email: "email@email.com", isActive: true})

// Note: You can use type alias to give a name to any type not just object type
// type myString = string;  // whenever you are using a string type, you can say myString
// type ID = number | string;

export {}