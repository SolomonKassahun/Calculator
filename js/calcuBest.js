
text += text;
var num1;
var num2;
var result
var service;

console.log("enter which operation you want")
console.log("1. Addition");
console.log("2. subtraction");
console.log("3. multiplcation");
console.log("4. divison");
console.log("5. Min");
console.log("6. Max");
console.log("7. Average");
//console.log("4. divison");
service = prompt("enter the operation you want  from the following operaion \n 1. add \n 2. sub \n 3. mul \n 4. div  \n 5. Min \n 6. Max \n 7. Average ");

var i = 0
var text = [];
var total = 0;
var element;

if (service == 1){
    numberOfElement = prompt("How many number do you want to add");
    while (i < numberOfElement ){
        text += prompt("please enter " + (i + 1)  + " number ");
        i++;
     }  
     
    console.log("you are selected Addition Operation" );
    function add(){
       for(element in text){
        total += Number(text[element].toString());
       }
       return total;
    }
    console.log("the sum of number is => " + add(text));
    
} else if(service == 3){
    
    numberOfElement = prompt("How many number do you want to mult");
    while (i < numberOfElement ){
        text *= prompt("please enter " + (i + 1)  + " number ");
        i++;
     }  
     
    console.log("you are selected Multiplcation Operation" );
    function mult(){
        total = 1;
       for(element in text){
        total *= Number(element);
       }
       return total;
    }
    console.log("the multiplcation  of numbers is => " + mult(text));
    
    
}
else{
   
      if (service == 2){
        num1 = parseInt(prompt("enter first number"));
        num2 = parseInt(prompt("enter second number"));
        function sub(){
            return num1 - num2;
        }
        console.log("the subtracting  "  + num2 + " from " + num1+ " gives " + sub(num1, num2));
        console.log("subtracting the two number gives => "  + sub(text));
        
    }  else if (service == 4){
        num1 = parseInt(prompt("enter first number"));
        num2 = parseInt(prompt("enter second number"));
        function div(){
            if (num2 == 0){
                console.log("divison by zero is infinity")
            } else
            return num1 / num2;
        }
        console.log("dividing "  + num1 + " by " + num2 + " gives " + div(num1, num2));
        
    } else if (service == 5){
        numberOfElement = prompt("How many number do you want to compare");
    while (i < numberOfElement ){
        text += prompt("please enter " + (i + 1)  + " number ");
        i++;
     }  
     
    console.log("you are interested to find smallest number" );
    function Min(small){
        var small = text[0];
        for (var i = 0; i < text.length; i++) {
            if(text[i]< small)
            {
                small = text[i];
            }
        
        }
        return small;
     
    }
    console.log("the smallest number among the number is " + Min());
       
    }else if (service == 6){
        numberOfElement = prompt("How many number do you want to compare");
    while (i < numberOfElement ){
        text += prompt("please enter " + (i + 1)  + " number ");
        i++;
     }  
     
    console.log("you are interested to find largest number" );
    function Man(small){
        var small = text[0];
        for (var i = 0; i < text.length; i++) {
            if(text[i] > small)
            {
                small = text[i];
            }
        
        }
        return small;
     
    }
    console.log("the Largest number among the number is " + Man());
        } else if (service == 7){
            function Average(){
               
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
}
    