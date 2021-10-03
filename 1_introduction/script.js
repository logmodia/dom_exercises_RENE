/* let mydocTitle = document.querySelector("title");
mydocTitle.innerText = "Modifying the DOM";
console.log(mydocTitle); */
const x =Math.floor(Math.random()*(254 + 1));
const y =Math.floor(Math.random()*(254 + 1));
const z =Math.floor(Math.random()*(254 + 1));
const rgbColor =`rgb(${x},${y},${z})`;

document.title = "Modifying the dom";
console.log(document.title);

const childElement = () => {
    let childelmt = "";
    let gotKid =0;
    let bodyChild = document.querySelector("body").children;

    console.log("body :");
    console.log(bodyChild);

    for (let i = 0; i < bodyChild.length; i++) {
        gotKid = bodyChild[i].childElementCount;
        //console.log(bodyChild[i].tagName,gotKid)

        if (gotKid === 0) {
          console.log(bodyChild[i].tagName,gotKid);
        }else{
          childelmt = bodyChild[i].children;
          console.log(bodyChild[i].tagName,childelmt);
          //console.log(childelmt);
        }

    } 
} 

childElement();

//document.body.setAttribute("style", "color : red");
document.body.style.backgroundColor=rgbColor;