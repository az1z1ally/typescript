// const user: (string | number)[] = ["a", 1]  // here you can do also [1, "a"]

let user: [string, number, boolean]

user = ["a", 1, true]  // you can not do user = ["a", true, 1]


// NB: Tuple make sure not just what is inside the array, even the ordr of the array matters
// It's very use for things like API calls when data has to be in a specific order sometimes

// Another classic example is RGB values where we don't expect there will a fourth number
let rgb: [number, number, number] = [255, 109, 18] // you can't add the fourth number like an opacity since this is not how the tuple was declared

// Alternatively you can use type
type tuser = [number, string] // Every tuser must be a tuple of number followed by string

const newUser: tuser = [1, "abc"]
newUser[1] = "cbd"

// newUser.push(true) // On new version this has been fixed

export{}