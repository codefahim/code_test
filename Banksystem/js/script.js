// for collect data from login btn and display none;


const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function() {
    const loginSectionHide = document.getElementById('loginSection');
    loginSectionHide.style.display = 'none';
    const transactionArea = document.getElementById('transaction');
    transactionArea.style.display = 'block';
});

const deposit = document.getElementById('deposit');
deposit.addEventListener('click', function() {

    const depositNumber = getInputNumber('depositAmount');

    showingAmount('currentBalance', depositNumber);
    showingAmount('currentDeposit', depositNumber);

    document.getElementById('depositAmount').value = " ";
});



// withdraw part start from here
const addWithdraw = document.getElementById('withdraw');
addWithdraw.addEventListener('click', function() {
    const withdrawAmount = getInputNumber('inputWithdraw');
    showingAmount('currentWithdraw', withdrawAmount);
    showingAmount('currentBalance', -1 * withdrawAmount);
    document.getElementById('inputWithdraw').value = " ";



})


function showingAmount(id, depositNumber) {
    if (depositNumber >= -9999999999999999999) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const BalanceNow = currentNumber + depositNumber;
        document.getElementById(id).innerText = BalanceNow;
    }

}

function getInputNumber(id) {
    const inputNumber = document.getElementById(id).value;
    const inputAmount = parseFloat(inputNumber);
    return inputAmount;
}