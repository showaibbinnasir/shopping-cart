document.getElementById('plus').addEventListener('click', function(){
    const quantities = document.getElementById('quantities');
    const quantitiesString = quantities.innerText;
    let quantitiesValue = parseFloat(quantitiesString);
    quantitiesValue = quantitiesValue +1;
    quantities.innerText = quantitiesValue;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = 494 * quantitiesValue;

    const totalDiscount = document.getElementById('discount-price');
    const totalPriceString = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceString);
    const discount = totalPriceAmount * 0.3;
    totalDiscount.innerHTML = totalPriceAmount - discount;
})

document.getElementById('minus').addEventListener('click', function(){
    const quantities = document.getElementById('quantities');
    const quantitiesString = quantities.innerText;
    let quantitiesValue = parseFloat(quantitiesString);
    quantitiesValue = quantitiesValue -1;
    if(quantitiesValue < 0 ){
        alert('cannot negative value');
        return;
    }
    quantities.innerText = quantitiesValue;
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceString);

    totalPrice.innerText = totalPriceAmount-494;
    const totalDiscount = document.getElementById('discount-price');
    const totalDiscountString = totalDiscount.innerText;
    const totalDiscountPrice = parseFloat(totalDiscountString);
    totalDiscount.innerText = totalDiscountPrice - 345.8;
    
})
