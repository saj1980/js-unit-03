const inputs = document.querySelectorAll('input');
const headline = document.querySelectorAll('#activities')[0];



const patterns = {
    ["user-name"]: /^[a-z ,.'-]+$/i,
    ["user-email"]: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ["user-title"]: /^[a-z\d]{5,12}$/i,
    ["user-cc-num"]: /^[\d]{13,16}$/i,
    ["user-zip"]: /^[\d]{5}$/i,
    ["user-cvv"]: /^[\d]{3}$/,
    ["other-job-role"]: /^[a-z ,.'-]+$/i
}
function validate(field, regex){
//test
    if(regex.test(field.value)){
        field.className = '';
        field.parentElement.classList.remove("not-valid")
    } else {
        field.parentElement.classList.add("not-valid")
        //field.parentElement.classList.add("red")
    }
}
 

 inputs.forEach(function(input, key){
     input.addEventListener('keyup', function(e){
            if(e.target.name != "other-job-role"){
                validate(e.target, patterns[e.target.attributes.name.value])
            }
     })
 });

 headline.addEventListener('change', function(){
     headline.classList.remove('not-valid')
 })



 