const primaryNav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const darkBody = document.querySelector('body');
const darkMode = localStorage.getItem("theme");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    } else if (visibility === "true"){
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
    console.log(visibility);
})

darkModeToggle.addEventListener('click', () => {
    const darkModeStatus = document.body.getAttribute('class');
    let darkMode;
    if( darkModeStatus === 'light-mode'){
        document.body.setAttribute('class','dark-mode')
        darkMode = true;
    } else if (darkModeStatus === 'dark-mode'){
        document.body.setAttribute('class','light-mode')
        darkMode = false;
    }
    localStorage.setItem("theme",darkMode);
});

function doDarkMode(){
    if( darkMode === 'false'){
        document.body.setAttribute('class','light-mode')
    } else if (darkMode === 'true'){
        document.body.setAttribute('class','dark-mode')
    }
}

doDarkMode();
