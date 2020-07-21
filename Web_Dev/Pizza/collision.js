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
        if (slice_1x >= width / 2 - 334) {
            slice_1x -= 20;
            slice_1y -= 20;
            alpha_1 -= 25;
        }
    } else {
        slice_1x = width / 2 - 134;
        slice_1y = height / 2 - 116;
        alpha_1 = 255;
    }
}

function update_2() {
    if (mouseOn_2) {
        if (slice_2x >= width / 2 - 441) {
            slice_2x -= 20;
            alpha_2 -= 25;
        }
    } else {
        slice_2x = width / 2 - 241;
        slice_2y = height / 2 - 42;
        alpha_2 = 255;
    }
}

function update_3() {
    if (mouseOn_3) {
        if (slice_3x >= width / 2 - 437) {
            slice_3x -= 20;
            slice_3y += 20;
            alpha_3 -= 25;
        }
    } else {
        slice_3x = width / 2 - 237;
        slice_3y = height / 2 + 146;
        alpha_3 = 255;
    }
}

function update_4() {
    if (mouseOn_4) {
        if (slice_4x <= width / 2 + 443) {
            slice_4x += 20;
            slice_4y += 20;
            alpha_4 -= 25;
        }
    } else {
        slice_4x = width / 2 + 243;
        slice_4y = height / 2 + 146;
        alpha_4 = 255;
    }
}

function update_5() {
    if (mouseOn_5) {
        if (slice_5x <= width / 2 + 459) {
            slice_5x += 20;
            alpha_5 -= 25;
        }
    } else {
        slice_5x = width / 2 + 259;
        slice_5y = height / 2 - 28;
        alpha_5 = 255;
    }
}

function update_6() {
    if (mouseOn_6) {
        if (slice_6x <= width / 2 + 385) {
            slice_6x += 20;
            slice_6y -= 20;
            alpha_6 -= 25;
        }
    } else {
        slice_6x = width / 2 + 185;
        slice_6y = height / 2 - 120;
        alpha_6 = 255;
    }
}