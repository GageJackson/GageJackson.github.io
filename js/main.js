"use strict";
( async function () {
    fetch('partials/header.html')
        .then(response => response.text())
        .then(html => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            headerPlaceholder.innerHTML = html;
            setNav();
            setButtons();
            setDarkMode();
        });
})();