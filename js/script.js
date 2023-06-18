let doc = document
let menuBtn1 = doc.getElementById("menu-btn-1")
let menuBtn2 = doc.getElementById("menu-btn-2")
let menuBtn3 = doc.getElementById("menu-btn-3")
let menuImg = doc.querySelector(".menu-img")
let menu = doc.querySelector(".burgermenu-wrap")
let pullOut = doc.querySelector(".pull-out-menu")
let body = doc.querySelector("body")


function menuBtnFunction(a,b,c) {
    a.classList.add("menu-btn-active")
    b.classList.remove("menu-btn-active")
    c.classList.remove("menu-btn-active")
}

menuBtn1.onclick = () => {
    menuBtnFunction(menuBtn1,menuBtn2,menuBtn3)
    menuImg.src = "./img/menu-img.png"
}

menuBtn2.onclick = () => {
    menuBtnFunction(menuBtn2,menuBtn1,menuBtn3)
    menuImg.src = "./img/menu-img.png"//Вставьте свою картинку
}

menuBtn3.onclick = () => {
    menuBtnFunction(menuBtn3,menuBtn2,menuBtn1)
    menuImg.src = "./img/menu-img.png"//Вставьте свою картинку
}

menu.onclick = () => {
    menu.classList.toggle("burgermenu-clicked")
    pullOut.classList.toggle("pull-out-non-active")
}