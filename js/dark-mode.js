function setDarkMode(){
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    const darkElements = document.querySelectorAll('.dark-mode');
    const darkModeStorage = localStorage.getItem("darkMode");
    let darkMode = darkModeStorage;

    darkModeToggle.addEventListener('click', () => {
        if(darkMode === 'true'){
            darkMode = 'false';
        } else {
            darkMode = 'true';
        }
        doDarkMode(darkMode, darkElements, darkModeToggle);
        localStorage.setItem("darkMode",darkMode);
    });

    doDarkMode(darkMode, darkElements, darkModeToggle);
}


function doDarkMode(darkMode, darkElements, darkModeToggle){
    if(darkMode === null){
        darkMode = true;
    }

    darkElements.forEach(function(element) {
        element.setAttribute('data-darkMode', darkMode);
    });

    if(darkMode === 'true'){
        darkModeToggle.innerText = "Light Mode";
    } else {
        darkModeToggle.innerText = "Dark Mode";
    }
}