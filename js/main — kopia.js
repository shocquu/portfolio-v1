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
$('header a').on('click', function(event){
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
      //Apply CSS&JS
      $('main').fadeOut(fade, function() {
        if( page=='work' || page=='index' ) {
          $('head link[href="css/main.css"]').next('link[href^="css/"]').remove();
          //$('head script[src="js/main.js"]').next('script[src^="js/"]').remove();
        } else if( !($('head link[href="css/'+page+'.css"]').length || $('head script[src="js/'+page+'.js"]').length) ) {
            $('head link[href="css/main.css"]').next('link[href^="css/"]').remove();
            $('head link[href="css/main.css"]').after('<link rel="stylesheet" href="css/'+page+'.css">');
        }

      const newHead = $(data).filter('head').children().html();
        $('head').html(newHead);
          $('head').fadeIn(fade);
      });
      //Apply JS
      /*if( page=='order' || page=='admin' ) {
        $.getScript('js/'+page+'.js');
      }*/
      $.getScript('js/'+page+'.js', function(){
        $('#add-file').on('change', function() {
            imagesPreview(this, '.ref-image-wrapper');
        });
      });

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
      //Filter {
      if ( href == 'index.php' ) {
        const newFilter = $(data).filter('main').children('.filter').children().html();

        $('.filter').html('<ul>'+newFilter+'</ul>');
          $('.filter').children().hide();
          setTimeout(function() { $('.filter').children().fadeIn(fade) }, fade);
      } else {
        $('.filter').children().fadeOut(fade);
      }

      filterItems();
    }
  });
});


//Filter
function filterItems(){
  let li = $('.filter li');

  li.click(function(){
    let type = $(this).data('type');

    if(type=='all') {
      $('article').removeClass('hidden');
      $('.alert-box').addClass('hidden');
      $('.artwork-gallery').removeClass('hidden');
    } else {
      $('article:not([data-img-type="'+type+'"])').addClass('hidden');
      $('article[data-img-type="'+type+'"]').removeClass('hidden');

      if ( $('article[data-img-type="'+type+'"]').length == 0 ) {
        $('.alert-box').removeClass('hidden');
        $('.artwork-gallery').addClass('hidden');
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

//Mobile Menu
var bars = $('.fa-bars')[0].addEventListener('click', toggle);

function toggle() {
  $('.nav-bar')[0].classList.toggle('active');
}
