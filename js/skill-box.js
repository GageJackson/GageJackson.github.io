"use strict";
(function () {

    function formatSkillsBox(){
        const containers = document.querySelectorAll('.skills');

        const skillBoxSize = 80;
        const minimumSpacing = 10;
        const maximumSpacing = 40;

        // const containerWidth = container.getBoundingClientRect().width;
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

    window.addEventListener('resize', function() {
        formatSkillsBox();
    });

    formatSkillsBox();
})();