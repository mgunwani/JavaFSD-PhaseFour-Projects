
class Person {

    name: string;
    age: number;
    static country: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        Person.country = "Singapore";
    }

    displayDetails() {
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`Country : ${Person.country}`)
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
        console.log(`Amount : ${this.amount}`);
        console.log(`Type : ${this.type}`);
    }

}

var cust1 = new Customer("Bhawna", 18, 10000, "Gold");
cust1.displayDetails();
