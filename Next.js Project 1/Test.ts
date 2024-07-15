type bool = boolean;

interface NameType {
    fname: string;
    lname?: string;
}

abstract class NewUser {
    public Name: NameType;
    public Age: number;
    protected IsPaid: bool;

    constructor(Name: NameType, Age: number, IsPaid: bool) {
        this.Name = Name;
        this.Age = Age;
        this.IsPaid = IsPaid;
    }
}

class User extends NewUser {
    public SignedUp: bool;

    constructor(Name: NameType, Age: number, IsPaid: bool, SignedUp: bool) {
        super(Name, Age, IsPaid);
        this.SignedUp = SignedUp;
    }

    getDetails(): string {
        return `Name: ${this.Name.fname} ${this.Name.lname ?? ''}, Age: ${this.Age}, IsPaid: ${this.IsPaid}, SignedUp: ${this.SignedUp}`;
    }
}

let user = new User({ fname: "Shardendu", lname: "Mishra" }, 21, true, true);
console.log(user.getDetails());