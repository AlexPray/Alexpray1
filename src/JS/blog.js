/*  --- BLOG-ANIMATION --- */

// Holt meine erste Box und macht es zu einem Array
let contentBox = document.querySelector(".blog-content-box")
let allContentBox = [contentBox]

// Wechselt immer zur nächsten Box und fügt alle Boxen dem Array hinzu, bis es keine mehr gibt
while(contentBox.nextElementSibling) {

    contentBox = contentBox.nextElementSibling
    allContentBox.push(contentBox)
}

// wiederhohlt die Schleife bis die die letzte Box in der Liste bearbeitet wurde
for(let i = 0; i < allContentBox.length -1; i++) {

    // startet die Funktion sobald die animation der derzeitigen Box zu ende ist 
    allContentBox[i].addEventListener('animationend', () => {

        //bearbeitet die nächste Box in der Liste
        allContentBox[i + 1].classList.add("content-box-transform")
        allContentBox[i + 1].classList.remove("blog-content-hidden")
    })
}

//Animiert die erste Box
allContentBox[0].classList.add("content-box-transform")
allContentBox[0].classList.remove("blog-content-hidden")
