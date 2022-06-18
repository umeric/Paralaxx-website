let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.fromTo(".text", { opacity:0}, {opacity:1, duration:3})
/*
.to('.text', 2,{x: 500}).to('.content-images',) //This first moves the text to the right
.to('.content-images',2,{opacity:0 }, '-=2') //After text moves to the right, the images will fade away
//                   does the fade 2 secs, -=2 subtract the time it takes for the text to run
*/

.to('.moon', 3, {y:-300})
.to('.astro', 3, {y:-200}, '-=3')
.fromTo('.space', { y: -50}, {y:0, duration: 3}, '-=3')
.to('.content', 3, {top:'0%'}, "-=3")


let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "100%",
    triggerHook: 0.5, //start scrolling animation, choose where you would start
    //0 triggers as soon as you scroll, 1 triggers at the end of the section
})
.setTween(timeline)
.setPin(".secton")
.addTo(controller)