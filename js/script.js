// Header   
function displayMenu(event) {
    if (document.getElementById("navbar-list").classList.contains("show")) {
        document.getElementById("navbar-list").classList.remove("show")
        document.getElementById("navbar-list").classList.remove("test-nav-mobile")
        document.getElementById("header").classList.remove("test-bg-mobile")
        
        document.getElementById("test-close").classList.add("test-xs-hidden");
        document.getElementById("test-hamburger").classList.remove("test-xs-hidden");
    }
    else {
        document.getElementById("navbar-list").classList.add("show")
        document.getElementById("navbar-list").classList.add("test-nav-mobile")
        document.getElementById("header").classList.add("test-bg-mobile")
        
        document.getElementById("test-close").classList.remove("test-xs-hidden");
        document.getElementById("test-hamburger").classList.add("test-xs-hidden");
        
    }
}

// TABS Home
var myTabs = document.querySelectorAll(".test-tabs > .nav-tabs > a");

function myTabClicks(tabClickEvent) {

    for (var i = 0; i < myTabs.length; i++) {
        myTabs[i].classList.remove("active");
    }

    var clickedTab = tabClickEvent.currentTarget; 

    clickedTab.classList.add("active");

    tabClickEvent.preventDefault();

    var myContentPanes = document.querySelectorAll(".tab-pane");

    for (i = 0; i < myContentPanes.length; i++) {
        myContentPanes[i].classList.remove("active");
    }

    var anchorReference = tabClickEvent.target;
    var activePaneId = anchorReference.getAttribute("href");
    var activePane = document.querySelector(activePaneId);

    activePane.classList.add("active");

}

for (i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener("click", myTabClicks)
}

/// Accordion Discover
var discoverAccordion = document.getElementsByClassName("discover-accordion");
var i;

for (i = 0; i < discoverAccordion.length; i++) {
  discoverAccordion[i].addEventListener("click", function() {
    this.classList.toggle("active");

    if(this.classList.contains("active")){
      this.innerHTML = "<img class=\"btn_chevron\" src=\"img/chevron-up.png\" alt=\"chevron-up\"><span>Mostra meno</span>";
    }else{
      this.innerHTML = "<img class=\"btn_chevron\" src=\"img/chevron-down.png\" alt=\"chevron-down\"><span>Scopri e acquista</span>";
    }

    var content = this.nextElementSibling;

    while(content) {
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
      content = content.nextElementSibling;
    }
    
  });
} 

// FAQ Accordion
let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let img = document.getElementsByClassName("myImage");

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            img[i].src = 'img/ic_mins.png';
        }
        else{
            contentDiv[i].style.height = "0px";
            img[i].src = 'img/ic_plus.png';
        }
    });
}

// Swiper Tab Mobile
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlidesBounds: true,
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },
});