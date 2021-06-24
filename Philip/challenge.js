const _inrange_ = function (x,lo,hi) { return x >= lo && x <= hi; }

var MACHINE_NOTES100 = 5;
var MACHINE_NOTES50 = 1;
var MACHINE_NOTES20 = 1;
var MACHINE_NOTES10 = 1;

// ATM Machine 
function ATM_Machine(cash) {
  cash = parseInt(cash); // just in case
  const wanted_cash = cash;
  
  // Check for correct input
  if (cash%10 != 0) {
    alert(`${cash} is an invalid amount!\nYour corrected amount that is withdrawn is ${cash - cash%10}`);
    cash = cash - cash%10;
  }

  let callbank_min_notes = 1;
  let callbank_min_cash = 100;
  let callbank_str_warning = '';

  // Note
  const NOTE100 = 100;
  const NOTE50 = 50;
  const NOTE20 = 20;
  const NOTE10 = 10;

  // Amounts 
  // let MACHINE_NOTES100 = 0;
  // let MACHINE_NOTES50 = 1;
  // let MACHINE_NOTES20 = 0;
  // let MACHINE_NOTES10 = 0;

  // Totals
  let MACHINE_CASH100 = NOTE100 * MACHINE_NOTES100;
  let MACHINE_CASH50 = NOTE50 * MACHINE_NOTES50;
  let MACHINE_CASH20 = NOTE20 * MACHINE_NOTES20;
  let MACHINE_CASH10 = NOTE10 * MACHINE_NOTES10;

  // Total Cash
  let MACHINE_TOTAL_CASH = MACHINE_CASH100 + MACHINE_CASH50 + MACHINE_CASH20 + MACHINE_CASH10;

  // Check if the amount of cash wanted isn't too much
  // *ToDo* Real note output
  if (cash > MACHINE_TOTAL_CASH) {
    let cash_difference = Math.abs(MACHINE_TOTAL_CASH - cash);
    return `${cash} EUR is not possible, I do not have ${cash_difference} EUR notes at this moment`;
  }

  
  // Calculate for different amounts to output
  let output_notes100, output_notes50, output_notes20, output_notes10;
  output_notes100 = output_notes50 = output_notes20 = output_notes10 = 0;
  let output_cash100, output_cash50, output_cash20, output_cash10;
  output_cash100 = output_cash50 = output_cash20 = output_cash10 = 0;
  // document.write(output_notes100, output_notes50, output_notes20, output_notes10)

  // Get correct number of notes and amount
  if (MACHINE_NOTES100 > 0) {
    output_notes100 = Math.min(parseInt(cash / NOTE100), MACHINE_NOTES100);
    output_cash100 = parseInt(output_notes100 * NOTE100);
    cash -= output_notes100 * NOTE100;

    // check for refill
    if ( _inrange_(output_cash100, 0,  MACHINE_CASH100) ) {
      MACHINE_CASH100 -= output_cash100;
      MACHINE_NOTES100 -= output_notes100;
      if (MACHINE_NOTES100 <= callbank_min_notes) callbank_str_warning += "Refill 100 notes.\n";
    }

  }
  

  if (MACHINE_NOTES50 > 0) {
    output_notes50 = Math.min(parseInt(cash / NOTE50), MACHINE_NOTES50);
    output_cash50 = parseInt(output_notes50 * NOTE50);
    cash -= output_cash50;

    // check for refill
    if ( _inrange_(output_cash50, 0,  MACHINE_CASH50) ) {
      MACHINE_CASH50 -= output_cash50;
      MACHINE_NOTES50 -= output_notes50;
      if (MACHINE_NOTES50 <= callbank_min_notes) callbank_str_warning += "Refill 50 notes.\n";
    }
  }
  

  if (MACHINE_NOTES20 > 0) {
    output_notes20 = Math.min(parseInt(cash / NOTE20), MACHINE_NOTES20);
    output_cash20 = parseInt(output_notes20 * NOTE20);
    cash -= output_cash20;

    // check for refill
    if ( _inrange_(output_cash20, 0,  MACHINE_CASH20) ) {
      MACHINE_CASH20 -= output_cash20;
      MACHINE_NOTES20 -= output_notes20;
      if (MACHINE_NOTES20 <= callbank_min_notes) callbank_str_warning += "Refill 20 notes.\n";
    }
  }
  

  if (MACHINE_NOTES10 > 0) {
    output_notes10 = Math.min(parseInt(cash / NOTE10), MACHINE_NOTES10);
    output_cash10 = parseInt(output_notes10 * NOTE10);
    cash -= output_cash10; 
    
    // check for refill
    if ( _inrange_(output_cash10, 0,  MACHINE_CASH10) ) {
      MACHINE_CASH10 -= output_cash10;
      MACHINE_NOTES10 -= output_notes10;
      if (MACHINE_NOTES10 <= callbank_min_notes) callbank_str_warning += "Refill 10 notes.\n";
    }
  }

  // calculate output cash, should be equal to wanted cash
  output_cash_sum = output_cash100 + output_cash50 + output_cash20 + output_cash10;
  if (output_cash_sum < wanted_cash) {
    let cash_difference = Math.abs(wanted_cash - output_cash_sum);
    return `${wanted_cash} EUR is not possible, I do not have ${cash_difference} EUR notes at this moment`;
  }  

  MACHINE_TOTAL_CASH -= output_cash_sum;
  if (MACHINE_TOTAL_CASH <= callbank_min_cash) console.log("Refill all notes in machine.");
  else console.log(callbank_str_warning);
  console.log("Leftover: " + MACHINE_TOTAL_CASH);

  // Build output string
  output_string = `<h3 style="margin: 0;padding:0;">Input amount of ${wanted_cash} EUR is split into:</h3><br>`;
  output_string += "<ul style=\"margin: 0;padding:0;\">";
  if (output_notes100 > 0) output_string += `<li>${output_notes100} notes of ${NOTE100} EUR</li>`;
  if (output_notes50 > 0) output_string += `<li>${output_notes50} notes of ${NOTE50} EUR</li>`;
  if (output_notes20 > 0) output_string += `<li>${output_notes20} notes of ${NOTE20} EUR</li>`;
  if (output_notes10 > 0) output_string += `<li>${output_notes10} notes of ${NOTE10} EUR</li>`;
  output_string += "</ul>";

  return output_string;
}


document.write(ATM_Machine(280));


// document.write("<ul><li>1</li><li>2</li></ul>");

