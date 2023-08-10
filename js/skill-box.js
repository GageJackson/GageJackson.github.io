function formatSkillsBox(){
    const containers = document.querySelectorAll('.skills');

    const skillBoxSize = 96;
    const minimumSpacing = 10;
    const maximumSpacing = 96;

    const containerWidth = containers.item(0).getBoundingClientRect().width;
    const skillsPerRow = Math.floor(containerWidth / (skillBoxSize + minimumSpacing));
    const availableSpace = containerWidth - (skillsPerRow * skillBoxSize);

    let spacing = Math.floor(Math.min(maximumSpacing, availableSpace / (skillsPerRow - 1)));

    for (let i = 0; i < containers.length; i++){
        containers.item(i).style.display = 'flex';
        containers.item(i).style.flexWrap = 'wrap';
        containers.item(i).style.gap = spacing + 'px';
    }
}
//
// window.addEventListener('resize', function() {
//     formatSkillsBox();
// });