const submit = document.querySelector('button[type="submit"]');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const ccNum = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');

console.log(payment.value);

const submitpatterns = {
    ["user-name"]: /^[a-z ,.'-]+$/i,
    ["user-email"]: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ["user-title"]: /^[a-z\d]{5,12}$/i,
    ["user-cc-num"]: /^[\d]{13,16}$/i,
    ["user-zip"]: /^[\d]{5,12}$/i,
    ["user-cvv"]: /^[\d]{3}$/,
    ["other-job-role"]: /^[a-z ,.'-]+$/i
}


submit.addEventListener('click', function(e) {
    e.preventDefault();

    let error=0; 
    
    // Name input field
    if(!submitvalidate(name.value,submitpatterns['user-name'])){
        name.classList.add('error');
        const nameHint = document.getElementById('name-hint');
        nameHint.classList.remove('hint')
        error ++;
    }
    // Email input field
    if (!submitvalidate(email.value,submitpatterns['user-email'])){
        const emailHint = document.getElementById('email-hint');
        emailHint.classList.remove('hint')
        email.classList.add('error');
        error ++;
    } 
    
    // Main conference
    const mainConference = document.querySelectorAll('input')[3];
    const activityHint = document.getElementById('activities-hint');
    activityHint.classList.remove('hint')

    mainConference.addEventListener('click', function(e){
    console.log(activityHint)
        

        if(!mainConference.checked){
            mainConferenceHeadline.classList.add('not-valid');
        }else {
            mainConferenceHeadline.classList.remove('not-valid');
        }
    })
    const mainConferenceHeadline = document.querySelectorAll('legend')[2]; 

    if(!mainConference.checked){
        mainConferenceHeadline.classList.add('not-valid');
        error ++;
    }

    //CreditCard choosen  
    if(payment.value == 'credit-card'){
        // ccNum input field
        if (!submitvalidate(ccNum.value,submitpatterns['user-cc-num'])){
            const ccNumHint = document.getElementById('cc-hint');
            ccNumHint.classList.remove('hint')
            ccNum.classList.add('error');
            error ++;
        } 
        // zip input field
        if (!submitvalidate(zip.value,submitpatterns['user-zip'])){
            const zipHint = document.getElementById('zip-hint');
            zipHint.classList.remove('hint')
            zip.classList.add('error');
            error ++;
        } 
        // cvv input field
        if (!submitvalidate(cvv.value,submitpatterns['user-cvv'])){
            const cvvHint = document.getElementById('cvv-hint');
            cvvHint.classList.remove('hint')
            cvv.classList.add('error');
            error ++;
        } 
    }

    if(error == 0){
        location.reload();
    }
        
})

function submitvalidate(field, regex){
    return regex.test(field)
    
}