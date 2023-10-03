const withdraw = () => {

    // get input value
    const withdrawInput = document.getElementById("input-withdraw");
    const withdrawInputString = withdrawInput.value;
    const newWithdrawValue = parseFloat(withdrawInputString);

    withdrawInput.value = '';

    if (isNaN(newWithdrawValue)) {
        alert("try to use Number")
        return;
    }

    // get inner text form 
    const withdrawMoney = document.getElementById("withdraw-box");
    const withdrawMoneyString = withdrawMoney.innerText;
    const previousWithdrawMoney = parseFloat(withdrawMoneyString);


    // withdraw box calculet
    const withdrawTotal = previousWithdrawMoney + newWithdrawValue;
    withdrawMoney.innerText = withdrawTotal;

    // grand total form id
    const grandTotal = document.getElementById("total-balance");
    const grandTotalString = grandTotal.innerText;
    const previouseGrandTotal = parseFloat(grandTotalString);

    if (newWithdrawValue > previouseGrandTotal) {
        alert("not enough money")
        return;
    }
    
    //
    const newGrandTotal = previouseGrandTotal - newWithdrawValue;
    grandTotal.innerText = newGrandTotal;

}