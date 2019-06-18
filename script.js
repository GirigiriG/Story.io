const newLocal = {
    "hamburger": document.getElementsByClassName('fa-bars')[0],
    "close": document.getElementsByClassName('fa-times')[0],
    "navigation": document.querySelectorAll('ul')[0],
    "info": document.getElementsByClassName('info')[0]
};
//let close = document.getElementsByClassName('fa-times')[0]


let controlProperties = newLocal

let showMenu = () => {
    let control = newLocal;
    control.hamburger.classList.remove('show') 
    control.hamburger.classList.add('hide')    
    control.close.classList.add('show')
    control.close.classList.remove('hide')
    control.navigation.classList.add('showNavigation')       
    control.navigation.classList.remove('hide')       
}

  
let showClose = () => {
    let control = newLocal;
    control.hamburger.classList.add('show')
    control.navigation.classList.add('hide')
    control.navigation.classList.remove('showNavigation')
    control.close.classList.add('hide')     
    control.close.classList.remove('show')     
}

let showArticle = () => {
    let article = document.getElementsByClassName('article')[0]
    let info = document.getElementsByClassName('author')[0]
    info.classList.add('hideAuthor')
    article.classList.add('showarticle')
}

let styleTopNavigation = () => {
    let windowHeight = window.scrollY;
    let navSearch = document.getElementById("top-nav-search")
    let nav = document.getElementsByTagName('nav')[0]
    if(windowHeight >= 120) {
        navSearch.classList.add('show-top-nav-search')
        nav.classList.add('blackNav')
        return;
    }
    
    navSearch.classList.remove('show-top-nav-search')
    nav.classList.remove('blackNav')        
}


newLocal.hamburger.addEventListener('click', showMenu)
newLocal.close.addEventListener('click', showClose)
newLocal.info.addEventListener('click', showArticle)
window.addEventListener('scroll', styleTopNavigation)

