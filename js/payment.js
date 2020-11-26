const paypal = document.getElementById('paypal');
const creditCard = document.getElementById('credit-card');
const bitcoin = document.getElementById('bitcoin');
const payment = document.getElementById('payment');

//console.log(creditCard.children[1].querySelectorAll('input')[0].classList.remove('error-border'));

payment.addEventListener('change', (event) => {
    //console.log(event.target.value)
    if(event.target.value == 'paypal'){
        paypal.removeAttribute('hidden');
        creditCard.setAttribute('hidden', 'hidden');
        bitcoin.setAttribute('hidden', 'hidden');
        creditCard.children[1].querySelectorAll('input')[0].classList.remove('error-border');
        creditCard.children[1].querySelectorAll('input')[0].classList.remove('error');
        creditCard.children[1].querySelectorAll('input')[1].classList.remove('error-border');
        creditCard.children[1].querySelectorAll('input')[1].classList.remove('error');
        creditCard.children[1].querySelectorAll('input')[2].classList.remove('error-border');
        creditCard.children[1].querySelectorAll('input')[2].classList.remove('error');
        
    } else if (event.target.value == 'bitcoin'){
        bitcoin.removeAttribute('hidden');
        creditCard.setAttribute('hidden', 'hidden');
        paypal.setAttribute('hidden', 'hidden');
        creditCard.children[1].querySelectorAll('input')[0].classList.remove('error-border');
        creditCard.children[1].querySelectorAll('input')[0].classList.remove('error');
        creditCard.children[1].querySelectorAll('input')[1].classList.remove('error-border');
        creditCard.children[1].querySelectorAll('input')[1].classList.remove('error');
        creditCard.children[1].querySelectorAll('input')[2].classList.remove('error-border');
        creditCard.children[1].querySelectorAll('input')[2].classList.remove('error');
    } else if (event.target.value == 'credit-card'){
        creditCard.removeAttribute('hidden');
        bitcoin.setAttribute('hidden', 'hidden');
        paypal.setAttribute('hidden', 'hidden');
        creditCard.children[1].querySelectorAll('input')[0].classList.add('error-border');
        creditCard.children[1].querySelectorAll('input')[1].classList.add('error-border');
        creditCard.children[1].querySelectorAll('input')[2].classList.add('error-border');
    }
 });


