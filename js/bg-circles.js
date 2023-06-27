// settings
let updateRate = 1000 / 60;
let lastTime = 0;
let elapsedTime = 0;

// canvas variables
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cw = canvas.width;
let ch = canvas.height;

// fps
let fps = 0;
let accumulatedTime = 0;
let accumulatedFrames = 0;

let numCircles = 30;
let circles = [];
let velocity = 1;
let size = 200 * cw / 1000;
// console.log(size);

function main(timestamp) {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cw = canvas.width;
    ch = canvas.height;

    // accumulating time and frames for FPS
    accumulatedTime += timestamp - lastTime;
    accumulatedFrames++;

    // keeping track of passed time
    elapsedTime += timestamp - lastTime;
    lastTime = timestamp;

    // calculating the fps
    if (accumulatedTime >= 1000) {
        fps = accumulatedFrames;
        accumulatedFrames = 0;
        accumulatedTime -= 1000;
    }

    // logic update - if machine slow then do multiple steps to catch up
    while (elapsedTime >= updateRate) {
        update();
        elapsedTime -= updateRate;
    }

    // render update - render every possible frame
    render();

    // repeat loop
    requestAnimationFrame(main);
}

function update() {
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        circle.x += circle.vx;
        circle.y += circle.vy;

        // horizontal boundary
        if (circle.x <= circle.size || circle.x >= cw - circle.size) {
            circle.vx *= -1;
            circle.x = circle.x <= circle.size ? circle.size : cw - circle.size;
        }
        // vertical boundary
        if (circle.y <= circle.size || circle.y >= ch - circle.size) {
            circle.vy *= -1;
            circle.y = circle.y <= circle.size ? circle.size : ch - circle.size;
        }
    }
}

function render() {
    ctx.clearRect(0, 0, cw, ch);
    // infoCtx.clearRect(0, 0, cw, ch);

    // circles
    for (let i = 0; i < circles.length; i++) {
        // Set the fill style and draw a rectangle
        ctx.fillStyle = circles[i].gradient;
        ctx.beginPath();
        const radius = circles[i].size;

        ctx.arc(circles[i].x, circles[i].y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}


// create the circles
for (let i = 0; i < numCircles; i++) {
    let randSize = Math.random() * size;

    // Create a radial gradient
    const gradient = ctx.createRadialGradient((cw/2), 0, 0, (cw/2), 0, ch * 1.25);
    //const gradient = ctx.createRadialGradient(circles[i].x, circles[i].y, 0, circles[i].x, circles[i].y, circles[i].size);

    // Add three color stops
    gradient.addColorStop(0, "hsla(9, 84%, 55%, 1)");
    gradient.addColorStop(0.5, "hsla(330, 66%, 41%, 1)");
    gradient.addColorStop(1, "hsla(271,94%,20%, 1)");

    circles.push({
        size: randSize,
        gradient: gradient,
        x: (Math.random() - 0.5)* cw/2 + cw/2,
        y: (Math.random() - 0.5)* ch/2 + ch/2,
        vx: (Math.random() - 0.5) * velocity * 1,
        vy: (Math.random() - 0.5) * velocity * 1
    });
}

requestAnimationFrame(main);