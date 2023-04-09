
var magnets = document.querySelectorAll('.magnetic')
var strength = 50;

magnets.forEach( (magnet) => {
    magnet.addEventListener('mousemove', moveMagnet );
    magnet.addEventListener('mouseout', function(event) {
        TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
    } );
});

function moveMagnet(event) {
    var magnetButton = event.currentTarget
    var bounding = magnetButton.getBoundingClientRect()

    //console.log(magnetButton, bounding)

    TweenMax.to( magnetButton, 1, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
        ease: Power4.easeOut
    })

    //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
}

const container = document.querySelector('.container');
const circle = document.querySelector('.circle');

container.addEventListener('mousemove', e => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - 100;
    const y = e.clientY - rect.top * 2.9;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
});