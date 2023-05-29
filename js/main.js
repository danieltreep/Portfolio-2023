gsap.registerPlugin(ScrollTrigger);

gsap.from('.photobubble', {
    scrollTrigger: {
        trigger: '.photobubble',
    },
    y: 200, 
    duration: 1, 
});

gsap.to('.photo', {
    scrollTrigger: {
        trigger: '.about',
       
    },
    opacity: 1,
    duration: 1,
    delay: 1
});

gsap.to('.fade', {
    scrollTrigger: {
        trigger: '.fade',
        // markers: true,
        scrub: true,
        start: "top 15%",
        end: "bottom 5%",
    },
    opacity: 0
});

gsap.to('.expanding-dot', {
    width: 120,
    duration: .5,
    delay: 1,
    y: 3
});

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

const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
  
  gsap.utils.toArray(".bubble").forEach(bubble => {
    const speed = bubble.dataset.speed;
    const movement = -(bubble.offsetHeight * speed)
    tl.to(bubble, {y: movement, ease: "none"}, 0)
  });