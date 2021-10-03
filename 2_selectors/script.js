
const random_rgbColor = () =>{
    const x =Math.floor(Math.random()*(254 + 1));
    const y =Math.floor(Math.random()*(254 + 1));
    const z =Math.floor(Math.random()*(254 + 1));
    const rgbColor =`rgb(${x},${y},${z})`;

    return rgbColor;
    
}

const elemtClassImportant = document.getElementsByClassName("important");

console.log(" ");
console.log("1. Add title attribute to each tag wich has a class .important");

let elemtattr = "";
for (let i = 0; i < elemtClassImportant.length; i++){
    elemtattr=elemtClassImportant[i].tagName;
    document.querySelector(elemtattr).setAttribute("title", "This is an important item");
    console.log(document.querySelector(elemtattr).tagName);
    console.log(document.querySelector(elemtattr));
    
}

console.log(" ");
console.log("2. Turn img tags display property to none for each img tag wich doesn't have .important class");

const imgTags = document.querySelectorAll("img");

for (let i = 0; i < imgTags.length; i++){
    if (imgTags[i].className!="important"){
        imgTags[i].style.display="none";
        console.log(imgTags[i]);
    }
    //console.log(imgTags.length)
    
}

console.log(" ");
console.log("3. Displaying the content and class name (if it exists) of all paragraphs");

const pTags =document.querySelectorAll("p");

for (let i=0; i < pTags.length; i++){

    if (pTags[i].className != ""){
        console.log(`${pTags[i].textContent} /==> class name : ${pTags[i].className} `);
        
    }else{
        pTags[i].style.color = random_rgbColor();
        console.log(pTags[i].textContent);

    }
    
}

console.log(" ");
console.log("4. All paragraphs wich does not have a class, has now a random text color ");



