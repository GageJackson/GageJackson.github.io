function setButtons(){
    const btnHome = document.getElementById('home-btn');
    const btnAbout = document.getElementById('about-btn');
    const btnPortfolio = document.getElementById('portfolio-btn');
    const btnResume = document.getElementById('resume-btn');

    btnHome.addEventListener('click', async () => changeContent('home'));
    btnAbout.addEventListener('click', async () => changeContent('about'));
    btnPortfolio.addEventListener('click', async () => {
        await changeContent('portfolio');
        formatSkillsBox();
        createProjectLinks();
    });
    btnResume.addEventListener('click', async () => {
        await changeContent('resume');
        formatSkillsBox();
    });
}

async function changeContent(content){
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = "";
    const response = await fetch('partials/' + content + '.html');
    const html = await response.text();
    contentContainer.innerHTML = html;
}

function createProjectLinks(){
    const btnDoglister = document.getElementById('doglister-btn');
    const btnWeather = document.getElementById('weather-btn');
    const btnHoneydo = document.getElementById('honeydo-btn');

    btnDoglister.addEventListener('click', async () => {
        await changeContent('projects/doglister');
        formatSkillsBox();
    });

    btnWeather.addEventListener('click', async () => {
        await changeContent('projects/weather-app');
        formatSkillsBox();
    });

    btnHoneydo.addEventListener('click', async () => {
        await changeContent('projects/honeydo-helper');
        formatSkillsBox();
    });
}

