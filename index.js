const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
,"~","`","!","@","#","$","%","^","&","*","(",")","_",
"-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let firstPwd = ""
let secondPwd = ""

let numberCaracters = 14

let passwordGenerate = false

let generateBtn = document.getElementById("generate-btn")
let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")
let nbCharacters = document.getElementById("nb-characters")

generateBtn.addEventListener("click", function() {
    if (nbCharacters.value === "") {
        for (let i = 0 ; i < numberCaracters ; i++) {
            firstPwd += characters[Math.floor(Math.random() * characters.length)]
            secondPwd += characters[Math.floor(Math.random() * characters.length)]
        }
    }
    else {
        for (let i = 0 ; i < nbCharacters.value ; i++) {
            firstPwd += characters[Math.floor(Math.random() * characters.length)]
            secondPwd += characters[Math.floor(Math.random() * characters.length)]
        }
    }
    firstPassword.style.padding = '10px 30px'
    firstPassword.textContent = firstPwd

    secondPassword.style.padding = '10px 30px'
    secondPassword.textContent = secondPwd

    firstPwd = ""
    secondPwd = ""

    passwordGenerate = true
})

firstPassword.addEventListener("click", function() {
    if (passwordGenerate === true) {
        navigator.clipboard.writeText(firstPassword.textContent).then(() => {
            alert("Copied to clipboard");
        });
    }
})

secondPassword.addEventListener("click", function() {
    if (passwordGenerate === true) {
        navigator.clipboard.writeText(secondPassword.textContent).then(() => {
            alert("Copied to clipboard");
        });
    }
})

