// gsap.registerPlugin(ScrollTrigger);

// gsap.from('.object', {
//     scrollTrigger: {
//         trigger: '.object',
//         markers: true
//     },
//     x: -200, 
//     duration: .5, 
//     delay: .5,
// });

// const object = document.querySelector('.object');
// const container = document.querySelector('.container');
// let x, y;
// let xTo = gsap.quickTo(".object", "x", {ease: "power3"}),
//     yTo = gsap.quickTo(".object", "y", {duration: 0.6, ease: "power3"});

// container.addEventListener('mousemove', move)

// function move(e) {
//     const safeToAnimate = window.matchMedia(
//         "(prefers-reduced-motion: no-preference)"
//       ).matches;

//     if (!safeToAnimate) {
//         container.removeEventListener('mousemove', move);
//         return;
//     }
    
//     x = (100 * e.clientX) / window.innerWidth - 50;
//     y = (100 * e.clientY) / window.innerHeight - 50;
    
//     xTo(x);
//     yTo(y);
// }