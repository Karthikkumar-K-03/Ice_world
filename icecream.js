const menuBtn = document.getElementById("menubtn")
const navLinks = document.getElementById("nav-links")
const menubtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click",(e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open")
    menubtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    )
})

navLinks.addEventListener("click",(e)=> {
    navLinks.classList.remove("open")
    menubtnIcon.setAttribute("class","ri-menu-3-line")
})

const scrollRevealoption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".header_image img",{
    duration:1000,
})
ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealoption,
    delay:500,
})
ScrollReveal().reveal(".header_content .section_description",{
    ...scrollRevealoption,
    delay:1000,
})
ScrollReveal().reveal(".header_btn",{
    ...scrollRevealoption,
    delay:1500,
})
ScrollReveal().reveal(".header_content .socials",{
    ...scrollRevealoption,
    delay:2000,
})

ScrollReveal().reveal(".popular_card",{
    ...scrollRevealoption,
    interval:500,
})

ScrollReveal().reveal(".discover_card img",{
    ...scrollRevealoption,
    origin:"left",
})

ScrollReveal().reveal(".discover_card_content h4",{
    ...scrollRevealoption,
    delay: 500,
})

ScrollReveal().reveal(".discover_card_content .section_description",{
    ...scrollRevealoption,
    delay: 1000,
})

ScrollReveal().reveal(".discover_card_content h3",{
    ...scrollRevealoption,
    delay: 1500,
})

ScrollReveal().reveal(".discover_card_btn",{
    ...scrollRevealoption,
    delay: 2000,
})

ScrollReveal().reveal(".banner_content .section_header",{
    ...scrollRevealoption,
})

ScrollReveal().reveal(".banner_content .section_description",{
    ...scrollRevealoption,
    delay:500,
})

ScrollReveal().reveal(".banner_card",{
    ...scrollRevealoption,
    delay:1000,
    interval:500,
})

ScrollReveal().reveal(".subscribe_content .section_header",{
    ...scrollRevealoption,
})

ScrollReveal().reveal(".subscribe_content .section_description",{
    ...scrollRevealoption,
    delay:500,
})

ScrollReveal().reveal(".subscribe_content form",{
    ...scrollRevealoption,
    delay:1000,
})