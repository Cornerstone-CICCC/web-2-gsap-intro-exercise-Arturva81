// PUT YOUR CODE HERE
const boxTimelines = gsap.timeline({ repeat: -1, paused: true });

boxTimelines.from(".red", {duration: 1, x: "-100vw",  y: "-100vh"})
            .from(".green", {duration: 1, x: "100vw", y: "-100vh"})
            .from(".blue", {duration: 1, x: "100vw", y: "100vh"})
            .from(".yellow", {duration: 1, x: "-100vw", y: "100vh"})
            .to(".red", {duration: 1, left: "100vw", x: "-100%"})
            .to(".green", {duration: 1, top: "100vh", y: "-100%"}, "<")
            .to(".blue", {duration: 1, left: 0, x: 0}, "<")
            .to(".yellow", {duration: 1, top: 0, y: 0}, "<")
            .to(".red", {duration: 1, backgroundColor: "green"}, "<")
            .to(".green", {duration: 1, backgroundColor: "blue"}, "<")
            .to(".blue", {duration: 1, backgroundColor: "yellow"}, "<")
            .to(".yellow", {duration: 1, backgroundColor: "red"}, "<")
            .to(".box", {duration: 1, borderRadius: "50%"}, "<")
            .to(".yellow, .blue", {duration: 1, x: "-100%"})
            .to(".red, .green", {duration: 1, x: "100%"}, "<");

document.getElementById("animateBtn").addEventListener("click", () => {
    boxTimelines.play();
});

document.getElementById("stopBtn").addEventListener("click", () => {
    boxTimelines.pause();
});

document.getElementById("resetBtn").addEventListener("click", () => {
    boxTimelines.restart().pause();
});