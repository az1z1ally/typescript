interface Point {
    x: number;
    y: number;
}

function printCoordinate(pt: Point) {}
printCoordinate({x: 1, y: 2})

// Reopening of the interface, commonly if you are getting a package or someone else's github repo
interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    //startTrail: () => string,
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

interface User {
    githubToken: string
}

// Interface support inheritance, you can have a comma separated values of superclasses
interface Admin extends User {
    // role: string
    role: "admin" | "ta" | "learner"
}


const alby: User = {dbId: 123, email: "a@a.com", userId: 1123,
startTrial: () => {
    return ""
},
getCoupon: (name: "ab", off: 10) => {  // Notice name, we did'nt use couponName: "ab". TS allow us
    return 10
},

githubToken: "github"
}


const winsum: Admin = {dbId: 123, email: "a@a.com", userId: 1123,
startTrial: () => {
    return ""
},
getCoupon: (name: "win", off: 9) => {  // Notice name, we did'nt use couponName: "ab". TS allow us
    return 1
},

githubToken: "gh",
role: "admin"
}


// Note: Make sure you don't have the same name as your interface in any other package to avoid messing it up 

/*
Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
Almost all the features of an interface are available in type, the key distinction is that a type cannot
be reopened to add new properties vs an interface which is always extendable.

// Extending an interface
interface Animal {
    name: string
}

interface Zebra extends Animal {
    color: string
}

// Extending type via intersections
type Animal {
    name: string
}

type Zebra = Animal & {
    color: string
}
*/
export {}