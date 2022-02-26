const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');

let lastPosition;

function handleCheck(event) {
    let inBetween = false;

    // check if user press shiftkey & they are checking it
    if(event.shiftKey && this.checked){

        // loop over every checkbox agagin
        checkboxes.forEach(checkbox => {
            // console.log(checkbox);
            // check the lastPosition from backward or from forward
            if(checkbox === lastPosition || checkbox === this) {
                // this is a flag that switches
                inBetween = !inBetween;
            }
            // if inBetween is true then then checked will be true
            if(inBetween)
                checkbox.checked = true;
        })
    }
    lastPosition = this;
}



checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));