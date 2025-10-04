gsap.from('.navbar', {
    width: '0dvw',
    duration: 3,
    ease: 'power3.out'
});

gsap.from('.navbar .title', {
    delay: .3,
    opacity: 0,
    duration: 1
})
gsap.from('.navbar .menu', {
    delay: 2.2,
    opacity: 0,
    duration: 1
})
