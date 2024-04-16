interface UserInterface {
    getFullName(): string
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

