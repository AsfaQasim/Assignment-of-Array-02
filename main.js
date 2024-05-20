"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let product1 = {
    name: "Nike",
    price: 3999,
    color: "black",
    inventory: {
        stock: 5,
        colorOption: ["black", "white", "blue"]
    },
};
let product2 = {
    name: "Adidas",
    price: 4000,
    color: "white",
    inventory: {
        stock: 3,
        colorOption: ["black", "white", "blue"]
    },
};
let product3 = {
    name: "Bata",
    price: 5000,
    color: "blue",
    inventory: {
        stock: 8,
        colorOption: ["black", "white", "blue"]
    },
};
let products = [
    product1,
    product2,
    product3
];
let changeColor = (object, newColor) => {
    object.color = newColor;
    if (object.color === "black") {
        let ipercent10 = object.price / 100 * 10;
        object.price += ipercent10;
    }
    else if (object.color === "white") {
        let ipercent5 = object.price / 100 * 5;
    }
    else if (object.color === "blue") {
        let dpercent10 = object.price / 100 * 10;
        object.price -= dpercent10;
    }
};
products.forEach((item) => {
    console.log(item);
});
changeColor(product1, "white");
changeColor(product2, "blue");
changeColor(product3, "black");
console.log("\n");
products.forEach((item) => {
    console.log(item);
});
// Part 2: Multi-Dimensional Arrays and Tuples - Student
// Grades Challenge:
// You are tasked with creating a student grading system. Implement functions and logic to
// manage student grades effectively.
// 1. Define a TypeScript type alias named Student to represent a student with the
// following properties:
// • name (string): The name of the student.
// • grades (number[ ]): An array of grades for different subjects.
// 2. Create an array named students containing at least three student objects. Each student
// object should include a name and an array of grades.
// 3. Implement a function named calculateAverageGrade that takes a student's grades as
// input and returns the average grade for that student.
// 4. Display each student's name and average grade. Iterate through the students array,
// calculate the average grade for each student using the calculateAverageGrade
// function, and print their name and average grade.
// type Student = {
//     name: string;
//     grades: number[];
// }
// const students: Student[] =[ 
//   { name: "Asifa", grades:[89, 98, 88]},
//   {name: "Faria", grades: [45, 78, 90]},
//   {name: "Misbah", grades: [78, 78, 90]}
// ]
// let calculateAverageGrade = (studentGrade: number[]) : number => {
//         let average : number = 0;
//         studentGrade.forEach((val) => {
//       average +=  val
//         })
//         return average / studentGrade.length
// }
// for(let i = 0; i < students.length; i++){
//     let studentAverage: number = calculateAverageGrade(students[i].grades)
//     console.log(`Students name: ${students[i].name}`);
//     console.log(`Students average: ${Math.round(studentAverage)}\n`);
// }
// Part 3: Array with Types and Indexing - Employee
// Salaries Challenge:
// You are managing employee salaries for a company. Implement logic to calculate salaries and
// handle bonuses.
// 1. Define a type alias named Employee with the following properties:
// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked. •
// hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee.
// 2. Define an array named employees containing employee objects. Each employee
// object should include a name, hoursWorked, hourlyRate, and salary. 
// 3. Implement a function named calculateSalary that calculates the salary for each
// employee based on the hours worked and hourly rate.
// 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.
// type Employee = {
//     name: string;
//     houseWorked: number;
//     hourlyRate: number;
//     salary: number;
// }
// const employee : Employee[]= [
//     {name: "Asifa", houseWorked: 8, hourlyRate: 500, salary: 0},
//     {name: "Misbah", houseWorked:10, hourlyRate: 400, salary: 0 },
//     {name: "Jaweriya", houseWorked: 12, hourlyRate: 300, salary: 0}
// ]
// let calculateSalary = (employeeSalary : Employee[]) => {
//    for(let employee of  employeeSalary){
//     employee.salary = employee.houseWorked * employee.hourlyRate;
//     if(employee.houseWorked >= 20){
//         employee.salary *= 1.10
//     }
//    }
// }
// calculateSalary(employee);
// console.log(employee);
