// BASIC EXERCISE #1 - Crystal Gazer
// function crystalGazer(job_title, location, partners_name, number_childrens) {
//   return `You will be a ${job_title} in ${location} and married to ${partners_name} with ${number_childrens}.`;
// };

// document.write(crystalGazer("Web Developer", "Vienna", "Carina", 1));


// BASIC EXERCISE #2 - Age Calculator
// function ageCalculator(birth_year, current_year) {
//   return `You are either ${current_year - birth_year} or ${current_year - birth_year - 1}`;
// };

// document.write(ageCalculator(1992,2021));


// BASIC EXERCISE #3 - Age Calculator-improved
// function ageCalculator(birth_year) {
//   let todays_date = new Date();
//   let current_year = todays_date.getFullYear();
//   return `You are either ${current_year - birth_year} or ${current_year - birth_year - 1}`;
// };

// document.write(ageCalculator(1992));


// BASIC EXERCISE #4 - Degree-Radian Conversion
// function DegreesToRadians(degrees) {
//   let radians = Math.round(degrees * (Math.PI / 180.0) * 1e5) / 1e5;
//   //let radians = (degrees * (Math.PI / 180.0)).toFixed(6);
//   //let radians = (degrees * (Math.PI / 180.0));
//   return [degrees, radians];
//   //return `<strong>${degrees}</strong> degrees are <strong>${radians}</strong> radians`;
// };

// let angles = DegreesToRadians(90);
// let degrees = angles[0];
// let radians = angles[1];
// document.write(`<strong>${degrees}</strong> degrees are <strong>${radians}</strong> radians`);


// BASIC EXERCISE #5 - Area and Volume of a box
// function CalcAreaVolume(width, height, depth) {
//   let area = width*height;
//   let volume = area * depth;
//   return `The area of the box is: <strong>${area}</strong> <br> The volume of the box is:  <strong>${volume}</strong>`;
// };

// document.write(CalcAreaVolume(7,2,5));

