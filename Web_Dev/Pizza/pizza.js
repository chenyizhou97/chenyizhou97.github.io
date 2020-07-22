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

let vh = window.innerHeight;
let vw = window.innerWidth;


let x1_1 = 622,
    y1_1 = 335,
    x2_1 = 960,
    y2_1 = 265,
    x3_1 = 965,
    y3_1 = 545;

let x1_2 = 471,
    y1_2 = 558,
    x2_2 = 613,
    y2_2 = 345,
    x3_2 = 955,
    y3_2 = 548;

let x1_3 = 484,
    y1_3 = 608,
    x2_3 = 961,
    y2_3 = 819,
    x3_3 = 961,
    y3_3 = 554;

let x1_4 = 977,
    y1_4 = 813,
    x2_4 = 1424,
    y2_4 = 647,
    x3_4 = 978,
    y3_4 = 565;

let x1_5 = 985,
    y1_5 = 549,
    x2_5 = 1443,
    y2_5 = 625,
    x3_5 = 1329,
    y3_5 = 351;

let x1_6 = 968,
    y1_6 = 268,
    x2_6 = 1299,
    y2_6 = 334,
    x3_6 = 976,
    y3_6 = 540;



function preload() {
    bottom = loadImage('assets/bottom.png');
    pizzaslice_1 = loadImage('assets/Pizzaslice_1.png');
    pizzaslice_2 = loadImage('assets/Pizzaslice_2.png');
    pizzaslice_3 = loadImage('assets/Pizzaslice_3.png');
    pizzaslice_4 = loadImage('assets/Pizzaslice_4.png');
    pizzaslice_5 = loadImage('assets/Pizzaslice_5.png');
    pizzaslice_6 = loadImage('assets/Pizzaslice_6.png');
}

function setup() {
    cnv = createCanvas(vw, vh);
    cnv.parent('pizza_cooked');
    imageMode(CENTER);
    image(bottom, width / 2, height / 2);
    alpha_1 = 255;
    alpha_2 = 255;
    alpha_3 = 255;
    alpha_4 = 255;
    alpha_5 = 255;
    alpha_6 = 255;

    console.log(vh, vw);

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

    imageMode(CENTER);
    image(bottom, width / 2, height / 2);

    push();
    tint(255, alpha_1);
    image(pizzaslice_1, slice_1x, slice_1y);
    tint(255, alpha_2);
    image(pizzaslice_2, slice_2x, slice_2y);
    tint(255, alpha_3);
    image(pizzaslice_3, slice_3x, slice_3y);
    tint(255, alpha_6);
    image(pizzaslice_6, slice_6x, slice_6y);
    tint(255, alpha_5);
    image(pizzaslice_5, slice_5x, slice_5y);
    tint(255, alpha_4);
    image(pizzaslice_4, slice_4x, slice_4y);
    pop();

    noStroke();
    noFill();
    hover_1 = triangle(x1_1, y1_1, x2_1, y2_1, x3_1, y3_1);
    hover_2 = triangle(x1_2, y1_2, x2_2, y2_2, x3_2, y3_2);
    hover_3 = triangle(x1_3, y1_3, x2_3, y2_3, x3_3, y3_3);
    hover_4 = triangle(x1_4, y1_4, x2_4, y2_4, x3_4, y3_4);
    hover_5 = triangle(x1_5, y1_5, x2_5, y2_5, x3_5, y3_5);
    hover_6 = triangle(x1_6, y1_6, x2_6, y2_6, x3_6, y3_6);

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