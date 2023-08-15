function setButtons(){
    const btnHome = document.getElementById('home-btn');
    const btnAbout = document.getElementById('about-btn');
    const btnPortfolio = document.getElementById('portfolio-btn');
    const btnResume = document.getElementById('resume-btn');

    btnHome.addEventListener('click', async () => changeContent('home'));

    btnAbout.addEventListener('click', async () => changeContent('about'));

    btnPortfolio.addEventListener('click', async () => {
        await createPortfolioPage();
        setDarkMode();
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
        await createProjectPage('doglister');
    });

    btnWeather.addEventListener('click', async () => {
        await createProjectPage('weather');
    });

    btnHoneydo.addEventListener('click', async () => {
        await createProjectPage('honeydo');
    });
}

