const error = document.querySelectorAll('.error-border');
const submit = document.querySelector('button[type="submit"]');



console.log(payment.value)

submit.addEventListener('click', function(e) {
    e.preventDefault();
    let errorsTotal = 0;
    Object.keys(error).forEach(function(i) {
        console.log(error[i].getAttribute('name'))
        const submitregex = /^[a-z ,.'-]+$/i;
        
            if(error[i].value == '' && payment.value == 'credit-card'){
                error[i].classList.add("error");
                const valueId = error[i].getAttribute('id'); 
                document.querySelectorAll(`label[for=${valueId}]`)[0].classList.add("not-valid");
                errorsTotal ++;
                //console.log('value:'+error[i])
            } else if (!submitregex.test(error[i].value)){
                console.log('else if statement: ' + submitregex.test(error[i].value));
                error[i].classList.add("error");
            }
    });
    if(totalCost == 0){
        const activityHeadline = document.getElementsByTagName('legend')[2];
        console.log(totalCost); 
        //activityHeadline.classList.add('red'); 
        console.log(activityHeadline.parentElement.classList.add('not-valid'));
        errorsTotal ++;
    }

    //totalCost calculation is in calculator.js file
    if(errorsTotal == 0 && totalCost != 0 ){
        location.reload();
    }

    console.log(errorsTotal)
}); 


const submitpatterns = {
    ["user-name"]: /^[a-z ,.'-]+$/i,
    ["user-email"]: /^\S+@\S+\.\S+$/,
    ["user-title"]: /^[a-z\d]{5,12}$/i,
    ["user-cc-num"]: /^[\d]{13,16}$/i,
    ["user-zip"]: /^[\d]{5,12}$/i,
    ["user-cvv"]: /^[\d]{3}$/,
    ["other-job-role"]: /^[a-z ,.'-]+$/i
}
function submitvalidate(field, regex){
    return regex.test(field.value)
    
}


