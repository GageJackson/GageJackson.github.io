// This script manages the creation and handling of buttons for a multi page application appearance on a single page site.
// The buttons allow seamless transitions between different sections while maintaining a consistent background.

// Initialize the buttons and their click event listeners
function initializeNavButtons() {
    const buttons = {
        logo: document.getElementById('logoContainer'),
        home: document.getElementById('home-btn'),
        about: document.getElementById('about-btn'),
        portfolio: document.getElementById('portfolio-btn'),
        resume: document.getElementById('resume-btn')
    };

    buttons.logo.addEventListener('click', () => navigateToSection('home'));
    buttons.home.addEventListener('click', () => navigateToSection('home'));
    buttons.about.addEventListener('click', () => navigateToSection('about'));
    buttons.portfolio.addEventListener('click', () =>  navigateToPortfolio());
    buttons.resume.addEventListener('click', () => navigateToSection('resume'));
}

// Navigate to the specified content section by replacing the current content with the selected partial
async function navigateToSection(section){
    setContentContainerHTML(await fetchPartialHtml(section));
    resetPage();
}

// Initialize the buttons for project pages and set their click event listeners
function initializeProjectButtons(){
    const buttons = {
        doglister: document.getElementById('doglister-btn'),
        weather: document.getElementById('weather-btn'),
        honeydo: document.getElementById('honeydo-btn'),
        lof: document.getElementById('lof-btn')
    };

    for (const projectName in buttons) {
        const button = buttons[projectName];
        if (button) {
            button.addEventListener('click', () => navigateToProject(projectName));
        }
    }
}

async function navigateToPortfolio(){
    const projectData = await fetchJsonFile('data/portfolio.json');
    setContentContainerHTML(getPortfolioHtml(projectData));
    resetPage();
}

async function navigateToProject(projectName){
    const projectData = await fetchJsonFile('data/portfolio.json');
    const project = projectData.find(project => project.short_name === projectName);
    if (project) {
        setContentContainerHTML(getProjectHtml(project));
        resetPage();
    }
}

function initializeBackToPortfolioBtn(){
    const btnBack = document.getElementById('back-btn');
    if(btnBack){
        btnBack.addEventListener('click', () => navigateToPortfolio());
    }
}