const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

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