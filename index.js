const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
"7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}",
"]",",","|",":",";","<",">",".","?",
"/"]

let passwordLength= 15
const generateBtn = document.getElementById("generate-btn")
const passwordBtn1 = document.getElementById("password-btn1")
const passwordBtn2 = document.getElementById("password-btn2")

generateBtn.addEventListener("click", function(){
    let randomPassword=" "
    for (let i=0; i<passwordLength; i++) {
        let randomCharacter=characters[Math.floor(Math.random()*characters.length)]
        randomPassword += randomCharacter
        passwordBtn1.innerHTML=`${randomPassword}`
        passwordBtn2.innerHTML=`${randomPassword}`
       
    }
    
})
