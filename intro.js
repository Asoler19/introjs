// Exercise 1
var op1 = 22 + 2;
var op2 = 26 - 2;
var op3 = 12 * 2;
var op4 = 48 / 2;

console.log(op1);
console.log(op2);
console.log(op3);
console.log(op4);

//  Exercise 2
for(var i=0; i<10; i++){
    if(i%4 == 0){
    }
}

var ope1 = 6%3;
var ope2 = 10%2;
var ope3 = 5%3;

console.log(ope1 !== ope2);
console.log(ope1 == ope2);

// Exercise 3
var line1 = "Test Grades as follows:";
var line2 = "\n \t Student 1:96";
var line3 = "\n \t Comment: \"None\"";
console.log(line1 + line2 + line3);

// Exercise 5
var student ={
    name: "Alex",
    dob: '11/12/91',
    location:"Miami",
    age: 25,
    hispanic: true
}
console.log(student['name'] + "\n" + student.dob);

// Exercise 6
var num = 2;
while(num < 10){
    console.log(num);
    num+=2;
}
//  Exercise 7
for(num = 1; num<10; num+=2){
    console.log(num);
}