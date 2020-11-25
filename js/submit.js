const error = document.querySelectorAll('.error-border');
const submit = document.querySelector('button[type="submit"]');




submit.addEventListener('click', function(e) {
    e.preventDefault();
    let errorsTotal = 0;
    Object.keys(error).forEach(function(i) {
            if(error[i].value == ''){
                error[i].classList.add("error");
                //console.log(error[i].getAttribute('id'));
                const valueId = error[i].getAttribute('id'); 
            
                document.querySelectorAll(`label[for=${valueId}]`)[0].classList.add("not-valid");
                //asterisk[i].classList.add("red");
                //error[i].parentElement.classList.add("error");
                //console.log(asterisk[i]);
                errorsTotal ++;
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


