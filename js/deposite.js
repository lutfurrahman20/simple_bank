// step-1: add event listener to the deposit button
document.getElementById("btn-deposite").addEventListener("click", function () {
  // step-2: get the deposit amount from the deposit input field
  // For input field use .value to the value inside the input field
  const depositeField = document.getElementById("deposite-field");
  const newdepositeAmountString = depositeField.value;
  const newDepositeAmount = parseFloat(newdepositeAmountString);

  // step-3: get the current deposit total
  // for non-input(element other than input , textarea) use innerText to get the text

  const depositeTotalElement = document.getElementById("deposite-total");
  const previousDepositeTotalString = depositeTotalElement.innerText;
  const previousDepositeTotal = parseFloat(previousDepositeTotalString);

  // step-4: add numbers to set the total deposite
  const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;

  depositeTotalElement.innerText = currentDepositeTotal;
  // step-5: get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
  // set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  // step-7: clear the deposite field
  depositeField.value = "";
});
