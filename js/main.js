gsap.registerPlugin(ScrollTrigger);

// Photobubble
const photobubbletl = gsap.timeline({defaults: {
    scrollTrigger: {
        trigger: '.about',
        scrub: true,
        // markers: true,
        end: '100'
    },
}});

photobubbletl.from('.photobubble', {y: 400})
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
const home = document.querySelector('.home');
let x, y;
let xTo = gsap.quickTo(".bubbleanimate", "x", {ease: "power3"}),
    yTo = gsap.quickTo(".bubbleanimate", "y", {duration: 0.6, ease: "power3"});

home.addEventListener('mousemove', move)

function move(e) {
    const safeToAnimate = window.matchMedia(
        "(prefers-reduced-motion: no-preference)"
      ).matches;

    if (!safeToAnimate) {
        home.removeEventListener('mousemove', move);
        return;
    }
    
    x = (100 * e.clientX) / window.innerWidth - 5;
    y = (100 * e.clientY) / window.innerHeight - 50;
    
    xTo(x);
    yTo(y);
}

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

hometl.from('.titlespan', {
    y: 30,
    opacity: 0,
    stagger: .4,
    duration: 1
})
.from('.expanding-dot', {
    width: 6,
    duration: .5,
}) 

// Fadein class
function fadeIn(element) {
    gsap.from(element, {
        y: 50,
        opacity: 0,
    });
}

const fadein = gsap.timeline({
    scrollTrigger: {
        trigger: ".fadein",
        // markers: true,
        stagger: {
            repeat: -1
        }
   }
});

gsap.utils.toArray(".fadein").forEach(element => {
    fadein.from(element, {opacity: 0, y: 50, duration: .8});
})

// Slide in 
gsap.to('.first-row', {
    scrollTrigger: {
        trigger: '.bottle',
        scrub: true,
        start: 'top 55%',
        end: '350 40%',
        // markers: true
    },
    xPercent: -60
})

gsap.to('.second-row', {
    scrollTrigger: {
        trigger: '.bottle',
        scrub: true,
        start: 'top 55%',
        end: '350 40%',
        // markers: true
    },
    xPercent: 60
})

// NAV 
// gsap.to('.mainnav a', {
//     scrollTrigger: {
//         trigger: '.bottle',
//         scrub: true
//     },
//     color: 'white'
// })

gsap.to('header', {
    scrollTrigger: {
        trigger: '.bottle',
        scrub: true
    },
    backgroundColor: 'black'
})

// gsap.to('.mainnav a:nth-of-type(1)', {
//     scrollTrigger: {
//         trigger: '.about',
//         scrub: true,
//         toggleClass: {
//             targets: ".mainnav a:nth-of-type(1)", 
//             className: "active"
//         }
//     }
// })

gsap.to('.mainnav a:nth-of-type(2)', {
    scrollTrigger: {
        trigger: '.projects',
        scrub: true,
        toggleClass: {
            targets: ".mainnav a:nth-of-type(2)", 
            className: "active"
        },
        end: 'bottom 40%'
    }
})

gsap.to('.mainnav a:nth-of-type(3)', {
    scrollTrigger: {
        trigger: '.contact',
        scrub: true,
        toggleClass: {
            targets: ".mainnav a:nth-of-type(3)", 
            className: "active"
        }
    }
})

const a1 = gsap.timeline({
    defaults: {
        scrollTrigger: {
            trigger: '.about',
            scrub: true
        }
    }
})

a1.to('.mainnav a:nth-of-type(1)', {
    scrollTrigger: {
        
        toggleClass: {
            targets: ".mainnav a:nth-of-type(1)", 
            className: "active"
        },
        start: 'top 90%'
    },
})
.from('.scrollTracker', {
    scrollTrigger: {
        toggleClass: {
            targets: ".mainnav a:nth-of-type(1)", 
            className: "active"
        }
    },
    right: '-4rem'
})