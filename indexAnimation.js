
// Animasi GSAP muncul pelan di awal
gsap.from(".hero-content", {
    y: 40,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
});