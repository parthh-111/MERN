console.log("My name is Ganesh");

let name = "Omakar";
let age ="100";

console.log("My name is :",name);
console.log("My age is :",age);

let a=10;
let b=5;

console.log("Addition :",a+b);
console.log("Subtraction :",a-b);
console.log("Multiply :",a*b);
console.log("Division :",a/b);
console.log("Modulus :",a%b);

console.log("-----------------------------------------------------------------")

let num1 = 10;
let num2 = 20;

function add(x,y)
{
    return x + y;
}

let result = add(num1 + num2);
console.log("Sum =",result);

console.log("-----------------------------------------------------------------")

let x = 12;
let y = 4;

console.log("Addition :", x+y);
console.log("Greater Than :", x>y);
console.log("Equals to :",x==y);
console.log("Logical AND :",(x>5 && y<10));

console.log("-----------------------------------------------------------------")

let marks = 75;

if (marks >= 40){
    console.log("Pass");
}else{
    console.log("Fail");
}

console.log("-----------------------------------------------------------------")

let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;

        case 2:
            console.log("Tuesday");
            break;

            case 3:
                console.log("Wednesday");
                break;

                case 4:
                    console.log("Invalid Day");
                    break;
}

console.log("-----------------------------------------------------------------")

//for loop
for(let i = 1; i<= 5;i++) {
    console.log("i")
}               

console.log("-----------------------------------------------------------------")

//while loop
let count = 1;

while(count<= 5)
{
    console.log("count");
    count++;
}

console.log("-----------------------------------------------------------------")

let student = "Parth";

let score = 100;

console.log(`Student Name : ${student}`);
console.log(`Score: ${score}`);
