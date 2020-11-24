const error = document.querySelectorAll('.error-border');
const submit = document.querySelector('button[type="submit"]');
const asterisk = document.querySelectorAll('.asterisk');

// for(let i = 0; i < asterisk.length; i++){
//     console.log(asterisk[i])
// }


submit.addEventListener('click', function(e) {
    e.preventDefault();
    
    
    // Object.keys(asterisk).forEach(function(i) {
    //     //console.log('Value '+asterisk[i]);
    //         if(asterisk[i]){
                
    //             asterisk[i].classList.add("red");
    //             //asterisk[i].classList.add("red");
    //             asterisk[i].parentElement.classList.add("red");
    //             //console.log(asterisk[i]);
    //             console.log('Hvad er dette: '+asterisk[i]);
    //         }  
        
         

       
    // });

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
