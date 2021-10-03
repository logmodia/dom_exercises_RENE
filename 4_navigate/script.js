//Moving the last child of the <ol> tag to the begining of the list
const tag_ol = document.querySelector("ol")

const tag_child1 = tag_ol.children[0]
const tag_child2 = tag_ol.children[4]

tag_ol.insertBefore(tag_child2,tag_child1)

//Moving the <h2> of the third section in the second one and vice-versa
const tag_sec = document.querySelectorAll("section")
const tag_sec2 = tag_sec[1]
const tag_sec3 = tag_sec[2].querySelector("div")
console.log(tag_sec3)

const tag_h2_sec2 = tag_sec[1].querySelector("h2")
const tag_h2_sec3 = tag_sec[2].querySelector("h2")

tag_sec2.insertBefore(tag_h2_sec3, tag_sec2.querySelector("p"))
tag_sec3.insertBefore(tag_h2_sec2, tag_sec3.querySelector("p"))

//Deleting the last section from the DOM

const lastSec = document.querySelectorAll("section")[2]

document.body.querySelector("main").removeChild(lastSec)
