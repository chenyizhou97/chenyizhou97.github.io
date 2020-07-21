var controller = new ScrollMagic.Controller();
const appear = document.querySelector('#pizza_pie');
const fall = document.querySelector('#pizza_fall');
const origin = document.querySelector('#origin');

const middle_line = document.querySelector('#middle_line');

const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');

const matzah = document.querySelector('#matzah');
const europe = document.querySelector('#europe');
const asia = document.querySelector('#asia');

const inovation = document.querySelector('#inovation');
const scroll = document.querySelector('#scroll');
const p2_1 = document.querySelector('#p2_1');

const fun_facts = document.querySelector('#fun_facts');
const middle_line_2 = document.querySelector('#middle_line_2');
const p1_2 = document.querySelector('#p1_2');
const p2_2 = document.querySelector('#p2_2');
const p3_2 = document.querySelector('#p3_2');
const rocket_container = document.querySelector('#rocket_container');
const computer = document.querySelector('#computer');
const pizzaman = document.querySelector('#pizzaman');

const mozzarella = document.querySelector('#mozzarella');
const mozzatext = document.querySelector('#mozzatext');
const mozzatext_2 = document.querySelector('#mozzatext_2');
const cheese = document.querySelector('#cheese');

const statics = document.querySelector('#statics');
const static_1 = document.querySelector('.static_1');
const static_2 = document.querySelector('.static_2');
const static_3 = document.querySelector('.static_3');
const maskCircle = document.querySelector('#maskCircle')
const middle_line_3 = document.querySelector('#middle_line_3');
const middle_line_4 = document.querySelector('#middle_line_4');

bodymovin.loadAnimation({
    container: document.getElementById('pizza_pie'),
    render: 'svg',
    loop: false,
    autoplay: true,
    path: 'assets/pizza_pie.json',
})

const pizza_anim = bodymovin.loadAnimation({
    container: document.getElementById('pizza_fall'),
    render: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/pizza_fall.json',
    frame: 0
})


const title = document.querySelector('.title');

const tl = new gsap.timeline({ defaults: { ease: Power2.easeInOut } });
const anim_control = new gsap.timeline();
const paperscroll_tl = new gsap.timeline();
const funfact_tl = new gsap.timeline();
const mozzarella_tl = new gsap.timeline();
const statics_tl = new gsap.timeline();

pizza_anim.addEventListener('DOMLoaded', onDOMLoaded);
pizza_anim.setSpeed(1);

tl.fromTo(title, 3, { opacity: 0 }, { opacity: 1 }, "+=2")
    .fromTo(title, 2, { y: '150px' }, { y: '0px' }, "-=3")
    .fromTo(appear, 0.1, { opacity: 1 }, { opacity: 0 }, "+=2")
    .fromTo(fall, 0.1, { opacity: 0 }, { opacity: 1 }, "-=1")


