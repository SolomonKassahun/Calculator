// this is about how to calculate BMT
var BMI;
var height;
var weight;
weight =  prompt("enter your weight");
height = prompt("enter your height");
function bmi(){
    return weight / (Math.pow(height,2))
}
BMI = bmi(weight,height);
console.log("BMI is " + BMI);
if (BMI <= 18.5 ){
    console.log("you are under weight")
} else if (BMI > 18.5 && BMI <= 25){
    console.log("you are normal")
} else{
    console.log("you are in under weight")
}
