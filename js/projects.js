async function fetchPortfolio(){
    const response = await fetch('data/portfolio.json');
    const projectData = await response.json();


    setPortfolioHtml(projectData);
    formatSkillsBox();
    createProjectLinks();
}

async function fetchProject(projectName){
    const response = await fetch('data/portfolio.json');
    const projectData = await response.json();

    setProjectHtml(projectData, projectName);
    formatSkillsBox();
    setBackBtn();
}

function setPortfolioHtml(projectData){
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = getPortfolioHtml(projectData);
}

function setProjectHtml(projectData, projectName){
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = getProjectHtml(projectData, projectName);
}

function setBackBtn(){
    const btnBack = document.getElementById('back-btn');

    btnBack.addEventListener('click', async () => {
        await fetchPortfolio();
    });
}

function getPortfolioHtml(projectData){
    let html = "";

    html += `<section>`;
    html += `<h1>Portfolio Projects</h1>`;
    html += `<p class="tagline">Projects and experiences that I am currently proud of</p>`;
    html += `<a href="mailto:wm.gagejackson@gmail.com" class="btn cta-btn">ask me questions</a>`;
    html += `</section>`;

    for (const project of projectData) {
        html += `<section>`;
        html += `<article>`;
        html += `<button class="portfolio grid dark-mode" id="${project.short_name}-btn" data-darkMode="true">`;

        html += `<div class="portfolio-img card glass">`;
        html += `<img src="${project.images[0]}" class="glass-image cover">`;
        html += `</div>`;

        html += `<div class="portfolio-description card glass">`;
        html += `<h2 class="">${project.project_name}</h2>`;
        html += `<p>${project.short_description}</p>`;
        html += `</div>`;

        html += getSkillsHtml(project, 'portfolio');
        html += `</button>`;
        html += `</article>`;
        html += `</section>`;
    }

    return html;
}

function getProjectHtml(projectData, projectName) {
    let html = "";

    for (const project of projectData) {
        if (project.short_name === projectName) {
            html += `<section>`;
            html += `<h1>${project.project_name}</h1>`;
            html += `<p class="tagline">${project.tagline}</p>`;
            html += `<a href="mailto:wm.gagejackson@gmail.com" class="btn cta-btn">ask me questions</a>`;
            html += `</section>`;

            html += `<section class="grid">`;
            html += `<button id="back-btn" class="btn cta-btn">`
            html += `Back to Portfolio`
            html += `</button>`

            html += `<div class="project-img square card glass">`;
            html += `<a type="button" href="${project.link_github}" class="github-link square card cta-btn">`;
            html += `<img src="assets/icons/github-sign.png" class="github-link-img square">`;
            html += `</a>`;
            html += `<img src="${project.images[0]}" class="cover">`;
            html += `</div>`;

            html += getDescriptionHtml(project);
            html += getSkillsHtml(project, 'project');
            html += `</section>`;
        }
    }
    return html;
}

function getSkillsHtml(project, placement){
    let html = "";
    html += `<div class="${placement}-skills">`;
    html += `<div class="skills">`;

    for (const skill of project.skills) {
        html += `<div class="skill square card glass">`;
        html += `<p>${skill}</p>`;
        html += `</div>`;
    }

    html += `</div>`;
    html += `</div>`;
    return html;
}

function getDescriptionHtml(project){
    let html = "";
    html += `<div class="project-description card glass">`;
    html += `<h2 class="">${project.project_name}</h2>`;

    for (const paragraph of project.full_description) {
        html += `<p>${paragraph}</p>`;
    }

    html += `</div>`;
    return html;
}
