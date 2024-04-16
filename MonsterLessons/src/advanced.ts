interface UserInterface {
    getFullName?(): string
}
// Note TS gives us flexibility to write classes just like in JS but in a more strict way

// CLASSES
class User implements UserInterface{ // Implementing an interface
    private firtsName: string
    private lastName: string
    readonly unchangeableName: string
    static readonly maxAge = 50

    constructor(firstName: string, lastName:string) {
        this.firtsName = firstName
        this.lastName = lastName
    }

    getFullName(): string {
        return `${this.firtsName} ${this.lastName}`
    }

    changeUnchangeableName(): void {
        // this.unchangeableName = "foo"
    }
}


// Inheritance
class Admin extends User {
    role: string
    private editor: string

    constructor(firstName: string, lastName: string, role:string) {
        super(firstName, lastName)
        this.role = role
    }

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }

    getRole(): string {
        return this.role
    }
}



const user = new User("JS", "ECMA")
console.log(user.getFullName(), User.maxAge);

const admin = new Admin("TS", "Transpile", "ADMIN")
console.log(admin.getFullName(), admin.getRole());


// GENERIC DATA TYPE/INTERFACE == Generics allow us to provide different data types to our functions or interfaces
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id
    }
}

interface IGeneric<T, V> {
    name: string,
    data: T, // Our interface does'nt know what T will be
    meta: V
}

const $user: IGeneric<{meta: string}, string> = {
    name: "GENERIC",
    data: {meta: "foo"},
    meta: "bar"
}

const $user2: IGeneric<string[], boolean> = {
    name: "GENERIC",
    data: ["TS", "JS"],
    meta: true
}

// const result = addId<string>("foo") // const result = addId("foo")
const result = addId<IGeneric<{meta: string}, string>>($user) // Hey! TS we're calling this fuction(addId()), this is a generic fuction(addId), and here we are passing as a generic data type "IGeneric". TS understand all this on its own but here we are saying it explicitly.
console.log(result);

// READING TYPES FROM DIFFERENT LIBRARY
// export function any<T>(fn: (a: T) => boolean, list: readonly T[]): boolean // Returns true if atleast one of the elements of list match the predicate, otherwise false.
const searchStr = "foo"
// const hasSearchedStr = any<string>((el: string) => el.contains(searchStr), ["foooo", "bar", "baz"])

// export function append<T>(el: T, list: readonly T[]): T[] // Function append() inside ramda returns a new array which can be of different type.
// const updatedArray = append<string>("baz", ["foo", "bar"]) 


// ENUMS == Let us limit the number of choices(values) for your properties(variables)
// It is highly recommended to use "enums" for Constants
// It is a good practice to postfix enums with word "Enum" to differentiate it from interface & class names

const statuses = {
    started: 0,
    inProgress: 1,
    done: 2
}

console.log(statuses.inProgress);

// Creating the same concept using enums
enum StatusEnum {
    NotStarted,
    inProgress,
    Done
} // We can use enum as a value & as a data type

console.log(StatusEnum.Done); // as a value

let notStartedStatus: StatusEnum = StatusEnum.Done
// notStartedStatus = "foo" 
// notStartedStatus = 5 // you can't assign a different type or value different from its specified values
notStartedStatus = StatusEnum.inProgress

// By default enums use values like 0, 1, etc.. but normally programmers like to work with strings, b'se in strings we can put info that people can read

enum UserTypesEnum {
    Admin = "ADMIN",
    Staff = "STAFF",
    DefaultUser = "DEFAULT_USER",
}


// enum UserTypesEnum {
//     Admin = "ADMIN",
//     Staff = "STAFF",
//     DefaultUser = 4,
//     Other
// }

const userRole: UserTypesEnum = UserTypesEnum.Admin
console.log(userRole);

// Enums inside interface
interface TaskInterface {
    id: string
    status: StatusEnum
}

const task: TaskInterface = {
    id: "id",
    status: StatusEnum.Done
}

