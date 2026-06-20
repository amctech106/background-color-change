let body = document.querySelector("body")

let red = document.querySelector("#red")
red.addEventListener("click",()=>{
    body.style.backgroundColor="red"
})

let green = document.querySelector("#green")
green.addEventListener("click",()=>{
    body.style.backgroundColor="green"
})

let orange= document.querySelector("#orange")
orange.addEventListener("click",()=>{
    body.style.backgroundColor="orange"
})

let blue= document.querySelector("#blue")
blue.addEventListener("click",()=>{
    body.style.backgroundColor="blue"
})

let reset= document.querySelector("#reset")
reset.addEventListener("click",()=>{
    body.style.backgroundColor="white"
})