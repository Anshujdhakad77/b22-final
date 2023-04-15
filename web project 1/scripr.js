function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();




}

init()


var overlay = document.querySelector("#overlay")
var sscroll  = document.querySelector("#scroll")
var h1 = document.querySelector("#page1 h1")


overlay.addEventListener("mouseenter",function(){
    sscroll.style.scale = 1;
})
overlay.addEventListener("mouseleave",function(){
    sscroll.style.scale = 0;
})

h1.addEventListener("mouseenter",function(){
    sscroll.style.opacity = 0;
})
h1.addEventListener("mouseleave",function(){
    sscroll.style.opacity = 1;
})

overlay.addEventListener("mousemove",function(dets){
    sscroll.style.left = `${dets.x-45}px`;
    sscroll.style.top = `${dets.y-38}px`;
})


gsap.to("#page2 img",{
    rotate:5,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 img",
        start:"top 70%",
        markers:true,
        scrub:3
    }
})


gsap.to("svg",{
    scale:1,
    top:"5%",
    fill:"#111",
    scrollTrigger:{
        trigger:"svg",
        scroller:"#main",
        markers:"true",
        start:"top 10%",
        end:"top -50%",
        scrub:true,
    }
})

gsap.to("#nav",{
    color:"#111",
    background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
    scrollTrigger:{
        trigger:"#nav h3",
        scroller:"#main",
        markers:"true",
        start:"top -100%",
        end:"top -100%",
        scrub:true,
    }
})

gsap.to("svg",{
    scale:1,
    top:"5%",
    fill:"#fff",
    scrollTrigger:{
        trigger:"svg",
        scroller:"#main",
        markers:"true",
        start:"top -350%",
        end:"top -350%",
        scrub:true,
    }
})
gsap.to("#nav",{
    color:"#fff",
    background: "linear-gradient(#000000d5,#00000089,#00000000)",
    scrollTrigger:{
        trigger:"#nav h3",
        scroller:"#main",
        markers:"true",
        start:"top -400%",
        end:"top -400%",
        scrub:true,
    }
})