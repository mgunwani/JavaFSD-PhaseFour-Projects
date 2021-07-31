
class Employee {
    private empCode: number;
    private empName: string;

    constructor() {
        this.empCode = 1001;
        this.empName = "King Kochhar";
    }

    public displayDetails() {
        console.log(`Employee Code: ${this.empCode}`);
        console.log(`Employee Name : ${this.empName}`)
    }

}

var emp1 = new Employee();
// console.log(emp1.empCode);  // Compile Error
// console.log(emp1.empName);  // Compile Error
emp1.displayDetails();
