let index = 0
const sentences = [
    'Hello, Jalen!',
    'This is a funny way to do this...',
    '...but I wanted to tell you...',
    '...that you are a great friend!',
    'PS. There is a secret here...'
];
function changeMessage() {
    let textElement = document.getElementById("message");

    if (index < sentences.length - 1) {
        // Display the next sentence
        textElement.innerHTML = sentences[index];
        index++;
    } else {
        // Last sentence: Split it into words, and make the last word a link
        let lastSentence = sentences[index];
        let words = lastSentence.split(' '); // Split the sentence into words
        let lastWord = words[words.length - 1]; // Get the last word
        
        // Replace the last word with a link
        words[words.length - 1] = `<span class="clickable-word">${lastWord}</span>`; // Add class to the last word

        textElement.innerHTML = words.join(' '); // Join the words back into a sentence
        
        // Attach the event listener to the last word (span with the class "clickable-word")
        let clickableWord = textElement.querySelector(".clickable-word");
        clickableWord.addEventListener("click", showImage); // Add event listener for the click
    }
}
function changeImage() {
    let img = document.getElementById("gear");

    if(img){
        if(img.src.includes("gear_a.png")){
            img.src = "img/gear_b.png"
        }
        else if(img.src.includes("gear_b.png")){
            img.src = "img/gear_c.png"

        } else {
            img.src = "img/gear_a.png"
        }
    }
    else{
        console.error("Image element not found!");

    }
}

function toggleSpin() {
    let img = document.getElementById("gear");

    if (img) {
        img.classList.remove("ccspin"); 
        img.classList.toggle("spin"); // Toggle the spin class on and off
    } else {
        console.error("Image element not found!");
    }
}

function toggleccSpin() {
    let img = document.getElementById("gear");

    if (img) {
        img.classList.remove("spin"); 
        img.classList.toggle("ccspin"); 
    } else {
        console.error("Image element not found!");
    }
}
function showImage() {
    let img = document.getElementById("heavy");
    img.style.display = "block"; // Make the image visible
}
