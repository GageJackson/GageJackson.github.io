"use strict";
( async function () {
    fetch('partials/header.html')
        .then(response => response.text())
        .then(html => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            headerPlaceholder.innerHTML = html;
            setNav();
            initializeNavButtons();
            enableDarkMode();
        });

})();

function setContentContainerHTML(html){
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = html;
}

async function fetchPartialHtml(section){
    try {
        const response = await fetch(`partials/${section}.html`);
        return await response.text();
    } catch (error) {
        console.error(`Error loading ${section} section:`, error);
        return null
    }
}

async function fetchJsonFile(file){
    const response = await fetch(file);
    return await response.json();
}

function resetPage(){
    closeNav();

    formatSkillsBox();
    initializeBackToPortfolioBtn();
    initializeProjectButtons();

    enableDarkMode();
}