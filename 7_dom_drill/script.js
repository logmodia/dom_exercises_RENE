/*
 list all the children from the <ul>
 - loop to only iterate over element nodes
 - Find the element that contains `Fast and Furious`. If it's not the first element move it to the top of the list
 - Since `Fast and Furious` is the most important franchise ever, add a class `.important` to the element
 Add an `eventListener` on every items of the list. If the item is clicked an alert pops up to display the name of clicked element
 Add a special condition to the previous function if the clicked item is `Fast and Furious` the `alert()` should display :
 `The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.`
*/
const ulTag = document.querySelector("ul")
const ulNodes = document.querySelector("ul").childNodes
let indexFast_n_Furious=0

for (let i = 0; i < ulNodes.length; i++){

    
    if (ulNodes[i].nodeType===1){
        if (ulNodes[i].textContent==="Fast and Furious"){
            
            ulNodes[i].setAttribute("class", ".important")
            indexFast_n_Furious = i
    
        }

        ulNodes[i].addEventListener("click", (e)=>{
            if (e.target.textContent ==="Fast and Furious"){
                alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
            }else{
                alert(e.target.tagName)
                
            }
        })
        
    }
    
    if ((i === ulNodes.length-1) && (indexFast_n_Furious > 0)){ //Move fast and furious on top
        
        ulTag.insertBefore(ulNodes[indexFast_n_Furious],ulNodes[0])
    }

}

//Create a new `<div>` before the existing list (ul)
const newdiv = document.createElement("div")
document.body.insertBefore(newdiv,document.querySelector("ul"))
newdiv.innerHTML="I am a new div created by JS<br/>"

//create a new <select> tag into the previously created <div>, with two <option>s in it: "important franchises" and "normal franchises"
const newSelectTag = document.createElement("select")
const newOpt1 = document.createElement("option")
const newOpt2 = document.createElement("option")

newOpt1.value="normalfranch"
newOpt1.text="Normal franchises"
newOpt2.value="importfranch"
newOpt2.text="Important franchises"

newSelectTag.add(newOpt1,null)
newSelectTag.add(newOpt2,null)

newdiv.appendChild(newSelectTag)

/*
Add an eventListener to the `<select>`, on `change`, if the option "important franchise" is chosen,
only display items of the list that have the class `.important`.
*/
const listnerNewSeletTag = ()=>{
    if (newSelectTag.value ==="importfranch"){
        
        for (let i = 0; i < ulNodes.length; i++){

            if (ulNodes[i].nodeType===1){
                if (ulNodes[i].className != ".important"){
                    ulNodes[i].style.visibility = "hidden"
                }
            }
        }
        
    }else{
        for (let i = 0; i < ulNodes.length; i++){

            if (ulNodes[i].nodeType===1){
                if (ulNodes[i].className != ".important"){
                    ulNodes[i].style.visibility = "visible"
                }
            }
        }

    }
}

newSelectTag.addEventListener("change", listnerNewSeletTag)

//Remove duplicates----------------------
let currentIndex

for (let i = 0; i < ulNodes.length; i++){

    currentIndex = i
    
    for (let i = 1; i < ulNodes.length; i++){

        if ((ulNodes[i].nodeType === 1) && (i != currentIndex)){
            if (ulNodes[i].isEqualNode(ulNodes[currentIndex])){
                ulTag.removeChild(ulNodes[currentIndex])
                break
            }
        }
    }
}

/* 
    Add an `eventListener` on the document body, listening for `keyup`.
    When pressing the `r` key of the keyboard the list should get sorted in a random order,
    however `Fast and Furious` remains the first element.
*/

document.body.addEventListener("keyup", (e)=>{
  
    var keynum;
    
    if(window.event) {                 
        keynum = e.code;
        if (keynum === "KeyR"){

            for (let i = ulNodes.length - 1; i > 0; i--) { //Randomize order of elements "li" children of "ul"
                const j = Math.floor(Math.random() * (i + 1));
                
                /*const temp = ulNodes[i];
                ulNodes[i] = ulNodes[j];
                ulNodes[j] = temp;*/
                ulTag.insertBefore(ulNodes[j],ulNodes[i])
                
            }

          for (let i = 0; i < ulTag.children.length; i++){ //Move Fast and Furious element to the top
              if ((ulTag.children[i].className === ".important" ) && (i > 0)){
                ulTag.insertBefore(ulTag.children[i],ulTag.children[0])
                break
              }
            }

          //Modify the function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned
        }else if (keynum === "KeyD"){

            let clonedFast_n_Furious

            for (let i = 0; i < ulTag.children.length; i++){
                if (ulTag.children[i].className === ".important"){
                    clonedFast_n_Furious = ulTag.children[i].cloneNode(true)
                    ulTag.insertBefore(clonedFast_n_Furious,ulTag.children[0])

                    break
                }
              }
        }
    }

})




