const deposit =()=>{
    //  get input value form inputfild
    const depositInput = document.getElementById("deposit-fild");
    const newDepositValueString = depositInput.value;
    const newDepositValue = parseFloat(newDepositValueString);

    //  get deposit value from deposit box
    const depositBox = document.getElementById("deposit-box");
    const previusDepositMoneyString = depositBox.innerText;
    const previusDepositMoney = parseFloat(previusDepositMoneyString);
    depositBox.innerText = newDepositValue;

    //  calculet new given money and previouse deposite money
    currentDepositMoney = previusDepositMoney + newDepositValue;
    depositBox.innerText = currentDepositMoney;

    //  get balance 
    const prevusetotalBanlance = document.getElementById("total-balance");
    const totalBalanceString = prevusetotalBanlance.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    // calculet final balance
    const sumOfTotalBalance = totalBalance + newDepositValue;
    prevusetotalBanlance.innerText = sumOfTotalBalance;

    depositInput.value = "";
}