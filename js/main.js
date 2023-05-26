// gsap.registerPlugin(ScrollTrigger);

// gsap.to('.object', {
//     scrollTrigger: {
//         trigger: '.object',
//         markers: true
//     },
//     x: 200, 
//     duration: .5, 
//     delay: .5,
// });

// const object = document.querySelector('.object');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
    let x, y;

    x = (e.clientX / 10);
    y = e.clientY / 10;

    // console.log(x);

    gsap.to('.object', {
        x: x,
        y: y,
    })
})