function getPortfolioHtml(projectData){
    const projectsHtml = projectData.map(project => getProjectButtonHtml(project)).join('');
    return `
        <section>
            <h1>Portfolio Projects</h1>
            <p class="tagline">Projects and experiences that I am currently proud of</p>
            ${getEmailPromptHTML()}
        </section>
        
        <section class="portfolio flex-col">
            ${projectsHtml}
        </section>
    `;
}

function getProjectHtml(project) {
    return `
        <section>
            <h1>${project.project_name}</h1>
            <p class="tagline">${project.tagline}</p>
            ${getEmailPromptHTML()}
        </section>
        
        <section class="grid">
            <div class="project-primary flex-col">
                <div class="project-img square card glass relative padding-0">
                    <div class="project-links flex-row justify-end">
                        <a type="button" href="${project.link_github}" target="_blank" class="project-link square card cta-btn flex-row justify-center align-items-center">
                            <img src="assets/icons/github-sign.png" class="square">
                        </a>
                        ${getLiveSite(project.link_website)}
                    </div>
                    
                    <img id="project-img" src="${project.images[0]}" class="cover">
                </div>
                
                <div class="flex-row justify-between">
                    <button id="prevImg-btn" class="btn cta-btn" onclick="prevImgBtn(${project.images.length})">
                        prev
                    </button>
                    
                    <button id="nextImg-btn" class="btn cta-btn" onclick="nextImgBtn(${project.images.length})">
                        next
                    </button>
                </div>
                
                ${getSkillsHtml(project)}
                
                <button id="back-btn" class="btn cta-btn align-self-center">
                    Back to Portfolio
                </button>
            </div>
            
            ${getDescriptionHtml(project)}
        </section>
    `;
}

let projectImageCurrent = 0;

function prevImgBtn(projectImgCount){
    if (projectImageCurrent === 1){
        projectImageCurrent = projectImgCount;
    } else {
        projectImageCurrent -= 1;
    }
    changeImage();
}

function nextImgBtn(projectImgCount){
    if (projectImageCurrent === projectImgCount){
        projectImageCurrent = 1;
    } else {
        projectImageCurrent += 1;
    }
    changeImage();
}

function changeImage(){
    let projectImage = document.getElementById("project-img");
    let imgLink = projectImage.src;
    let imgLinkBase = imgLink.slice(0, imgLink.lastIndexOf('-') + 1);

    if (projectImageCurrent < 10){
        projectImage.src = imgLinkBase + '0' + projectImageCurrent + '.png';
    } else {
        projectImage.src = imgLinkBase + projectImageCurrent + '.png';
    }
}

function getEmailPromptHTML(){
    return `
        <div class="btn cta-btn display-block">
            <a href="mailto:wm.gagejackson@gmail.com?subject=Hello%2C%20Gage&body=Hi%2C%20Gage%21%20I%20saw%20your%20portfolio%20site%20and%20wanted%20to%20talk%20about%20">
                let's chat!
            </a>
        </div>
    `;
}

function getSkillsHtml(project){
    const skillsHtml = project.skills.map(skill => `
        <div class="skill square card glass">
            <p>${skill}</p>
        </div>
    `).join('');

    return `<div class="skills">${skillsHtml}</div>`;
}

function getDescriptionHtml(project){
    const paragraphsHtml = project.full_description.map(paragraph => `<p>${paragraph}</p>`).join('');

    return `
        <div class="project-description card glass">
            <h2>${project.project_name}</h2>
            ${paragraphsHtml}
        </div>
    `;
}

function getProjectButtonHtml(project) {
    return `
        <article>
            <button class="dark-mode portfolio-project flex-row card glass" 
                    id="${project.short_name}-btn" data-darkMode="true">
                <img src="${project.images[0]}" class="glass-image">
                
                <div>
                    <h3 class="text-start">${project.project_name}</h3>
                    <p class="text-start">${project.tagline}</p>
                </div>
                <div>
                    <div class="btn cta-btn proj-btn display-block">
                        <span>Take a look!</span>
                    </div>
                </div>
            </button>
        </article>
    `;
}

function getLiveSite(liveSite){
 if (liveSite === '#'){
     return `
            
            `
 } else {
     return `
            <a type="button" href="${liveSite}" target="_blank"
            class="project-link square card cta-btn flex-row justify-center align-items-center">
                <img src="assets/icons/web.png" class="square">
            </a>
            `
 }
}
