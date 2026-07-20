function greet(name)
{
    return "Hello,"+name+"!";
}
console.log(greet("Parth"));
console.log(greet("Aayush"));

console.log("-----------------------------------------------------------------")

let fruits = ["Apple","Banana","Mango"];
console.log(fruits[0]);
fruits.push("Orange");
console.log(fruits);

console.log("-----------------------------------------------------------------")

const add = (a,b) => {
    return a + b;
};

console.log(add(10,20));

let numbers=[10,20,30,40,50];
let doubled=numbers.map(num=>num*2);
let greater_than_25=numbers.filter(num=>num>25);
let total=numbers.reduce((sum,num)=>sum+num,0);
console.log("Original:",numbers);
console.log("Doubled:",doubled);
console.log("Greater than 25:",greater_than_25);
console.log("sum:",total);

console.log("-----------------------------------------------------------------")

let employee = {
    id : 101, name : "Hero" , Salary : 10000 , city : "Mumbai" 
} ;

console.log(employee);

//Changes
employee.Salary = 1110000;

employee.city = "Navi Mumbai";

delete employee.name;

console.log(employee);

console.log("-----------------------------------------------------------------")

const students=[
    {name:"Alice",marks:80},
{name:"Aayu",marks:76},
{name:"Parth",marks:65},
{name:"Manu",marks:70},
{name:"Bob",marks:67},
];

const avaeragemarks=(students)=>
{
    const total=students.reduce((sum,students)=>sum+students.marks,0);
    return total/students.length;

};

const passedstudents = (students) => {
    return students.filter(students=>students.marks>=75);
};


console.log("Avg mrks :",avaeragemarks(students));
console.log("Passed Students:");


passedstudents(students).forEach(students => {
    console.log(`${students.name}-${students.marks}`);
    
});