function onDOMLoaded(e) {
    anim_control.to({ frame: 0 }, 30, {
        frame: pizza_anim.totalFrames - 1,
        onUpdate: function() {
            pizza_anim.goToAndStop(Math.round(this.progress() * 230), true)
        },
        ease: Linear.easeNone
    })

    .fromTo(origin, 10, { opacity: 0, x: '50px' }, { opacity: 1, x: '0px', ease: Power2.easeInOut })
        .fromTo(middle_line, 15, { height: "0%" }, { height: '79%', ease: Power2.easeInOut })
        .fromTo(p1, 10, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
        .fromTo(p1, 10, { x: '50px' }, { x: '0px', ease: Power2.easeInOut }, "-=10")
        .fromTo(matzah, 10, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, "-=10")
        .fromTo(matzah, 10, { x: '-50px' }, { x: '0px', ease: Power2.easeInOut }, "-=10")

    .fromTo(p2, 10, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
        .fromTo(p2, 10, { x: '-50px' }, { x: '0px', ease: Power2.easeInOut }, "-=10")
        .fromTo(europe, 10, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, "-=10")
        .fromTo(europe, 10, { x: '-50px' }, { x: '0px', ease: Power2.easeInOut }, "-=10")

    .fromTo(p3, 10, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
        .fromTo(p3, 10, { x: '50px' }, { x: '0px', ease: Power2.easeInOut }, "-=10")
        .fromTo(asia, 10, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, "-=10")
        .fromTo(asia, 10, { x: '-50px' }, { x: '0px', ease: Power2.easeInOut }, "-=10")

    paperscroll_tl.fromTo(inovation, 1, { opacity: 0, x: '50px' }, { opacity: 1, x: '0px', ease: Power2.easeInOut })
        .fromTo(scroll, 1, { opacity: 0, y: '50px' }, { opacity: 1, y: '0px', ease: Power2.easeInOut })
        .fromTo(p2_1, 1, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, "-=0.7")

    funfact_tl.fromTo(fun_facts, 0.5, { opacity: 0, x: '50px' }, { opacity: 1, x: '0px', ease: Power2.easeInOut })
        .fromTo(middle_line_2, 0.5, { height: "0%" }, { height: '79%', ease: Power2.easeInOut })
        .fromTo(p1_2, 0.5, { opacity: 0, x: '50px' }, { opacity: 1, x: '0px', ease: Power2.easeInOut })
        .fromTo(rocket_container, 0.5, { opacity: 0, x: '-50px' }, { opacity: 1, x: '0px', ease: Power2.easeInOut }, "-=0.5")
        .fromTo(p2_2, 0.5, { opacity: 0, x: '-50px' }, { opacity: 1, x: '0px', ease: Power2.easeInOut })
        .fromTo(computer, 0.5, { opacity: 0, x: '50px' }, { opacity: 1, x: '0px', ease: Power2.easeInOut }, "-=0.5")
        .fromTo(p3_2, 0.5, { opacity: 0, x: '50px' }, { opacity: 1, x: '0px', ease: Power2.easeInOut })
        .fromTo(pizzaman, 0.5, { opacity: 0, x: '-50px' }, { opacity: 1, x: '0px', ease: Power2.easeInOut }, "-=0.5")

    mozzarella_tl.fromTo(mozzarella, 0.5, { opacity: 0, x: '50px' }, { opacity: 1, x: '0px', ease: Power2.easeInOut })
        .fromTo(mozzatext, 0.5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
        .fromTo(mozzatext_2, 0.5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
        .fromTo(cheese, 0.5, { opacity: 0, y: '-50px' }, { opacity: 1, y: '0px', ease: Power2.easeInOut })

    statics_tl.fromTo(statics, 0.5, { opacity: 0, x: '50px' }, { opacity: 1, x: '0px', ease: Power2.easeInOut })
        .fromTo(maskCircle, 2, { strokeDashoffset: 0 }, { strokeDashoffset: 734, ease: Power2.easeInOut })
        .fromTo(static_1, 0.5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, '-=2')
        .fromTo(middle_line_3, 0.5, { width: 0 }, { width: '33%', ease: Power2.easeInOut }, '-=2')
        .fromTo(static_2, 0.5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, '-=1.5')
        .fromTo(middle_line_4, 0.5, { width: 0 }, { width: '33%', ease: Power2.easeInOut }, "-=1")
        .fromTo(static_3, 0.5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, '-=0.5')

}
var lottieScene = new ScrollMagic.Scene({
        duration: '100%',
        offset: 400,
        triggerHook: 0.5
    })
    .setPin("#pizza_fall")
    .addIndicators({ name: "1 (duration: 0)" })
    .setTween(anim_control)
    .addTo(controller)

var scene = new ScrollMagic.Scene({
        triggerElement: ".text_container_2",
        triggerHook: 0.4
    })
    .setTween(paperscroll_tl)
    .addTo(controller);

var scene_2 = new ScrollMagic.Scene({
        triggerElement: ".fun_fact_page",
        triggerHook: 0.4,
    })
    .on('start', function() {
        start_1();
    })
    .on('leave', function() {
        stop_1();
    })
    .setTween(funfact_tl)
    .addTo(controller);

var scene_3 = new ScrollMagic.Scene({
        triggerElement: ".memo_mozzarella",
        triggerHook: 0.4
    })
    .setTween(mozzarella_tl)
    .addTo(controller);

var scene_4 = new ScrollMagic.Scene({
        triggerElement: ".statics_container",
        triggerHook: 0.4,
    })
    .on('start', function() {
        start_2();
    })
    .on('leave', function() {
        stop_2();
    })
    .setTween(statics_tl)
    .addTo(controller);

//page 4 animation
const rocket = bodymovin.loadAnimation({
    container: document.getElementById('rocket_container'),
    render: 'svg',
    loop: true,
    autoplay: false,
    path: 'assets/rocket.json',
    frame: 0
})

const computer_anim = bodymovin.loadAnimation({
    container: document.getElementById('computer'),
    render: 'svg',
    loop: true,
    autoplay: false,
    path: 'assets/computer.json',
    frame: 0
})

const scale_illustration = bodymovin.loadAnimation({
    container: document.getElementById('scale_illustration'),
    render: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/pepperoni_scale.json',
    frame: 0
})

const US_map = bodymovin.loadAnimation({
    container: document.getElementById('US_map'),
    render: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/US_map.json',
    frame: 0
})



// control the animation on fun fact page
function start_1() {
    rocket.play();
    computer_anim.play();
}

function stop_1() {
    rocket.stop();
    computer_anim.stop();
}

// control the animation on statics page

function start_2() {
    scale_illustration.play();
    US_map.play();
    updateCount_1();
    updateCount_2();
    updateCount_3();
}

function stop_2() {
    scale_illustration.stop();
    US_map.stop();
    restAll();
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}