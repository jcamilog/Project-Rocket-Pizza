const headerNav = document.querySelector(".links-header")
const buttonMenu = document.querySelector(".button-nav")
buttonMenu.addEventListener("click", hideShow)

function hideShow(){
    if(headerNav.classList.contains("is-active")){

        headerNav.classList.remove("is-active")
    }else{
        headerNav.classList.add("is-active")
    }
}