let total = document.getElementById('activities-cost');
const activityCost = document.querySelectorAll('input[data-cost]'); 
let totalCost = 0;


//console.log(activityCost[0].checked);


activityCost.forEach(function(input, key){
    //console.log(input.getAttribute('data-cost')); 
    input.addEventListener('change', function(e){
        //console.log('Value checked: '+e.target); 
        if(e.target.checked){
            totalCost += parseInt(input.getAttribute('data-cost'));
            
            console.log(document.getElementById('activities').classList.add = '');
            total.textContent = 'Total: $'+totalCost
        } else {
            totalCost -= parseInt(input.getAttribute('data-cost'));
            console.log(totalCost);
            total.textContent = 'Total: $'+totalCost
        }
    })
});