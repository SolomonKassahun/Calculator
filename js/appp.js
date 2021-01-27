var firstName;
var lastNmae;
var profession;
var birthYear;


let temAge;
var isIllegable;
let fimilyMember = new Array();
let numberOfFmaily;
 if (temAge >= 18){
     isIllegable = true;
 } else{
     isIllegable  = false;
 }
 temAge = calAge (birthYear);

 // recieve family number
 for (let i = 0; i < parseInt(numberOfFmaily); i++) {
    fimilyMember[i] = prompt("Your Family  Members " + (i + 1));
}

 fimilyMember.forEach(function(member) {
    console.log("Family Member  " + (index + 1) + " : " + member);
 });
 

firstName =  prompt("enter first name");
lastNmae = prompt("enter last name");
birthYear  = prompt("enter your age");
fimilyMember = prompt("how many number of family: ")
var ffiamily = prompt("enter first family");
var sfamily= prompt("ente second family");
// output our value
console.log("here is your profile");
console.log("Full Name " + firstName + "" + lastNmae);
console.log("first family" + ffiamily);
console.log("job:" + fimilyMember);
console.log("Age :" + Date() + " years old")
console.log("Is illegable to vote " + isIllegable);


function calAge(biy){
    return new Date().getFullYear - biy;
}
let calcBMI = function(){

}