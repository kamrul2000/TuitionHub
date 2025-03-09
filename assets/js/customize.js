//for nave
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

/*page loader*/
$(window).load(function() {
  $(".page-mask").fadeOut("slow");
});

// top to bottom section wise scroll and bottom to top scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
//for container animation on slide  
 AOS.init({
 easing: 'ease-out-back',
  duration: 1000
});
//for hide container animatiom disable
AOS.init({
 disable: 'mobile'
});

//for couter
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

//bootstrap tooltip
$('[data-toggle="tooltip"]').tooltip();

//show hide colaps
$(".colaps").on("click",".more a", function(){
     $(this).parents(".colaps").children("ul").toggle(500);
     if (this.text=="Show More"){this.text = "Show Less";}
       else {this.text = "Show More";}
     return false;
   });

//for accordion on tutor profile after login   
$(function(){
$('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".icofont-ui-add").removeClass("icofont-ui-add").addClass("icofont-ui-remove");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".icofont-ui-remove").removeClass("icofont-ui-remove").addClass("icofont-ui-add");
});
})

//marquee hover on pause
$(document).ready(function(){
$("marquee").hover(function(){ 
  this.stop();
}, function () {
    this.start();
});
});

//for select all check box
function toggle(source) {
 var checkboxes = document.querySelectorAll('input[type="checkbox"]');
 for (var i = 0; i < checkboxes.length; i++) {
 if (checkboxes[i] != source)
checkboxes[i].checked = source.checked;
 }
}

// gst popup
//$(".gst").slideDown(2000);
$('.gst').show(1000);
$(".gst").click(function(){
$(".gst").hide(1000);
});

$(".gst-close").click(function(){
$(".gst").hide();
});

//touch slide for next bp slider
$(".carousel").swipe({
  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');
  },
  allowPageScroll:"vertical"
});

//for sticky section like job and tutor page
function supportsSticky() {
    try {
        return (
            CSS.supports("position", "sticky") ||
            CSS.supports("position", "-webkit-sticky")
        );

    } catch(e) {
        return false;
    }
}

function stickyStick(container, target) {

    var cPos = container.getBoundingClientRect();
    var tPos = target.getBoundingClientRect();
    var atBottom = (cPos.bottom  <= tPos.height);
    var isSticky = (cPos.top < 1 && ! atBottom);

    if(isSticky) {
        sticky.classList.add('is-sticky');
    } else {
        sticky.classList.remove('is-sticky');
    }

    if(atBottom) {
        sticky.classList.add('is-sticky-bottom');
    } else {
        sticky.classList.remove('is-sticky-bottom');
    }
}

if(! supportsSticky()) {
   var sticky = document.querySelector('.i-sticky');
    var container = sticky.parentNode;
 window.addEventListener('scroll',function() {
        stickyStick(container, sticky);
    });
}
