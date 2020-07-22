function trianCollision1(px, py, x1, y1, x2, y2, x3, y3) {

    // get the area of the triangle
    var areaOrig = abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;

    // get the area of 3 triangles made between the point and the corners of the triangle
    var area1 = abs(x1 * (y2 - py) + x2 * (py - y1) + px * (y1 - y2)) / 2;
    var area2 = abs(x1 * (py - y3) + px * (y3 - y1) + x3 * (y1 - py)) / 2;
    var area3 = abs(px * (y2 - y3) + x2 * (y3 - py) + x3 * (py - y2)) / 2;

    // if the sum of the three areas equals the original, we're inside the triangle
    if (area1 + area2 + area3 <= areaOrig) {
        mouseOn_1 = true;
    } else {
        mouseOn_1 = false;
    }
}

function trianCollision2(px, py, x1, y1, x2, y2, x3, y3) {

    // get the area of the triangle
    var areaOrig = abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;

    // get the area of 3 triangles made between the point and the corners of the triangle
    var area1 = abs(x1 * (y2 - py) + x2 * (py - y1) + px * (y1 - y2)) / 2;
    var area2 = abs(x1 * (py - y3) + px * (y3 - y1) + x3 * (y1 - py)) / 2;
    var area3 = abs(px * (y2 - y3) + x2 * (y3 - py) + x3 * (py - y2)) / 2;

    // if the sum of the three areas equals the original, we're inside the triangle
    if (area1 + area2 + area3 <= areaOrig) {
        mouseOn_2 = true;
    } else {
        mouseOn_2 = false;
    }
}

function trianCollision3(px, py, x1, y1, x2, y2, x3, y3) {

    // get the area of the triangle
    var areaOrig = abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;

    // get the area of 3 triangles made between the point and the corners of the triangle
    var area1 = abs(x1 * (y2 - py) + x2 * (py - y1) + px * (y1 - y2)) / 2;
    var area2 = abs(x1 * (py - y3) + px * (y3 - y1) + x3 * (y1 - py)) / 2;
    var area3 = abs(px * (y2 - y3) + x2 * (y3 - py) + x3 * (py - y2)) / 2;

    // if the sum of the three areas equals the original, we're inside the triangle
    if (area1 + area2 + area3 <= areaOrig) {
        mouseOn_3 = true;
    } else {
        mouseOn_3 = false;
    }
}

function trianCollision4(px, py, x1, y1, x2, y2, x3, y3) {

    // get the area of the triangle
    var areaOrig = abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;

    // get the area of 3 triangles made between the point and the corners of the triangle
    var area1 = abs(x1 * (y2 - py) + x2 * (py - y1) + px * (y1 - y2)) / 2;
    var area2 = abs(x1 * (py - y3) + px * (y3 - y1) + x3 * (y1 - py)) / 2;
    var area3 = abs(px * (y2 - y3) + x2 * (y3 - py) + x3 * (py - y2)) / 2;

    // if the sum of the three areas equals the original, we're inside the triangle
    if (area1 + area2 + area3 <= areaOrig) {
        mouseOn_4 = true;
    } else {
        mouseOn_4 = false;
    }
}

function trianCollision5(px, py, x1, y1, x2, y2, x3, y3) {

    // get the area of the triangle
    var areaOrig = abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;

    // get the area of 3 triangles made between the point and the corners of the triangle
    var area1 = abs(x1 * (y2 - py) + x2 * (py - y1) + px * (y1 - y2)) / 2;
    var area2 = abs(x1 * (py - y3) + px * (y3 - y1) + x3 * (y1 - py)) / 2;
    var area3 = abs(px * (y2 - y3) + x2 * (y3 - py) + x3 * (py - y2)) / 2;

    // if the sum of the three areas equals the original, we're inside the triangle
    if (area1 + area2 + area3 <= areaOrig) {
        mouseOn_5 = true;
    } else {
        mouseOn_5 = false;
    }
}

function trianCollision6(px, py, x1, y1, x2, y2, x3, y3) {

    // get the area of the triangle
    var areaOrig = abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;

    // get the area of 3 triangles made between the point and the corners of the triangle
    var area1 = abs(x1 * (y2 - py) + x2 * (py - y1) + px * (y1 - y2)) / 2;
    var area2 = abs(x1 * (py - y3) + px * (y3 - y1) + x3 * (y1 - py)) / 2;
    var area3 = abs(px * (y2 - y3) + x2 * (y3 - py) + x3 * (py - y2)) / 2;

    // if the sum of the three areas equals the original, we're inside the triangle
    if (area1 + area2 + area3 <= areaOrig) {
        mouseOn_6 = true;
    } else {
        mouseOn_6 = false;
    }
}

function update_1() {
    if (mouseOn_1) {
        if (slice_1x >= 0.326 * vw) {
            slice_1x -= 0.01 * vw;
            slice_1y -= 0.02 * vh;
            alpha_1 -= 25;
        }
    } else {
        slice_1x = 0.43 * vw;
        slice_1y = 0.376 * vh;
        alpha_1 = 255;
    }
}

function update_2() {
    if (mouseOn_2) {
        if (slice_2x >= 0.27 * vw) {
            slice_2x -= 0.01 * vw;
            alpha_2 -= 25;
        }
    } else {
        slice_2x = 0.374 * vw;
        slice_2y = 0.455 * vh;
        alpha_2 = 255;
    }
}

function update_3() {
    if (mouseOn_3) {
        if (slice_3x >= 0.272 * vw) {
            slice_3x -= 0.01 * vw;
            slice_3y += 0.02 * vh;
            alpha_3 -= 25;
        }
    } else {
        slice_3x = 0.377 * vw;
        slice_3y = 0.656 * vh;
        alpha_3 = 255;
    }
}

function update_4() {
    if (mouseOn_4) {
        if (slice_4x <= 0.73 * vw) {
            slice_4x += 0.01 * vw;
            slice_4y += 0.02 * vh;
            alpha_4 -= 25;
        }
    } else {
        slice_4x = 0.625 * vw;
        slice_4y = 0.656 * vh;
        alpha_4 = 255;
    }
}

function update_5() {
    if (mouseOn_5) {
        if (slice_5x <= 0.739 * vw) {
            slice_5x += 0.01 * vw;
            alpha_5 -= 25;
        }
    } else {
        slice_5x = 0.635 * vw;
        slice_5y = 0.47 * vh;
        alpha_5 = 255;
    }
}

function update_6() {
    if (mouseOn_6) {
        if (slice_6x <= 0.7 * vw) {
            slice_6x += 0.01 * vw;
            slice_6y -= 0.02 * vh;
            alpha_6 -= 25;
        }
    } else {
        slice_6x = 0.596 * vw;
        slice_6y = 0.372 * vh;
        alpha_6 = 255;
    }
}