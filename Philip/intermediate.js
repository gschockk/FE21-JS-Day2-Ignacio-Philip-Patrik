// Intermediate - Capitalize
// const capitalize = function (s) {
//   return s.charAt(0).toUpperCase() + s.substr(1, s.length-1);
// };

// document.write(capitalize('i am a web developer.'));


// Intermediate - Average Grade
function CalcGrades(math, physics, english) {
  sum = Number(math) + Number(physics) + Number(english);
  avg = sum / 3;
  return `Sum: <strong>${sum}</strong> <br> Average: <strong>${avg}</strong>`;
};

document.write(CalcGrades(3,"4",5));






