//Sticky Header
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();

    if(winTop >= 323) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    }
  });
});

//Transitions
/*$('header a').on('click', function(event){
  event.preventDefault();

  const fade = 500;
  const href = $(this).attr('href');
  const page = href.replace('.php', '');
    window.history.pushState(null, null, href);

  $('header li').removeClass('active-page');
  $(this).not('.order-btn').parent().not('.wrapper').addClass('active-page');

  $.ajax({
    url: href,
    success: function(data) {
      //Apply CSS
      if( page=='work' || page=='index' ) {
        $('head link[href="css/main.css"]').next('link[href^="css/"]').remove();
        //$('head script[src="js/main.js"]').next('script[src^="js/"]').remove();
      } else {
        $('head link[href="css/main.css"]').next('link[href^="css/"]').remove();
        $('head link[href="css/main.css"]').after('<link rel="stylesheet" href="css/'+page+'.css">');
      }
      //Apply JS
      /////if( page=='order' || page=='admin' ) {
        $('head script[src="js/main.js"]').next('script[src^="js/"]').remove();
        $('head script[src="js/main.js"]').after('<script src="js/'+page+'.js">');
      } else {
        $('head script[src="js/main.js"]').next('script[src^="js/"]').remove();
      //////
      if( page=='order' ) {
        $.getScript('js/order.js');
      }

      //Content
      $('main').fadeOut(fade, function() {
        const newPage = $(data).filter('main').html();

        $('main').html(newPage);
          $('main').fadeIn(fade);
      });
      //Title
      $('#page-title').fadeOut(fade, function() {
        const newTitle = $(data).filter('#page-title').html();

        $('#page-title').html(newTitle);
          $('#page-title').fadeIn(fade);
      });

      filterItems();
    }
  });
});
*/

//Filter
function filterItems(){
  let li = $('.filter li');

  li.click(function(){
    let type = $(this).data('type');

    if( type == 'all' ) {
      $('article').removeClass('hidden');
      $('.alert-box').addClass('hidden');
    } else {
      $('article:not([data-img-type="'+type+'"])').addClass('hidden');
      $('article[data-img-type="'+type+'"]').removeClass('hidden');

      if ( $('article[data-img-type="'+type+'"]').length == 0 ) {
        $('.alert-box').removeClass('hidden');
      } else {
        $('.alert-box').addClass('hidden');
      }
    }

    li.removeClass('active');
    $(this).addClass('active');
  });
}
$(document).ready( filterItems() );

//Move triangles
$(document).on('mousemove', function(e){
  $('.foreground').css({
    top: e.pageY / 40,
    left: e.pageX / 40
  });
  $('.background').css({
    top: e.pageY / -80,
    left: e.pageX / -80
  });
});

//Zoom artwork
$(document).ready(function() {
  $('.artwork-gallery article').on('click', function() {
    $(this).children().filter('.img-overlay').css('top', '100%');
    $(this).children().filter('img').addClass('artwork-preview');
    $(this).children('.preview-header').removeClass('hidden');
  });

  $('body').on('click', '.preview-header span i', function() {
    //Close button
    if( $(this).attr('class') == "fas fa-times" ) {
      $('.img-overlay').css('top', '');
      $('.artwork-gallery img.artwork-preview').removeClass('artwork-preview');
      $('.preview-header').addClass('hidden');

      if( window.innerHeight == screen.height) {
        toggleFullScreen(document.documentElement);
      }
    //Fullscreen button
    } else if ( $(this).attr('class') == "fas fa-expand" || $(this).attr('class') == "fas fa-compress" ) {
      toggleFullScreen(document.documentElement);
    }

    function toggleFullScreen(elem) {

      if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
          if (elem.requestFullScreen) {
              elem.requestFullScreen();
          } else if (elem.mozRequestFullScreen) {
              elem.mozRequestFullScreen();
          } else if (elem.webkitRequestFullScreen) {
              elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
          } else if (elem.msRequestFullscreen) {
              elem.msRequestFullscreen();
          }
          $('.fa-expand').addClass('fa-compress').removeClass('fa-expand');
      } else {
          if (document.cancelFullScreen) {
              document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
          } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
          }
          $('.fa-compress').addClass('fa-expand').removeClass('fa-compress');
      }
    }

  });
});




//Mobile Menu
var bars = $('.fa-bars')[0].addEventListener('click', toggle);

function toggle() {
  $('.nav-bar')[0].classList.toggle('active');
}
