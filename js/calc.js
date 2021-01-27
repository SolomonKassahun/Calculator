var num1;
var num2;
var result
var service;

console.log("enter which operation you want")
console.log("1. Addition");
console.log("2. subtraction");
console.log("3. multiplcation");
console.log("4. divison");
service = prompt("enter the operation you want  from the following operaion \n 1. add \n 2. sub \n 3. mul \n 4. div  ");
num1 = parseInt(prompt("enter first number"));
num2 = parseInt(prompt("enter second number"));

if (service == 1){
    function add(){
        return num1 + num2;
    }
    console.log("the sum of "  + num1 + " and " + num2 + " is " + add(num1, num2));
} else if (service == 2){
    function sub(){
        return num1 - num2;
    }
    console.log("the subtracting  "  + num2 + " from " + num1+ " gives " + sub(num1, num2));
    
} else if(service == 3){
    function mult(){
        return num1 * num2;
    }
    console.log("the multipling  "  + num1 + " by " + num2 + " gives " + mult(num1, num2));
    
} else if (service == 4){
    function div(){
        if (num2 == 0){
            console.log("divison by zero is infinity")
        } else
        return num1 / num2;
    }
    console.log("dividing "  + num1 + " by " + num2 + " gives " + div(num1, num2));
}





// this is question three
/** 

array = [addition, subtracion, multiplication, divison];
operation = prompt("enter the operation you want");
switch (operation){
    case addition:
        console.log("the sum of " + num1 + " and " + num2 + " gives " + (num1 + num2));
        break;
    case subtracion:
        console.log("subtracting" + num1 + " from " + num2 + " gives " + (num1 -num2));
        break;
    case multiplication:
        console.log("multiplaying " + num1 + " by " + num2 + " gives" + (num1 * num2));
        break
    default:
        console.log("dividing  " + num2 + " by " + num1 + " gives" + (num1 /num2))
        
}
*/