gsap
    .timeline({
        defaults: {
            duration: 1.5
        }
    })
    .add('start')
    .to('.ball1', {
        x: 300,
        scale: 2,
        ease: "bounce"
    }, 'start')
    .to('.ball2', {
        x: 300,
        scale: 2,
        ease: "bounce"
    }, 'start+=0.25')
    .to('.ball3', {
        x: 300,
        scale: 2,
        ease: "bounce"
    }, 'start+=0.5')