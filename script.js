let element = document.querySelector(".information-3")
let isHidden = true
let button = document.querySelector(".button")

function hide(){
    if (isHidden) {
        element.classList.remove("hidden")
        isHidden = false
    } else {
        element.classList.add("hidden")
        isHidden = true
    }
}

button.onclick = () => {
    hide()
}
