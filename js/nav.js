function setNav() {
    const primaryNav = document.querySelector('.primary-nav');
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    const darkElements = document.querySelectorAll('.dark-mode');
    const darkModeStorage = localStorage.getItem("darkMode");
    let darkMode = darkModeStorage;

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
    });

    darkModeToggle.addEventListener('click', () => {
        if(darkMode === 'true'){
            darkMode = 'false';
        } else {
            darkMode = 'true';
        }
        doDarkMode();
        localStorage.setItem("darkMode",darkMode);
    });

    function doDarkMode(){
        darkElements.forEach(function(element) {
            element.setAttribute('data-darkMode', darkMode);
        });

        if(darkMode === 'true'){
            darkModeToggle.innerText = "Light Mode";
        } else {
            darkModeToggle.innerText = "Dark Mode";
        }
    }

    doDarkMode(darkMode);
}
