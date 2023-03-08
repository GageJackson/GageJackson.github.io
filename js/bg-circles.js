// settings
let updateRate = 1000 / 60;
let lastTime = 0;
let elapsedTime = 0;

// canvas variables
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let cw = canvas.width;
let ch = canvas.height;

// fps
let fps = 0;
let accumulatedTime = 0;
let accumulatedFrames = 0;

// blocks (numCircles * 2 * size must be less than 600 for this example)
let numCircles = 15;
let circles = [];
let velocity = 1;
let size = 125;

function main(timestamp) {

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
    for (let i = 0; i < numCircles; i++) {
        let circle = circles[i];
        circle.x += circle.vx;
        circle.y += circle.vy;
        // horizontal boundary
        if (circle.x <= size || circle.x >= cw - size) {
            circle.vx *= -1;
            circle.x = circle.x <= size ? size : cw - size;
        }
        // vertical boundary
        if (circle.y <= size || circle.y >= ch - size) {
            circle.vy *= -1;
            circle.y = circle.y <= size ? size : ch - size;
        }
    }
}

function render() {
    ctx.clearRect(0, 0, cw, ch);
    // circles
    for (let i = 0; i < numCircles; i++) {
        // Create a radial gradient
        // The inner circle is at x=110, y=90, with radius=30
        // The outer circle is at x=100, y=100, with radius=70
        const gradient = ctx.createRadialGradient((cw/2), 0, 0, (cw/2), 100, 1200);
        //const gradient = ctx.createRadialGradient(circles[i].x, circles[i].y, 0, circles[i].x, circles[i].y, circles[i].size);

        // Add three color stops
        gradient.addColorStop(0, "hsl(0,40%,60%)");
        gradient.addColorStop(0.5, "hsl(0,77%,29%)");
        gradient.addColorStop(1, "hsl(0,100%,11%)");

        // Set the fill style and draw a rectangle
        ctx.fillStyle = gradient;
        //ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.arc(circles[i].x, circles[i].y, circles[i].size, 0, 2 * Math.PI, false);
        ctx.fill();
    }

    // fps
    ctx.fillStyle = 'white';
    ctx.font = "10px Arial";
    ctx.fillText("FPS: " + fps, 5, 12);
}

// create the circles
for (let i = 0; i < numCircles; i++) {
    let randSize = Math.random() * size;
    circles.push({
        size: randSize,
        x: 2 * randSize * i,
        y: Math.random() * (ch - 2 * randSize) + randSize,
        vx: (Math.random() - 0.5) * velocity * 1,
        vy: (Math.random() - 0.5) * velocity * 0.25
    });
}

requestAnimationFrame(main);