const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
    //check if shift key is down
    //and that the user is checking (not unchecking)
    let inBetween = false;
    if (e.shiftKey && this.checked) { //will stop looping when this is no longer check, aka setting the boudaries for the loop end
        checkboxes.forEach(checkbox => {
            //loop over every single check box to see if they are inbetween'
            if (checkbox === this || checkbox === lastCheck) {
                inBetween = !inBetween;
            }
            //loop over each box and if they are inBetween, set checked to true
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastCheck = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));