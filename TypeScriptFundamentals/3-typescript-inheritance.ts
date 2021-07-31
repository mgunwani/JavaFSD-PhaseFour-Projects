
/*

class Person {

    name: string;
    age: number;

    constructor() {
        this.name = "Roger Lee";
        this.age = 23;
    }

    displayDetails() {
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
    }

}

class Customer extends Person {

    amount: number;
    type: string;

    constructor() {
        super();
        this.amount = 20000;
        this.type = "Silver";
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Amount : ${this.amount}`);
        console.log(`Type : ${this.type}`);
    }

}

var cust1 = new Customer();
cust1.displayDetails();

*/

// --------------------------------------------------------- //

/*

class Person {

    name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
    }

}

class Customer extends Person {

    amount: number;
    type: string;

    constructor(name: string, age: number, amount: number, type: string) {
        super(name, age);
        this.amount = amount;
        this.type = type;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Age in Child Class : ${this.age}`);
        console.log(`Amount : ${this.amount}`);
        console.log(`Type : ${this.type}`);
    }

}

var cust1 = new Customer("Bhawna", 18, 10000, "Gold");
cust1.displayDetails();

*/