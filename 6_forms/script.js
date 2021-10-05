/**
 When typeing a letter in input field, it goes into the `<span id="display-firstname">`.
 The content of the input field and the span always remains the same.
 */
const firstName_Input = document.getElementById("firstname")
const displayFirstName_span = document.getElementById("display-firstname")

firstName_Input.addEventListener("keyup", (e) =>{
    displayFirstName_span.textContent=e.target.value
})

/*If the age is below 18 the content of the section `a-hard-truth` remains hidden, otherwise it is shown.
id="a-hard-truth" style="visibility: hidden*/
const age_Input = document.getElementById("age")
const hidden_section = document.getElementById("a-hard-truth")

age_Input.addEventListener("keyup", (e) =>{
    if (e.target.value >= 18){
        hidden_section.style.visibility="visible"
    } else {
        hidden_section.style.visibility="hidden"
    }
})

age_Input.addEventListener("click", (e) =>{
    if (e.target.value >= 18){
        hidden_section.style.visibility="visible"
    } else {
        hidden_section.style.visibility="hidden"
    }
})

/*
Showin a visual hint (for instance turning the field red) if the password is too short (less than 6 characters)
or if the password and its confirmation do not match.
*/
const pwd_Input = document.getElementById("pwd")
const pwd_confirm_Input = document.getElementById("pwd-confirm")

pwd_Input.addEventListener("keyup", (e) =>{
    if (e.target.value.length < 6){
        pwd_Input.style.backgroundColor="red"

    } else if(e.target.value != pwd_confirm_Input.value) {
        pwd_Input.style.backgroundColor="red"
        
    } else {
        pwd_Input.style.backgroundColor="white"
        pwd_confirm_Input.style.backgroundColor="white"
    }
})

pwd_confirm_Input.addEventListener("keyup", (e) =>{
    if (e.target.value.length < 6){
        pwd_confirm_Input.style.backgroundColor="red"

    } else if(e.target.value != pwd_Input.value) {
        pwd_confirm_Input.style.backgroundColor="red"

    }else{
        pwd_confirm_Input.style.backgroundColor="white"
        pwd_Input.style.backgroundColor="white"
    }
})

/*using a `change` listener on the `<select>` field to toggle a dark mode on the whole page.
For ease of use, we'll say that the dark mode is just turning the background black and the text white.
*/
const selectTag = document.getElementById("toggle-darkmode")

console.log(document.querySelector("main").children)

selectTag.addEventListener("change", (e) =>{
    if (e.target.value === "dark"){
        document.body.setAttribute("style","color : white; background-Color : black")
    }else{
        document.body.setAttribute("style","color : black; background-Color : white")
    }

});