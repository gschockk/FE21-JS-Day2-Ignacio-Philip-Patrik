// Basic E 1

// function crystalGazer(job_title, location, partners_name, number_childrens) {
//     return `You will be a ${job_title} in ${location} and married to ${partners_name} with ${number_childrens} Childrens`
// }

// console.log(crystalGazer("Lieferant", "Vienna", "Sofi", 0))

//Basic E 2

// function ageCalculator(birth_year, current_year) {
//     var age = current_year - birth_year;
//     return `You are ${age} years old`;
// }

// console.log(ageCalculator(1996, 2021));



// Basic E 3


// var current_year = 2021;

// function ageCalculator(birth_year) {
//     var age = current_year - birth_year;
//     return `You are ${age} years old`;
// }

// console.log(ageCalculator(1994));


// Basic E 4

// function degreeRadian(degrees) {
//     var result = degrees * (Math.PI/180);
//     return `${result} Radians`;
// }

// console.log(degreeRadian(90));


// Basic E 5

// function areVoulumeBox(width, height, depth) {
//     var area = width * height;
//     var volume = width * height * depth;
//     let result = [area, volume];
//     return result;
// };

// console.log(areVoulumeBox(2,7)[0] + " Area ");
// console.log(areVoulumeBox(5,7,2)[1] + " Volume");


// Intermediate Capitalize


// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
  
//   console.log(capitalizeFirstLetter('i am web developer')); 




// Intermediate Avarage Grade

// function avgGrade(Mg, Pg, Eg ) {

//     var sum = Mg + Pg + Eg;
//     var avg = (Mg + Pg + Eg)/3;
//     let result = [sum, avg];
//     return result;
// }

// console.log(avgGrade(3,4,5)[0]);
// console.log(avgGrade(3,4,5)[1]);

// Time conventer

// function timeConvert (minutes) {
// var hour = minutes / 60 ;
// var hourRest = hour - Math.floor(hour) ;
// var hourFinal = hour - hourRest;

// var minutes = hourRest * 60;
// return `${hourFinal} Hours and ${Math.floor(minutes)} minutes`;

// };

// document.write(timeConvert(200));
// Challenge

function ATM (cash) {
    var hundred = cash / 100;
    var result_hundred = Math.floor(hundred);
    var restHundred = cash - (result_hundred *100)

    var fifty = restHundred / 50;
    var result_fifty = Math.floor(fifty);
    var restFifty = restHundred - (result_fifty *50)
    

    var twenty = restFifty / 20;
    var result_twenty = Math.floor(twenty);
    var restTwenty = restFifty -  (result_twenty * 20 );
   
    var ten = restTwenty / 10;
    var result_ten = Math.floor(ten);
    var restTen = restTwenty -  (result_ten * 10);
   

    return `${result_hundred} notes of 100 EUR, ${result_fifty} note(s) of 50 EUR, ${result_twenty} note(s) of 20 EUR and ${result_ten} note(s) of 10 EUR`
}

document.write(ATM(280));





