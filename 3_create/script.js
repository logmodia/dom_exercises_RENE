const learners = ["Antoine Ghysens", "Aurore Remy", "Baptiste Geron", "Batsheba Deepijan", "Bruno Presti",
"Fabrice Castrogiovanni", "Fanny Fraiture", "Francis François", "Frederic Van Overmeire", "JC Molhant",
"Maxim K.", "Michael Tesfay", "Philippe Meulemans", "Raoni Gillet", "Rouslan Boyko", "Stephane Genet",
"Thomas Backers", "Tiffany Dessouroux"];

const randomizeArr = (...arr) => { //This function randomizes (chuffles) the order of an array elements

    
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        
    }

    return arr;
}

const shuffled_learnersArr = randomizeArr(...learners)


let bg_dark_or_light = ""

const bg_darkLight_color = (r,g,b) =>{ //This function is used to know if a color is light or dark

    let hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
        );
    
        // Using the HSP value, determine whether the color is light or dark
        if (hsp>180) {
    
            return 'light';
        } 
        else {
    
            return 'dark';
        }

}


const random_rgbColor = () =>{//This returns a random color
    const x =Math.floor(Math.random()*(254 + 1));
    const y =Math.floor(Math.random()*(254 + 1));
    const z =Math.floor(Math.random()*(254 + 1));
    const rgbColor =`rgb(${x},${y},${z})`;

    bg_dark_or_light = bg_darkLight_color(x,y,z)

    return rgbColor;
    
}

/*This fuction modifies the DOM by creating new section tags with p elements in the exsiting article tag
Each section has a random background and depending on the brightness (dark or light) of the background color the p tags text color changes
to black if background color is light, it turns to white when background color is dark   */
const newTag = (name) =>{ 
    const newSection = document.createElement("section");
    const newP = document.createElement("p");
    newSection.append(newP);
    document.body.querySelector("main").querySelector("article").append(newSection);
    newP.append(name)
    
    newSection.style.backgroundColor=random_rgbColor()

    if (bg_dark_or_light ==="dark"){
        newP.style.color = "rgb(255,255,255)"
        
    }if (bg_dark_or_light ==="light") {
        newP.style.color = "rgb(0,0,0)"
        
    } else {
        
    }
    
    
}

shuffled_learnersArr.forEach(elem => { //Creating new tags(p) containning the elements of the shuffled array
    newTag(elem);
    
}); 
