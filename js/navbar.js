//Insert navigation components into HTML
document.getElementById('navpage').innerHTML = '<a href="index.html"><img src="media/icons/logo.png" width="50px"></a><br><a href="login.html" class="fontsizeOne" target="_blank">學生午膳訂餐系統(SLOS)</a><br><a class="fontsizeOne" onclick="contactUs();">聯絡我們</a>';
document.getElementById('navbar').innerHTML = '<div id="navbutton" class="clickable"><img src="media/icons/menu.png" id="navbuttonOne"><img src="media/icons/close.png" id="navbuttonTwo"></div><a href="index.html" class="clickable">主頁</a><a href="login.html" class="clickable" target="_blank">學生午膳訂餐系統(SLOS)</a><a onclick="contactUs();">聯絡我們</a>';

//Ensure that the height of the navigation page for mobile viewport is always full
var navbarState = false;

function contactUs() {
    window.alert('電郵：info@strawberry.com\n電話：98764321');
}

window.addEventListener('scroll', function() {
    navpageResize();
});

window.addEventListener('resize', function() {
    navpageResize();
});

function navpageResize() {
    if(navbarState) {
        document.getElementById('navpage').style.height = String(window.innerHeight + 1) + "px";
    } else{
        document.getElementById('navpage').style.height = "1px";
    }
    document.getElementById('navpage').style.top = String(window.scrollY) + "px";
}

//show or hide the naviagtion page for mobile viewport after clicking the menu button
document.getElementById('navbutton').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    var navbuttonOne = document.getElementById('navbuttonOne');
    var navbuttonTwo = document.getElementById('navbuttonTwo');
    var navpage = document.getElementById('navpage');
    if(navbarState) {
        navbuttonOne.style.transform = "rotateX(0deg)";
        navbuttonOne.style.transition = "transform 150ms ease-in";
        navbuttonOne.style.transitionDelay = "150ms";

        navbuttonTwo.style.transform = "rotateX(90deg)";
        navbuttonTwo.style.transition = "transform 150ms ease-out";

        navpage.style.opacity = "0%";
        navpage.style.height = "1px";
        navpage.style.top = String(window.scrollY) + "px";

        document.body.style.overflowY = "auto";

        navbar.style.backgroundColor = 'rgba(255,255,255,0.5)';
        navbar.style.backdropFilter = "blur(12px)";

        navbarState = false;
    } else {
        navbuttonOne.style.transform = "rotateX(90deg)";
        navbuttonOne.style.transition = "transform 150ms ease-out";

        navbuttonTwo.style.transform = "rotateX(180deg)";
        navbuttonTwo.style.transition = "transform 150ms ease-in";
        navbuttonTwo.style.transitionDelay = "150ms";
        
        navpage.style.height = String(window.innerHeight + 1) + "px";
        navpage.style.top = String(window.scrollY) + "px";
        navpage.style.opacity = "100%";

        document.body.style.overflowY = 'hidden';

        navbar.style.backgroundColor = 'rgba(255,255,255,0)';
        navbar.style.backdropFilter = "none";

        navbarState = true;
    }
});
