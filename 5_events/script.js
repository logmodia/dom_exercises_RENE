//const { default: Swal } = require("sweetalert2")
const random_rgbColor = () =>{ //Random color----------
  const x =Math.floor(Math.random()*(255 + 0));
  const y =Math.floor(Math.random()*(255 + 0));
  const z =Math.floor(Math.random()*(255 + 0));
  const rgbColor =`rgb(${x},${y},${z})`;

  return rgbColor;
  
}

const _initTime = Date.now()

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
  //console.log(e.target.classList[1])
  //console.log(getElapsedTime())
  const logContent = "[" + getElapsedTime() + "] Created a new " + e.target.classList[1] + " square"
  createLog(logContent)

  let targetColorClass = e.target.classList[1]
  newSquares(targetColorClass)

}


const newSquare_alert = (xcol,colName) => { //Customized alert box
  Swal.fire({
    title: 'My background is '+ colName,
    //text: 'Do you want to continue',
    icon: 'info',
    confirmButtonText: 'Ok',
    background:xcol,
  })
}

//This function creates dinamically the new square when the user clicks on one of the three existing square
const newSquares = (ColorClass) =>{
  const secWrapper = document.querySelector('.displayedsquare-wrapper')
  let actualTag = document.querySelector('.actionsquare')


  const duplicTag = document.createElement("div")
  duplicTag.setAttribute("class", ColorClass)
  duplicTag.setAttribute("style", "height : 50px; width : 50px; margin : 25px")

  duplicTag.addEventListener("click", (e)=>{ //affecting the event to change the alertbox backgroung color acordin to the color of the target
    let squareColor = e.target.classList[0]

    switch(squareColor){
      case "green" :
        newSquare_alert("lime","green")
        break
      case "violet" :
        newSquare_alert("magenta","violet")
        break
        case "orange" :
        newSquare_alert("orange","orange")
        break
    }

  })

  secWrapper.appendChild(duplicTag) //Appending the new tag to the section
}

//Creating log elements-------------
const createLog = (liContent) =>{
  let ul = document.querySelector("ul")
  let newLi = document.createElement("li")
  newLi.textContent=liContent
  ul.appendChild(newLi)
}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
}

document.body.addEventListener('keydown', (e)=>{
  
    var keynum;
    let logKey = "[" + getElapsedTime() + "] Pressed space key"

    if(window.event) {                 
        keynum = e.code;
        switch (keynum){
          case "Space" :
                document.body.style.backgroundColor = random_rgbColor()
                createLog(logKey)
            break
    
          case "KeyL" :
            let liTodel = document.querySelectorAll("li")
            liTodel.forEach(element => {
              element.parentElement.removeChild(element)  
            });
            break
    
          case "KeyS" :
            const squareToDel = document.querySelector(".displayedsquare-wrapper").children
            if (squareToDel.length > 0){
              do{
                squareToDel[0].parentElement.removeChild(squareToDel[0])
              }while (squareToDel.length > 0)

            }
            break
        }
    }

})
