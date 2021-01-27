const person = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },
    calcBmi: function() {
    }
};
person.firstName = prompt("Enter Your First Name");
person.lastName = prompt("Enter Your Last Name");
person.job = prompt("What is Your Profession ?");
person.birthYear = prompt("Enter Your Birth Date");
person.weight = prompt("Your Weight in Kg  ? ");
person.height = prompt("Your Height in M  ? ");
let numberOfFamily = prompt("Number of Family  ? ");

for (let i = 0; i < parseInt(numberOfFamily); i++) {
    personProfile.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
}
person.ageCalc;
console.log("==========================================")

