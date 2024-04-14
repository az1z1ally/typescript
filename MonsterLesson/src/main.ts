// VARIABLES
const a:string = "1"
console.log("aaa", a)

// FUNCTIONS
const getFullName = (name:string, surname:string): string => {
    return `${name} ${surname}`
}

// OBJECTS
// Unlike JS, TS can be helpful with entity definition 
const user: {name:string, age:number} = { 
    name: "TS",
    age: 7
}

// INTERFACES -- Special type in TS that help us to describe entities(create object with some properties)
interface User {
    name: string
    age?: number //age is not mandatory(?)
}

const newUser: User = {
    name: "Interface",
    age: 0
}

const noAgeUser: User = {
    name: "No Age"
}
