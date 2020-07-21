//Scroll on click
$('.nav-bar li').on('click', function(event){
  event.preventDefault();
  const href = $('a', this).attr('href');

  $('html, body').animate({ scrollTop: $(href).offset().top - 100 }, 'slow', 'swing');
});

//Shake Logo
$('#logo').on('mouseover', function() {
  $(this).addClass('shake');

  setTimeout(function () {
    $('#logo').removeClass('shake');
  }, 1000);
});

//Scroll progress
function scrollPosition() {
  if( $(window).scrollTop() != $('#home').offset().top ) {
    let scroll = $(window).scrollTop();
    let docHeight = $(document).height();
    let winHeight = $(window).height();
    let percentValue = scroll / (docHeight - winHeight) * 100 + '%';

    $('aside span').hide();
    $('.page-progress-bar .progress').css({
      'height': percentValue,
      'animation-iteration-count': '1'
    });
    $('.page-progress-bar .progress').on('webkitAnimationEnd oAnimationEnd msAnimationEnd animationend', function() {
      $('.page-progress-bar .progress').css({
        'animation': 'unset'
        //'height': '0%'
      });
    });
  } else {
    $('aside span').show();
    $('.page-progress-bar .progress').css('animation', 'scroll infinite 3s');
  }
}

//Document Ready
$(document).ready(function(){
  //Hamburger menu
	$('#menu').click(function(){
		$(this).toggleClass('toggle');
    $('.nav-bar').toggleClass('visible');

    $('.nav-bar li').each(function(i) {
      setTimeout( () => {
        $(this).toggleClass('fadeIn')
      }, 100 * i );
    });
	});

  //Scroll progress
  scrollPosition();
  $(window).on('scroll', scrollPosition());
  $(window).bind('mousewheel', function(e) {

    $('main>div[id]').each(function() {
      //var position = $(this).position().top - $(window).scrollTop();
      var position = $(this).position().top;


      if( position >=  $(window).scrollTop() && e.originalEvent.wheelDelta / 120 <= 0 ) {
        //$(this).css('background', 'red');
        //$('html, body').animate({ scrollTop: $(this).offset().top - 100 }, 'slow', 'swing');
      } else {
        //$('html, body').animate({ scrollTop: $(this).prev().offset().top - 100 }, 'slow', 'swing');
      }
    });



    if(e.originalEvent.wheelDelta /120 > 0) {
      //alert('up');
      //$('html, body').animate({ scrollTop: $('main').closest('div').offset().top - 100 }, 'slow', 'swing');
    }
    else{
      //alert('down');
    }
  });

  //Order now list
  let posX = 0;
  let elemX =  $('#order-now .wrapper').position().left / 100;
  let check = true;
  update();

  $(window).mousemove(function(e) {
    posX = e.pageX / -5;
  });

  $('#order-now .wrapper div').one('click', function() {
    let selected = $(this).data('type');
    $('.grid-box span').html(selected);
    check = false;
    $(this).parent().parent().css('transform', 'translate(400%, 250%)');
    $('.order-form input[type="hidden"]').val(selected);

    setTimeout(function() {
      $('.order-form').css('width', '100%');
        $('.grid-box span').css({
          'transform': 'rotate(-90deg) translate(34px, 500%)',
          'opacity': '1'
        });
    }, 500);
  });

  function update() {
    if(check==false) {
      return false;
    }

    elemX += ( (posX - elemX) + 120 ) * 0.1;
    $('#order-now .wrapper').css('transform', 'translate3d('+elemX+'%, 0, 0)');
    requestAnimationFrame(update);
  }
});

//Image carousel
var isClicked;

$('.next-slide').on('click', () => {
  if(isClicked) {
    return;
  }

  var last = $('.img-slider>article').slice(-3);
  var progress = $('.carousel-progress-bar .progress').width() / $('.carousel-progress-bar').width() * 100;
    isClicked = true;

  $('.img-slider').css('transform', 'translate3d(0%, 0, 0)');
  $('.img-slider').css('transition', 'transform ease-in-out 1s');

  if(progress == 0) {
    $('.carousel-progress-bar .progress').css({'width': '100%', 'float': 'left'});
  } else {
    $('.carousel-progress-bar .progress').css({'width': '0%', 'float': 'right'});
  }

  setTimeout( () => {
    $('.img-slider').prepend( last.clone() );
    $('.img-slider').css('transition', 'unset');
    $('.img-slider').css('transform', 'translate3d(-100%, 0, 0)');

    last.remove();
    isClicked = false;
  }, 1000 );
});

//Price list
$('.service-price-list>div').on('click', function() {
  let type = $(this).data('type');
  $('.service-price-list>div').not(this).removeClass('active');
  $(this).addClass('active');

  switch (type) {
    case 'animation':
      $('.price-display').text('10€');
      break;
    case 'avatar':
      $('.price-display').text('11€');
      break;
    case 'banner':
      $('.price-display').text('12€');
      break;
    case 'logo':
      $('.price-display').text('13€');
      break;
    case 'mascot':
      $('.price-display').text('14€');
      break;
    default:
      $('.price-display').text('Error');
      break;
  }
});

//Order
$('#order-now li').on('click', () => {
  $('#order-now li').addClass('test');
  $('#order-now li').css({'width':'0', 'padding':'1em 0'});
});


//Artwork filter
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

//Price filter
$('.content-pricing ul li').on('click', function() {
  $('.content-pricing ul li').removeClass('active');
  $(this).addClass('active');
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

//Preview images
$(function() {
    var imagesPreview = function(input, ImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
              var reader = new FileReader();

              reader.onload = function(event) {
                  let selectedItems = $('.ref-image-wrapper').children().length;
                  $($.parseHTML('<article class="ref-image"><span class="close-btn">X</span><img src="'+event.target.result+'"></article>')).appendTo(ImagePreview);
                  countFiles();

                  $('.close-btn').click(function(){
                    $(this).parent().fadeOut(300, function(){
                        $(this).remove();
                        countFiles();
                    });
                  });
              }

              reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#add-file').on('change', function() {
        imagesPreview(this, '.ref-image-wrapper');
    });

    function countFiles() {
        let selectedItems = $('.ref-image-wrapper').children().length;

        if(selectedItems==1) {
            $('.add-msg').text(selectedItems+' file selected');
        } else if(selectedItems==0) {
            $('.add-msg').text("");
        } else {
            $('.add-msg').text(selectedItems+' files selected');
        }
    }
});
