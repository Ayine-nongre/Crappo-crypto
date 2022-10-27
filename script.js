function menu() {
    var nav = document.getElementById("navi")
    if(nav.className === "desktop-nav"){
        nav.className += "_respond"
    }
    else{
        nav.className = "desktop-nav"
    }
}

function reveal() {
    var windowHeight = window.innerHeight
    var elementVisible = 30
    var spec = document.getElementsByClassName("spec")
    for(i = 0; i < spec.length; i++){
        var specTop = spec[i].getBoundingClientRect().top
        if (specTop < (windowHeight - elementVisible)) {
            spec[i].classList.add("active")
        }
        else {
            spec[i].classList.remove("active")
        }
    }  
    
    var detail = document.querySelector(".more-details")
    var detailTop = detail.getBoundingClientRect().top
    if (detailTop < (windowHeight - elementVisible)) {
        detail.classList.add("active")
    }
    else {
        detail.classList.remove("active")
    } 

    var illustration = document.querySelector(".illustration2")
    var illustrationTop = illustration.getBoundingClientRect().top
    if (illustrationTop < (windowHeight - elementVisible)) {
        illustration.classList.add("active")
    }
    else {
        illustration.classList.remove("active")
    } 

    var data = document.querySelector(".data")
    var dataTop = data.getBoundingClientRect().top
    if (dataTop < (windowHeight - elementVisible)) {
        data.classList.add("active")
    }
    else {
        data.classList.remove("active")
    } 

    var hash = document.querySelector(".hash-cal")
    var hashTop = hash.getBoundingClientRect().top
    if (hashTop < (windowHeight - elementVisible)) {
        hash.classList.add("active")
    }
    else {
        hash.classList.remove("active")
    } 

    var coin = document.querySelector(".coiny-header")
    var coinTop = coin.getBoundingClientRect().top
    if (coinTop < (windowHeight - elementVisible)) {
        coin.classList.add("active")
    }
    else {
        coin.classList.remove("active")
    } 

    var header = document.querySelector(".final-header")
    var headerTop = header.getBoundingClientRect().top
    if (headerTop < (windowHeight - elementVisible)) {
        header.classList.add("active")
    }
    else {
        header.classList.remove("active")
    } 

    var fData = document.getElementsByClassName("final-data")
    for(i = 0; i < fData.length; i++){
        var fDataTop = fData[i].getBoundingClientRect().top
        if (fDataTop < (windowHeight - elementVisible)) {
            fData[i].classList.add("active")
        }
        else {
            fData[i].classList.remove("active")
        }
    } 

    var fIllustration = document.getElementsByClassName("final-illus")
    for(i = 0; i < fIllustration.length; i++){
        var fIllustrationTop = fIllustration[i].getBoundingClientRect().top
        if (fIllustrationTop < (windowHeight - elementVisible)) {
            fIllustration[i].classList.add("active")
        }
        else {
            fIllustration[i].classList.remove("active")
        }
    }
    
    var subscribe = document.querySelector(".subscribe")
    var subscribeTop = subscribe.getBoundingClientRect().top
    if (subscribeTop < (windowHeight - elementVisible)) {
        subscribe.classList.add("active")
    }
    else {
        subscribe.classList.remove("active")
    } 
}

window.addEventListener("scroll", reveal)

function change(n){
    i = n
    console.log(i)
    var coinAct = document.getElementsByClassName("coin-div")
    var next = document.getElementsByClassName("next")
    var btn = document.getElementsByClassName("nextBtn")
    for(j = 0; j < coinAct.length; j++){
        if(j == i){
            coinAct[j].style.background = "#2B076E"
            coinAct[j].style.color = "white"
            next[j].style.display = "none"
            btn[j].style.display = "block"
        }
        else{
            coinAct[j].style.background = "white"
            coinAct[j].style.color = "black"
            next[j].style.display = "block"
            btn[j].style.display = "none"

        }
    }
}
