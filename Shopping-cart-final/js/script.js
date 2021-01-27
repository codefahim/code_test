const minus = document.getElementById('minus');
minus.addEventListener('click', function() {
    let inputNumber = getInputNumber('text');
    if (inputNumber >= 1) {
        inputNumber -= 1;
        document.getElementById('text').value = inputNumber;
        let inputPrice = inputNumber * 1219;
        document.getElementById('iphone').innerHTML = inputPrice;




    }
    totalCost();
})

const plus = document.getElementById('plus');
plus.addEventListener('click', function() {
    let inputNumber = getInputNumber('text');
    inputNumber += 1;
    document.getElementById('text').value = inputNumber;

    let inputPrice = getInputText('iphone');
    inputPrice = inputNumber * 1219;
    document.getElementById('iphone').innerHTML = inputPrice;



    totalCost();

})



const minusOne = document.getElementById('minusOne');
minusOne.addEventListener('click', function() {
    let inputNumber = getInputNumber('textOne');
    if (inputNumber >= 1) {
        inputNumber -= 1;
        document.getElementById('textOne').value = inputNumber;


        let inputPrice = getInputText('iphoneOne');
        inputPrice = inputNumber * 59;
        document.getElementById('iphoneOne').innerHTML = inputPrice;


    }

    totalCost()
})


const plusOne = document.getElementById('plusOne');
plusOne.addEventListener('click', function() {
    let inputNumber = getInputNumber('textOne');
    inputNumber += 1;
    document.getElementById('textOne').value = inputNumber;

    let inputPrice = getInputText('iphoneOne');
    inputPrice = inputNumber * 59;
    document.getElementById('iphoneOne').innerHTML = inputPrice;


    totalCost()
})

function totalCost() {
    let phonePrice = getInputText('iphone');
    document.getElementById('iphone').innerHTML = phonePrice;

    let coverPrice = getInputText('iphoneOne');
    document.getElementById('iphoneOne').innerHTML = coverPrice;


    let subTotalPrice = phonePrice + coverPrice;

    document.getElementById('subTotal').innerHTML = subTotalPrice;
    let taxAmount = taxCalculation(subTotalPrice);
    document.getElementById('tax').innerHTML = taxAmount;


    let totalCost = getInputText('total');
    totalCost = subTotalPrice + taxAmount;
    document.getElementById('total').innerHTML = totalCost;

}

function taxCalculation(price) {
    let taxValue = 0;
    if (price > 1500) {
        taxValue = Math.ceil(price * .05);
    }
    return taxValue;
}


function getInputNumber(id) {
    const text = document.getElementById(id).value;
    let inputNumber = parseFloat(text);
    return inputNumber;
}

function getInputText(id) {
    const text = document.getElementById(id).innerText;
    let inputNumber = parseFloat(text);
    return inputNumber;
}