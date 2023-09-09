gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
        content: '.card',
        smooth: 2,
        effects: true
    })

    let itemsL = gsap.utils.toArray('.card-hijo')

    itemsL.forEach(item => {
        gsap.fromTo(item, { opacity: 0, x: -50}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-1000',
                end: '0',
                scrub: true
            }
        })
    })

    let itemsR = gsap.utils.toArray('.right_side .gallery_item')

    itemsR.forEach(item => {
        gsap.fromTo(item, { opacity: 0, x: 50 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-750',
                end: 'top',
                scrub: true
            }
        })
    })

}