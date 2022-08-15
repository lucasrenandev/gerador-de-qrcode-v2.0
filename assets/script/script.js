
const container = document.querySelector(".container")
const input = document.querySelector("main input")
const button = document.querySelector("main button")
const footerImage = document.querySelector("footer img")

button.addEventListener("click", () => {
    
    let inputValue = input.value

    if(!inputValue) {
        window.alert("Insira uma URL para gerar um QR Code!")
    }
    else {
        button.innerHTML = "Gerando QR Code..."
        footerImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        footerImage.addEventListener("load", () => {
            container.classList.add("active")
            button.innerHTML = "Gerar QR Code"
        })
    }
})

input.addEventListener("keyup", () => {

    if(!input.value) {
        container.classList.remove("active")
    }
})