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



$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $(".header").addClass("active");
      $('.header .test-logoBig').find('img').attr('src','img/neapolitan-exp.png').attr('alt','neapolitan-exp');
      $('.header .test-hamburger').find('img').attr('src','img/hamburger-blue.webp').attr('alt','hamburger-blue');    
  } else {
     $(".header").removeClass("active");
     $('.header .test-logoBig').find('img').attr('src','img/new-exp-white.png').attr('alt','new-exp-white');
     $('.header .test-hamburger').find('img').attr('src','img/hamburger-white.png').attr('alt','hamburger-white');
  }
});

// Back To Top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active"); 
  }
})

// Icon search input
$(".searchbtn").on('click',function(){
  if(!$(this).data('clicked')) {
    $(this).addClass("add-input");
    $('.test-button-language').addClass('d-none');
    $('.navbar-nav').addClass('d-none');
    $(".input").focus().addClass("active-width").val('');
    $(".close-input").removeClass("d-none");
    $('.test-nav').css('justify-content', 'center')
    $(this).data('clicked', true);
  }else {
    $(this).addClass("add-input");
    $(".input").focus().addClass("active-width").val('');
    $('.test-button-language').addClass('d-none');
    $('.navbar-nav').addClass('d-none');
    $(".close-input").removeClass("d-none");
    $(this).data('clicked', false);
  }
});

// Icon cclose input
$(".close-input").on('click',function(){
  $(".searchbtn").removeClass("add-input");
  $('.test-button-language').removeClass('d-none');
  $('.navbar-nav').removeClass('d-none');
  $(".input").focus().removeClass("active-width").val('');
  $(".close-input").addClass("d-none");
});
