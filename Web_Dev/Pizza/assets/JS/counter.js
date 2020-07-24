const counter_1 = document.querySelector('.counter_1');
const counter_2 = document.querySelector('.counter_2');
const counter_3 = document.querySelector('.counter_3');
const speed_1 = 50;
const speed_2 = 100;
const speed_3 = 100;


function updateCount_1() {
    const target = +counter_1.getAttribute('data-target');
    const count = +counter_1.innerText;
    const inc = target / speed_1;

    if (count < target) {
        counter_1.innerText = Math.ceil(count + inc);
        setTimeout(updateCount_1, 20);
    } else {
        count.innerText = target;
    }
    // console.log(inc);
}

function updateCount_2() {
    const target = +counter_2.getAttribute('data-target');
    const count = +counter_2.innerText;
    const inc = target / speed_2;

    if (count < target) {
        counter_2.innerText = count + inc;
        setTimeout(updateCount_2, 1);
    } else {
        count.innerText = target;
    }
    // console.log(inc);
}

function updateCount_3() {
    const target = +counter_3.getAttribute('data-target');
    const count = +counter_3.innerText;
    const inc = target / speed_3;

    if (count < target) {
        counter_3.innerText = Math.ceil(count + inc);
        setTimeout(updateCount_3, 1);
    } else {
        count.innerText = target;
    }
    // console.log(inc);
}

function restAll() {
    counter_1.innerText = 0;
    counter_2.innerText = 0;
    counter_3.innerText = 0;
}