let cnv;
let hover_1, hover_2, hover_3, hover_4, hover_5, hover_6;
let alpha_1, alpha_2, alpha_3, alpha_4, alpha_5, alpha_6;
let mouseOn_1, mouseOn_2, mouseOn_3, mouseOn_4, mouseOn_5, mouseOn_6;

let slice_1x, slice_1y;
let slice_2x, slice_2y;
let slice_3x, slice_3y;
let slice_4x, slice_4y;
let slice_5x, slice_5y;
let slice_6x, slice_6y;

let vh;
let vw;






function preload() {
    bottom = loadImage('assets/Illustration/bottom.png');
    pizzaslice_1 = loadImage('assets/Illustration/Pizzaslice_1.png');
    pizzaslice_2 = loadImage('assets/Illustration/Pizzaslice_2.png');
    pizzaslice_3 = loadImage('assets/Illustration/Pizzaslice_3.png');
    pizzaslice_4 = loadImage('assets/Illustration/Pizzaslice_4.png');
    pizzaslice_5 = loadImage('assets/Illustration/Pizzaslice_5.png');
    pizzaslice_6 = loadImage('assets/Illustration/Pizzaslice_6.png');
}

function setup() {

    alpha_1 = 255;
    alpha_2 = 255;
    alpha_3 = 255;
    alpha_4 = 255;
    alpha_5 = 255;
    alpha_6 = 255;



    mouseOn_1 = false;
    mouseOn_2 = false;
    mouseOn_3 = false;
    mouseOn_4 = false;
    mouseOn_5 = false;
    mouseOn_6 = false;



}

function draw() {
    cnv = createCanvas(vw, vh);
    cnv.parent('pizza_cooked');

    vh = window.innerHeight;
    vw = window.innerWidth;

    let x1_1 = 0.32 * vw,
        y1_1 = 0.27 * vh,
        x2_1 = 0.5 * vw,
        y2_1 = 0.2 * vh,
        x3_1 = 0.502 * vw,
        y3_1 = 0.502 * vh;

    let x1_2 = 0.245 * vw,
        y1_2 = 0.52 * vh,
        x2_2 = 0.319 * vw,
        y2_2 = 0.29 * vh,
        x3_2 = 0.497 * vw,
        y3_2 = 0.505 * vh;

    let x1_3 = 0.252 * vw,
        y1_3 = 0.56 * vh,
        x2_3 = 0.5 * vw,
        y2_3 = 0.795 * vh,
        x3_3 = 0.5 * vw,
        y3_3 = 0.515 * vh;

    let x1_4 = 0.509 * vw,
        y1_4 = 0.790 * vh,
        x2_4 = 0.742 * vw,
        y2_4 = 0.62 * vh,
        x3_4 = 0.509 * vw,
        y3_4 = 0.515 * vh;

    let x1_5 = 0.513 * vw,
        y1_5 = 0.510 * vh,
        x2_5 = 0.751 * vw,
        y2_5 = 0.590 * vh,
        x3_5 = 0.692 * vw,
        y3_5 = 0.295 * vh;

    let x1_6 = 0.504 * vw,
        y1_6 = 0.206 * vh,
        x2_6 = 0.677 * vw,
        y2_6 = 0.297 * vh,
        x3_6 = 0.508 * vw,
        y3_6 = 0.5 * vh;

    console.log(vw, vh);

    imageMode(CENTER);
    image(bottom, width / 2, height / 2, 0.559 * vw, 0.715 * vh);

    push();
    tint(255, alpha_1);
    image(pizzaslice_1, slice_1x, slice_1y, 0.215 * vw, 0.347 * vh);
    tint(255, alpha_2);
    image(pizzaslice_2, slice_2x, slice_2y, 0.265 * vw, 0.342 * vh);
    tint(255, alpha_3);
    image(pizzaslice_3, slice_3x, slice_3y, 0.26 * vw, 0.3 * vh);
    tint(255, alpha_6);
    image(pizzaslice_6, slice_6x, slice_6y, 0.1875 * vw, 0.3376 * vh);
    tint(255, alpha_5);
    image(pizzaslice_5, slice_5x, slice_5y, 0.26 * vw, 0.381 * vh);
    tint(255, alpha_4);
    image(pizzaslice_4, slice_4x, slice_4y, 0.243 * vw, 0.295 * vh);
    pop();

    noStroke();
    noFill();
    // hover_1 = triangle(x1_1, y1_1, x2_1, y2_1, x3_1, y3_1);
    // hover_2 = triangle(x1_2, y1_2, x2_2, y2_2, x3_2, y3_2);
    // hover_3 = triangle(x1_3, y1_3, x2_3, y2_3, x3_3, y3_3);
    // hover_4 = triangle(x1_4, y1_4, x2_4, y2_4, x3_4, y3_4);
    // hover_5 = triangle(x1_5, y1_5, x2_5, y2_5, x3_5, y3_5);
    // hover_6 = triangle(x1_6, y1_6, x2_6, y2_6, x3_6, y3_6);

    trianCollision1(mouseX, mouseY, x1_1, y1_1, x2_1, y2_1, x3_1, y3_1);
    trianCollision2(mouseX, mouseY, x1_2, y1_2, x2_2, y2_2, x3_2, y3_2);
    trianCollision3(mouseX, mouseY, x1_3, y1_3, x2_3, y2_3, x3_3, y3_3);
    trianCollision4(mouseX, mouseY, x1_4, y1_4, x2_4, y2_4, x3_4, y3_4);
    trianCollision5(mouseX, mouseY, x1_5, y1_5, x2_5, y2_5, x3_5, y3_5);
    trianCollision6(mouseX, mouseY, x1_6, y1_6, x2_6, y2_6, x3_6, y3_6);

    update_1();
    update_2();
    update_3();
    update_4();
    update_5();
    update_6();


}