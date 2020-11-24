const inputs = document.querySelectorAll('input');


const patterns = {
    ["user-name"]: /^[a-z ,.'-]+$/i,
    ["user-email"]: /^\S+@\S+\.\S+$/,
    ["user-title"]: /^[a-z\d]{5,12}$/i,
    ["user-cc-num"]: /^[\d]{13,16}$/i,
    ["user-zip"]: /^[\d]{5,12}$/i,
    ["user-cvv"]: /^[\d]{3}$/,
    ["other-job-role"]: /^[a-z ,.'-]+$/i
}
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = '';
        //field.parentElement.classList.remove("red")
    } else {
        field.classList.add("red")
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

 