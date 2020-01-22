const bellfull = document.querySelector('.bellfull');

let notificationOpen = false;

/* HIDING ELEMENTS */

/* Cross with 2 lines hidden */
gsap.set('.xline1, .xline2', {
    autoAlpha: 0,
    scaleY: 0,
    transformOrigin: '50% 0%'
})

/* EVENT LISTENER CLICK */

/* Play and reverse the animation when clicking in the bell */
bellfull.addEventListener('click', () => {
    if (!notificationOpen) {
        const tl = gsap.timeline({
            defaults: {
                duration: 0.5,
                ease: 'sine'
            }
        });
        bellTL.play()
        notificationOpen = true
    } else {
        const tl = gsap.timeline({
            defaults: {
                duration: 0.5,
                ease: 'sine'
            }
        });
        bellTL.reverse()
        notificationOpen = false
    }
})

/* ANIMATIONS */

/* Timeline to chain all the animations */
let bellTL = gsap.timeline({
    paused: true,
    defaults: {
        duration: 0.7,
        ease: 'sine'
    }
});

/*
Add label 'bell' to make sure things fire off
at a particular point in time.
Some elements increment and decrement from the label.
*/
bellTL.add('bell')

// To complete the circle when the top part disappears?
bellTL.to('.rectmask', {
    scaleY: 1.5,
    transformOrigin: '50% 100%',
    ease: 'sine.in'
}, 'bell')

// Bell top part disappears
bellTL.to('#bell', {
    scale: 0,
    autoAlpha: 0,
    transformOrigin: '50% 50%',
    ease: 'sine.in'
}, 'bell')

// Circle goes up 0.5s after
bellTL.to('#dingle', {
    y: -80,
    ease: 'bounce'
}, 'bell+=0.5')

// Circle disappears after 1.2s
bellTL.to('#dingle', {
    duration: 0.1,
    autoAlpha: 0,
}, 'bell+=1.2')

// Crosses appear, scale and rotate
bellTL.to('.xline1, .xline2', {
    duration: 0.1,
    autoAlpha: 1,
}, 'bell+=1.1')
bellTL.to('.xline1, .xline2', {
    duration: 0.5,
    scaleY: 1,
}, 'bell+=1.1')
bellTL.to('.xline1', {
    duration: 0.3,
    rotation: 45,
    transformOrigin: '50% 50%',
    ease: 'back.out(2)'
}, 'bell+=1.5')
bellTL.to('.xline2', {
    duration: 0.3,
    rotation: -45,
    transformOrigin: '50% 50%',
    ease: 'back.out(2)'
}, 'bell+=1.5')