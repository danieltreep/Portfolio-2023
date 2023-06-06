gsap.registerPlugin(ScrollTrigger);

// Photobubble
const photobubbletl = gsap.timeline({defaults: {
    scrollTrigger: {
        trigger: '.about',
        scrub: true,
        // markers: true,
        end: '200'
    },
}});

photobubbletl.from('.photobubble', {y: 500})
    .to('.photo', { opacity: 1 });


// Fade out
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

// Bubbles mousemovement
// const home = document.querySelector('.home');
// let x, y;
// let xTo = gsap.quickTo(".bubbleanimate", "x", {ease: "power3"}),
//     yTo = gsap.quickTo(".bubbleanimate", "y", {duration: 0.6, ease: "power3"});

// home.addEventListener('mousemove', move)

// function move(e) {
//     const safeToAnimate = window.matchMedia(
//         "(prefers-reduced-motion: no-preference)"
//       ).matches;

//     if (!safeToAnimate) {
//         home.removeEventListener('mousemove', move);
//         return;
//     }
    
//     x = (100 * e.clientX) / window.innerWidth - 5;
//     y = (100 * e.clientY) / window.innerHeight - 50;
    
//     xTo(x);
//     yTo(y);
// }

// Bubbles paralax
const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom top",
      scrub: true,
    //   markers: true
    }
});

gsap.utils.toArray(".bubbleanimate").forEach(bubble => {
    const speed = bubble.dataset.speed;
    const movement = -(bubble.offsetHeight * speed)
    tl.to(bubble, {y: movement, ease: "none"}, 0)
});


// Home timeline
const hometl = gsap.timeline();

hometl.from('.h1animate', {
    y: 20,
    opacity: 0,
    stagger: .4,
    // scale: .8,
    duration: .8
})
.from('.animate', {
    opacity: 0,
    y: 10,
    stagger: .1,
    duration: .3,
    ease: 'ease'
}) 
.from('.bubbleanimate', {
    opacity: 0,
    stagger: .06,
    y: 50,
    ease: 'elastic',
    duration: 3
})

// Fadein class
const fadein = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        // markers: true,
        start: 400,
   }
});

fadein.from('.hide', {
    yPercent: 100, 
    opacity: 0, 
    stagger: .05, 
    rotate: 5, 
    duration: .5,
    ease: 'ease'
})

// Slide 
gsap.to('.first-row', {
    scrollTrigger: {
        trigger: '.bottle',
        scrub: true,
        // markers: true
    },
    xPercent: -80,
    ease: 'ease'
})

gsap.to('.second-row', {
    scrollTrigger: {
        trigger: '.bottle',
        scrub: true,
        // markers: true
    },
    xPercent: 80,
    ease: 'ease'

})

// NAV 
gsap.to('header', {
    scrollTrigger: {
        trigger: '.bottle',
        scrub: true
    },
    // backgroundColor: '#00000080',
    // backdropFilter: 'invert(70%)'
})

const sections = gsap.utils.toArray(".section");
const navLinks = gsap.utils.toArray(".navlink");

sections.forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top 50%",

    onEnter: () => {
      navLinks.forEach((e) => {
        e.classList.remove("active");
      });
      navLinks[i].classList.add("active");
    },
    onEnterBack: () => {
      navLinks.forEach((e) => {
        e.classList.remove("active");
      });
      navLinks[i].classList.add("active");
    }
  });
});

// Windmill
gsap.to('#mills', {
    scrollTrigger: {
        scrub: true,
        trigger: '.contact'
    },
    rotate: 360,
    transformOrigin: 'center center'
})