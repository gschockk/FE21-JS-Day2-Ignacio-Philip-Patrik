
// const CrytalGlazer = (job_title, location, partners_name, number_Childrens) => {
//   return "You will be a " + job_title + " in " + location + " and married to " + partners_name + " with " + number_Childrens + " children";
// }

// console.log(CrytalGlazer("developer", "dubai", "Britney", 4));
// document.write("\n\n\n");



// const Age_Calculator = (birth_year, current_year) => {
//   aprox_age = current_year - birth_year;
//   or_age = aprox_age - 1;
//   return "You are either " + aprox_age + " or " + or_age + " years old";
// }

// console.log(Age_Calculator(1983, 2021));

// document.write("\n\n\n");



// const Age_Calculator_improved = (birth_year) => {
//   current_year_calc = new Date();
//   current_year = current_year_calc.getFullYear();
//   aprox_age = current_year - birth_year;
//   or_age = aprox_age - 1;
//   return "You are either " + aprox_age + " or " + or_age + " years old according to the improved calculator";
// }

// console.log(Age_Calculator_improved(1983));

// document.write("\n\n\n");


// const Degree_to_Radian = (degrees) => {
//   conversion = degrees * (Math.PI / 180);
//   return degrees + " degrees" + " in radians are: " + conversion;
// }

// console.log(Degree_to_Radian(360));

// document.write("\n\n\n");







// const area_and_volume = (width, height, depth) => {
//   var area = "The area is: " + width * height;
//   var volume = "The volume is: " + width * height * depth;
//   return [area, volume];
// }

// console.log(area_and_volume(3, 2, 10)[0]);
// console.log(area_and_volume(3, 2, 10)[1]);

// document.write("\n\n\n");



// (function (abc) {
//   console.log(abc.charAt(0).toUpperCase() + abc.slice(1));
// })("i am a web developer");

// console.log("Write an anonymous JavaScript function to capitalize only the first letter of a string. The function accepts only one string argument.\n");
// console.log("It will change the text from: i am a web developer to the same but with a capitalized I\n");
// console.log(Capitalize("i am a web developer"));

// document.write("\n\n\n");



//Average grade

// const average_grade = (math, physics, english) => {
//   var sum = 3 + 4 + 5;
//   var average = sum / 3;
//   return [sum, average];
// }
// console.log("The sum of the grades is:");
// console.log(average_grade(3, 4, 5)[0]);
// document.write("\n");
// console.log("The average grade is:");
// console.log(average_grade(3, 4, 5)[1]);
// document.write("\n");

// document.write("\n\n\n");


// const time_convert = (minutes) => {
//   var min_to_hours = minutes / 60; //redondear a integer
//   var hours = Math.floor(min_to_hours);
//   var minuten = minutes % 60;
//   var hours_final = hours;
//   var minutes_final = minuten;
//   return minutes + " minutes = " + hours_final + " hours(s) and " + minutes_final + " minute(s).";

// }

// console.log("This function receives the time in minutes and delivers it in HOURS and MINUTES:");
// console.log(time_convert(108));


// Bankomat

var x;
//
var amount_100;
var amount_50;
var amount_20;
var amount_10;

var stored_100 = 20;
var stored_50 = 15;
var stored_20 = 10;
var stored_10 = 7;

var money_stored = (stored_100 * 100) + (stored_50 * 50) + (stored_20 * 20) + (stored_10 * 10);


const banknote_100 = 100;
const banknote_50 = 50;
const banknote_20 = 20;
const banknote_10 = 10;

var total_stored_100 = banknote_100 * stored_100;
var total_stored_50 = banknote_50 * stored_50;
var total_stored_20 = banknote_20 * stored_20;
var total_stored_10 = banknote_10 * stored_10;



check_money100 = (x) => {
  if (x >= total_stored_100) {
    amount_100 = x / total_stored_100;
    x = x - total_stored_100;
    x = Math.floor(min_to_hours)
  }

}
  }

check_money50 = (x) => {
  if {
    check_money50 = (x) => {
      if {

      }
    }
  
check_money20 = (x) => {
      if {

      }
      }

check_money10 = (x) => {
      if {

      }
        }


get_bargeld = (x) => {

      if (x >= money_stored) {
        console.log("Please wait, you will receive your money shortly... \n");
        console.log(check_money(x));
      }
      else {
        not_enough_money = "There is not enough money for your request, please try another option";
      }





      return;
    }
console.log("Please enter the amount of money you want: ");
    console.log(get_bargeld(9));

    document.write("\n\n\n");
