//This function finds collections of skill containers
//Then finds the optimal gap size to have a responsive grid effect
function formatSkillsBox() {
    const containers = document.querySelectorAll('.skills');
    const skill = document.querySelectorAll('.skill');
    const minimumSkillSpacing = 8;

    // If no containers found, nothing to do
    if (containers.length === 0) {
        return;
    }

    // Get the width of the first container
    const containerWidth = containers[0].getBoundingClientRect().width;

    // Get the width of the first skill box
    const skillBoxSize = skill[0].getBoundingClientRect().width;

    // Calculate the number of skill boxes that can fit in the container
    const skillBoxesCount = Math.floor(containerWidth / (skillBoxSize + minimumSkillSpacing));

    // Calculate the number of spaces between the boxes
    const skillSpacesCount = skillBoxesCount - 1;

    // Calculate the actual content width considering skill boxes and spacing
    const contentWidth = (skillBoxesCount * skillBoxSize);

    // Calculate the leftover space after fitting the skill boxes
    const leftoverSpace = containerWidth - contentWidth;

    // Calculate the spacing, for the gap property, based on the leftover space and the skill boxes count
    let gapSpacing = Math.floor(leftoverSpace / skillSpacesCount);

    // Apply styles to each container
    containers.forEach(container => {
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.alignItems = 'center';
        container.style.gap = gapSpacing + 'px';

    });
}

