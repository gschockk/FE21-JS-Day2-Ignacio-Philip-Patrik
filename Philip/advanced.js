// Advanced - Time Convert
function TimeConvert(time_in_minutes) {
  // time_in_minutes = pare(time_in_minutes);
  // if (time_in_minutes < 0) {
  //   alert("Minutes can't be negative!");
  //   time_in_minutes = 0; // time_in_minutes * (-1);
  // }
  let hours = parseInt(time_in_minutes / 60);
  let minutes = time_in_minutes - (hours*60);
  //return `${time_in_minutes} minutes =  <strong>${hours} </strong>hour(s) and <strong>${minutes} </strong>minute(s)`;
  return [hours, minutes]
};

var amount = 200;
var hours = TimeConvert(amount)[0];
var minutes = TimeConvert(amount)[1];
document.write(`${amount} minutes =  <strong>${hours} </strong>hour(s) and <strong>${minutes} </strong>minute(s)`);





