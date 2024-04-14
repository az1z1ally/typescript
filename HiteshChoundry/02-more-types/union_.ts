// union is recommended instead of any type to have more control of your code

let score: number | string
score =  33
score = "44"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}


let alby: User | Admin = {name: "a", id: 123}
alby = {username: "az", id:145}


function getDBId(id: number | string){
    // Making some API calls

    if (typeof id === "string"){
        id.toLowerCase()
    }
    console.log(`DB id is: ${id}`)
} 

getDBId(3)
getDBId("3")

// Union & Arrays

// Classical errors in creating array mix of two types
// const data: string | number[] = [1, 2, "3"]

// const data: string[] | number[] = [1, 2, "3"]  // The interpretation is data can either be all(array of) strings or all numbers 

// const data: any[] = ["1", 2, "3"] // it works but not the best practise
const data: (string | number)[] = ["1", 2, "3"] // The correct way: you can have multiple types

let pi: 3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "window"

// seatAllotment = "crew" // This will complain
seatAllotment = "window"

export {}