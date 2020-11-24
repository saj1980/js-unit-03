/*************************
 Focus on first input field
**************************/


//Set name field
const nameInput = document.getElementById('name');
//On load
nameInput.focus();

/*************************
 END Focus on first input field
**************************/

/*************************
 Job Role
**************************/

//Set OtherJobRoleField
const otherJobRoleField = document.getElementById('other-job-role');

//Hide OtherJobRoleField
otherJobRoleField.style.display = 'none'; 

// Set jobRoleField
const jobRoleField = document.getElementById('title');

jobRoleField.addEventListener('change', (event) => {
     //If JobRoleField equal with "other"
     if(event.target.value == 'other'){
        //Show OtherJobRoleField
        otherJobRoleField.style.display = ''; 
    
    } else {
        otherJobRoleField.style.display = 'none'; 
    }
  });

  // set designThemeField
  const designThemeField = document.getElementById('design');
  
  // set colorField
  const colorField = document.getElementById('color');

  // If designThemeField is changed
  designThemeField.addEventListener('change', (e) => {
      // activate colorField
    colorField.removeAttribute('disabled');
    // set value of designThemeField
    const designValue = e.target.value;

    
    console.log(color.options[1]);

    for(let i=0; i < color.options.length; i++){
       //set attribute 
       const colorAttribute = color.options[i].getAttribute("data-theme");
    

       // If attribute does not match designValue add hidden attribute
       if(colorAttribute != designValue){
        color.options[i].setAttribute("hidden", 'hidden');
       } else {
           // Else remove hidden
        color.options[i].removeAttribute("hidden");
       }

    }
  })
/*************************
 END Job Role
**************************/
/***************************************************************************
 Main conference have to be checked first before workshops is open
****************************************************************************/

function mainConferenceCheckedOpenWorkShops(){
    const workShops = document.querySelectorAll('#activities-box input[data-day-and-time]');
    const mainConference = document.querySelectorAll('#activities-box input[name=all]');
    
    mainConference[0].addEventListener('click', (e) => {

        if(e.target.checked == true){
            //remove disabled from workshops so user can use checkboxes
            Object.keys(workShops).forEach(function(i) {
                workShops[i].removeAttribute('disabled')
                })
        } else if (e.target.checked == false) {
            Object.keys(workShops).forEach(function(i) {
                workShops[i].checked = false;
                workShops[i].setAttribute('disabled', 'disabled')
                })
        }
      });

}

mainConferenceCheckedOpenWorkShops();

function workShopCheckedDisableSameTimeSlot(){
    const workShops = document.querySelectorAll('#activities-box input[data-day-and-time]');
    Object.keys(workShops).forEach(function(i) {   
            workShops[i].addEventListener('click', (e) => {
                if(workShops[i].checked == true){
                
                const timeSlot = e.target.getAttribute('data-day-and-time');
                const name = e.target.getAttribute('name');
    
                deactivateSameTimeSlot(timeSlot, name, workShops[i])
                } else {
                    console.log(workShops[i].getAttribute('data-day-and-time'));
                    const timeslotValue = workShops[i].getAttribute('data-day-and-time'); 
                    const timeSlot = document.querySelectorAll(`[data-day-and-time="${timeslotValue}"]`);
                    
                    for(let i = 0; i < timeSlot.length; i++){
                        
                        timeSlot[i].removeAttribute('disabled', 'disabled');
                    }
                }
            })
        })
    
}
workShopCheckedDisableSameTimeSlot();

function deactivateSameTimeSlot(timeslot, name, workShop){ 
    const workShops = document.querySelectorAll('#activities-box input[data-day-and-time]');
    Object.keys(workShops).forEach(function(i) {
        if(timeslot == workShops[i].getAttribute('data-day-and-time') && name != workShops[i].getAttribute('name') && workShops[i].checked == false){
            workShops[i].setAttribute('disabled', 'disabled');
        }
    })
}

/***************************************************************************
 END: Main conference have to be checked first before workshops is open
****************************************************************************/

 
