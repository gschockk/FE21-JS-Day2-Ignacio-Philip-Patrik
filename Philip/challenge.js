// ATM Machine 
function ATM_Machine(cash) {
  cash = parseInt(cash); // just in case

  // Note
  const NOTE100 = 100;
  const NOTE50 = 50;
  const NOTE20 = 20;
  const NOTE10 = 10;
  // Amounts 
  const MACHINE_AMOUNT100 = 2;
  const MACHINE_AMOUNT50 = 1;
  const MACHINE_AMOUNT20 = 1;
  const MACHINE_AMOUNT10 = 1;
  // Totals
  const MACHINE_TOTAL100 = NOTE100 * MACHINE_AMOUNT100;
  const MACHINE_TOTAL50 = NOTE50 * MACHINE_AMOUNT50;
  const MACHINE_TOTAL20 = NOTE20 * MACHINE_AMOUNT20;
  const MACHINE_TOTAL10 = NOTE10 * MACHINE_AMOUNT10;
  // Total Cash
  let TOTAL_CASH = MACHINE_TOTAL100 + MACHINE_TOTAL50 + MACHINE_TOTAL20 + MACHINE_TOTAL10;

  // Check for correct input
  if (cash%10 != 0) {
    alert(`${cash} is an invalid amount!\nYour corrected amount that is withdrawn is ${cash - cash%10}`);
    cash = cash - cash%10;
  }

  // NO Loop solution :((((((!!!!
  // Calculate for different amounts to output
  ouput_total100 = parseInt(cash % NOTE100);
  ouput_total50 = parseInt(cash % NOTE50);
  ouput_total20 = parseInt(cash % NOTE20);
  ouput_total10 = parseInt(cash % NOTE10);

  // Check for availability
  if (ouput_total100 <= MACHINE_TOTAL100) {
    MACHINE_TOTAL100 = ouput_total100;
  }

  if (ouput_total50 <= MACHINE_TOTAL50) {
    MACHINE_TOTAL50 = ouput_total50;
  }

  if (ouput_total20 <= MACHINE_TOTAL20) {
    MACHINE_TOTAL20 = ouput_total20;
  }

  if (ouput_total10 <= MACHINE_TOTAL10) {
    MACHINE_TOTAL10 = ouput_total10;
  }

};


document.write(ATM_Machine(280));




