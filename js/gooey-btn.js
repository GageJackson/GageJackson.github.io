const gooButton = document.querySelector(".gooButton");
const gooParticles = document.getElementsByClassName("goo");

gooButton.addEventListener("pointerenter", (event) => {
    for (let i = 0; i < gooParticles.length; i++) {
        let randomNum1 = (Math.floor((Math.random() * 20) + 50));
        let randomNum2 = (Math.floor((Math.random() * 20) + 50));
        let randomAngle = Math.random() * Math.PI * 2;
        let x = Math.cos(randomAngle) * randomNum1;
        let y = Math.sin(randomAngle) * randomNum2;
        gooParticles[i].style.left = `calc(50% + ${x}px)`;
        gooParticles[i].style.top = `calc(50% + ${y}px)`;
        gooParticles[i].classList.add("goo-active");

    }
});


gooButton.addEventListener("pointerleave", (event) =>{
    for (let i = 0; i < gooParticles.length; i ++){
        gooParticles[i].style.removeProperty("top");
        gooParticles[i].style.removeProperty("right");
        gooParticles[i].style.removeProperty("bottom");
        gooParticles[i].style.removeProperty("left");
        gooParticles[i].classList.remove("goo-active");

    }
    });

console.log(gooParticles);
//console.log(gooParticles);