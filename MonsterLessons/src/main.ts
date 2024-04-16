// VARIABLES
const a:string = "1"
console.log("aaa", a)

// FUNCTIONS
const getFullName = (name:string, surname:string): string => {
    return `${name} ${surname}`
}

// OBJECTS
// Unlike JS, TS can be helpful with entity definition 
const user$: {name:string, age:number} = { 
    name: "TS",
    age: 7
}

// INTERFACES -- Special type in TS that help us to describe entities(create object with some properties)
interface IUser {
    name: string
    age?: number //age is not mandatory(?)
    // getMessage: () => string
    getMessage(): string
}

// class User {} // If we have our interface name IUser as well it can lead to confusion, that's why it good to suffix interfaces with word Interface to differentiate it with class names

const newUser: IUser = {
    name: "Interface",
    age: 0,
    getMessage() {
        return `Hello ${name}`
    },
}

const noAgeUser: IUser = {
    name: "No Age",
    getMessage() {
        return `Hello ${name}`
    },
}

console.log(newUser.age);

// UNIONS -- Used to combine data types
let pageNumber: string | number = "1"

// The most popular usecase of union is checking for null
let errorMsg: string | null = null // By default errorMsg it is null, may be later at some point we can get an error so we want to write it inside string

let userUnion: IUser | null = null // userUnion is null b'se we didn't fetch user or it can be IUser

// let someProp: string | number | null | undefined | string[] // Avoid overusing union b'se it makes your code loose the safety advantage we got from TS

// TYPE ALIASES -- creating our own types apart from basic types(string, number, objects, array etc.)
type ID = string // using aliases for basic types

interface ProductInterface {
    id: ID // type ID instead of string(it does'nt matter but for readability)
    name: string
}

type PopularTag = string
type MaybePopularTag = PopularTag | null // defining a custom type combining union and type so that we don't use the union def. everytime(PopularTag | null)

const popularTags: PopularTag[] = ["coffee", "programming"]


// ANY/VOID/NEVER/UNKNOWN
let foo: void // It make no sense, because we can't assign it anything more than undefined and null, we use it to say the function don't return anything
foo = null
foo = undefined // foo = "foo" // this will throw an error b'se void is a set of null & undefined

// any
let any$: any; // Simply anything can be assigned later(any type turns-off typescript checks != recommended)
any$ = 1
any$ = "mambo"
any$ = [0,1]
// console.log(any$.bar()); // This won't complain(TS ignores it) even if any$ don't have property bar()

//never
const doSomething = (): never =>{
    throw "never"
    // console.log('never');  //function returning never cannot be executed to the end(we cannot have code that will end)
}


// unknown
let vAny: any = 10
let ab = vAny

let vUnknown: unknown = 10 // default to 10
vUnknown = "a" // At the beginning it looks like it works much like any but it's not see example below

let s1:string = vAny
let s2: string = vUnknown as string // We can't assign unknown directly into other type b'se TS does'nt know yet what type is it
// console.log(vUnknown.foo());

let pageNo: string = "1"
let numericPageNo: number = (pageNo as unknown )as number



// WORKING WITH DOM
const someElement = document.querySelector(".foo") as HTMLInputElement  // TS by default will give us an Element which is a generic type(which is highest class in hierarchy) b'se it only know about type and not our markup hence we use "as" to convert it to a specific DOM element i.e input element
// console.log("someElement", (someElement as any).value); // Not recommended quick fix the use of as to convert element to a specific DOM element is recommended
console.log("someElement", someElement.value); // Without as assertion we can only access generic properties for all DOM elements


// Adding an event listener
someElement.addEventListener("blur", (event) => { // Type Event is also a highest class in hierachy, which will be the default if we don't use the appropriate type when we select our element
    const target = event.target as HTMLInputElement // Defining our target first to a correct type
    console.log("event", target.value);
})
// Working with DOM in TS is just type narrowimg with "as"