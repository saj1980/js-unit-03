const error = document.querySelectorAll('.error-border');
const submit = document.querySelector('button[type="submit"]');
const asterisk = document.querySelectorAll('.asterisk');

// for(let i = 0; i < asterisk.length; i++){
//     console.log(asterisk[i])
// }


submit.addEventListener('click', function(e) {
    e.preventDefault();


    Object.keys(error).forEach(function(i) {
        console.log('Value '+error[i].value);
            
            if(error[i].value == ''){
                error[i].classList.add("error");
                //asterisk[i].classList.add("red");
                //error[i].parentElement.classList.add("error");
                //console.log(asterisk[i]);
            }  
        
         

       
    });

    

})
