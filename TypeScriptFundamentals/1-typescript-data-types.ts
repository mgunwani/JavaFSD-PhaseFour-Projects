
// var userName: string = "Bhawna Gunwani";
// var userAge: number = 23;
// var isActive: boolean = true;
// console.log(userName);
// console.log(userAge);
// console.log(isActive);

/* ----------------------------------------- */

// var firstName: string = 'King';
// var lastName: string = 'Kochhar';
// console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`);

/* ------------------------------------------ */

// Working with Tuple

// var empId: number = 101;
// var empName: string = "King Kochhar";

// var employee: [number, string] = [101, "Shreya Sharma"];
// console.log(employee);

// var user: [number, string, string, boolean];
// user = [101, "John Smith", "Male", true];
// console.log(user);

/* ------------------------------------------ */

// enum Direction {
//     North = 101,
//     South,
//     East,
//     West
// }
// function getDirections(direction: any): string {
//     if (direction == "North") {
//         return "North India";
//     }
// }
// console.log(getDirections(DirectionsName.East));
// console.log(Direction.East);

/* ------------------------------------------ */

/* Working with Union */

// var empCode: (string | number);
// empCode = 101;
// console.log(empCode);
// empCode = "U101";
// console.log(empCode);
// function display(value: string | number) {
//     if (typeof (value) === "number")
//         console.log("value is number.")
//     else if (typeof (value) === "string")
//         console.log("value is string.")
// }
// display(123);
// display("123");
// // display(true); // Compile Error

/* ------------------------------------------ */

/* Working with Any */

var something: any = "Hello World";
console.log(something);
something = 23;
console.log(something);
something = true;
console.log(something);

/* ------------------------------------------ */




