const error = document.querySelectorAll('.error-border');
const submit = document.querySelector('button[type="submit"]');
const asterisk = document.querySelectorAll('.asterisk');

submit.addEventListener('click', function(e) {
    e.preventDefault();
    Object.keys(error).forEach(function(i) {
            if(error[i].value == ''){
                error[i].classList.add("error");
                //asterisk[i].classList.add("red");
                //error[i].parentElement.classList.add("error");
                //console.log(asterisk[i]);
            }  
    });
})
