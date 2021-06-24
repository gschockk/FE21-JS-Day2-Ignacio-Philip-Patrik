// ATM Machine 
function ATM_Machine(cash) {
  // Notes
  const note100 = 100;
  const note50 = 50;
  const note20 = 20;
  const note10 = 10;
  // Amounts 
  const amount100 = 2;
  const amount50 = 1;
  const amount20 = 1;
  const amount10 = 1;
  // Totals
  const total100 = note100 * amount100;
  const total50 = note50 * amount50;
  const total20 = note20 * amount20;
  const total10 = note10 * amount10;

  // Check for correct input
  if (cash%10 != 0) {
    alert(`${cash} is an invalid amount!\nYour corrected amount that is withdrawn is ${cash - cash%10}`);
    cash = cash - cash%10;
  }
};


document.write(ATM_Machine(280));




