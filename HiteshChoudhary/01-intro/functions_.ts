let logInUSer = (name: string, email:string, isPaid: boolean = false) => {}

function addTwo(num: number): number {
    // return "Hello"
    return num + 2
}

const getValue = (s: string): string => ""

// const heros = [1, 2, 3]
const heros = ['a', 'b', 'c']

// heros.map(hero => {
//     return `Hero is ${hero}`
// })

// Explicity type declaration
// heros.map((hero: string) => {
//     return `Hero is ${hero}`
// })

// Explicitly set the return type, above we set the type of a hero value
heros.map((hero): string => {
    return `Hero is ${hero}`
})


/*
Explicitly mention the return type to void as a good practise in TS, so that whoever is using the function will that
the fuction returns void
*/
function consoleError(erromsg: string): void{
    console.log(erromsg)
}

function handleError(erromsg: string): never{
    throw new Error(erromsg)
}


export {}