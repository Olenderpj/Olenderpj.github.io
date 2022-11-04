const heroTitle = document.querySelector('.hero-title');
const heroTitleOverlay = document.querySelector('.hero-title[data-overlay]');

heroTitleOverlay.innerText = heroTitle.textContent;


// The following code was created by  Tiffany Rayside, and
// can be found here: https://codepen.io/tmrDevelops/pen/vOPZBv

var c = document.getElementById('canv');
var $ = c.getContext('2d');


var col = function(x, y, r, g, b) {
    $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    $.fillRect(x, y, 1,1);
}
var R = function(x, y, t) {
    return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
    return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

var B = function(x, y, t) {
    return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}



var t = 0;
var x;
var y;

var run = function() {
    for(x=0;x<=35;x++) {
        for(y=0;y<=35;y++) {
            //console.log(G(x, y, t))
            col(x, y, R(x,y,t), G(x,y,t) - 60, B(x,y,t));
        }
    }
    t = t + 0.02;
    window.requestAnimationFrame(run);
}

run();





