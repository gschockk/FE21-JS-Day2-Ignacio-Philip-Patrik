// Intermediate - Capitalize
// const capitalize = function (s) {
//   return s.charAt(0).toUpperCase() + s.substr(1, s.length-1);
// };

// document.write(capitalize('i am a web developer.'));


// Intermediate - Average Grade
function CalcGrades(math, physics, english) {
  let sum = Number(math) + Number(physics) + Number(english);
  let avg = sum / 3;
  return [sum, avg];
};

var grades = CalcGrades(3,"4",5);
var sum = grades[0];
var avg = grades[1]; 

document.write(`Sum: <strong>${sum}</strong> <br> Average: <strong>${avg}</strong>`);







