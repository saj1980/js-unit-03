const paypal = document.getElementById('paypal');
const creditCard = document.getElementById('credit-card');
const bitcoin = document.getElementById('bitcoin');
const payment = document.getElementById('payment');

payment.addEventListener('change', (event) => {
    console.log(event.target.value)
    if(event.target.value == 'paypal'){
        paypal.removeAttribute('hidden');
        creditCard.setAttribute('hidden', 'hidden');
        bitcoin.setAttribute('hidden', 'hidden');
        
    } else if (event.target.value == 'bitcoin'){
        bitcoin.removeAttribute('hidden');
        creditCard.setAttribute('hidden', 'hidden');
        paypal.setAttribute('hidden', 'hidden');
    } else if (event.target.value == 'credit-card'){
        creditCard.removeAttribute('hidden');
        bitcoin.setAttribute('hidden', 'hidden');
        paypal.setAttribute('hidden', 'hidden');
    }
 });


