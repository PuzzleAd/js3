// 1) დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი 
// ეს რიცხვი!!

//asnwer: 

let input1 = Number(prompt("Enter Number:"));

if(input1 > 0){
    console.log("This number is positive");
}else if(input1 < 0){
    console.log("This numbe is negative");
}else{
    console.log("This number is zero");
}




//2)დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, *, /)
// switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს 

//asnwer: 

let int1 = Number(prompt("Enter first number:"));
let int2 = Number(prompt("Enter second number:"));
let calculator = String(prompt("what should be done"));

switch (calculator) {
    case "multiply":
        console.log(int1 * int2);
        break;
    case "add":
        console.log(int1 + int2);
        break;
    case "subtract":
        console.log(int1 - int2);
        break;
    case "divide":
        console.log(int1 / int2);
        break;
    default:
        console.log("error!");
        break;
}

//3) დაწერეთ იგივე კალკულატორი if else დახმარებით!!

//asnwer: 

let int1 = Number(prompt("Enter first number:"));
let int2 = Number(prompt("Enter second number:"));
let calculator = String(prompt("what should be done"))

if (calculator === "multiply") {
    console.log(int1 * int2);
} else if(calculator === "add"){
    console.log(int1 + int2);
} else if(calculator === "subtract"){
    console.log(int1 - int2);
} else if(calculator === "divide"){
    console.log(int1 / int2);
}else{
    console.log("error!")
}


//4) დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// firstName,lastName,email,password არის სავალდებულო ველები
// ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input 
// არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// დალოგეთ "input is required" გამოიყენეთ if else

//asnwer: 

let firstName = String(prompt("Enter your first name:"));
let lastName = String(prompt("Enter your last name:"));
let email = String(prompt("Enter your Email:"));
let password = String(prompt("Enter Password:"));
let phoneNumber = Number(prompt("Enter your phone number:"));


if (firstName === "" || lastName === "" || email === "" || password === null) {
    console.log("input is required");
} else {
    console.log("registration is successful");
}
