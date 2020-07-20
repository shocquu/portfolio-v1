var bars = $('.fa-bars')[0].addEventListener('click', toggle);

function toggle() {
  $('.nav-bar')[0].classList.toggle('active');
}

$('.artwork-gallery article').each(function(i){
  setTimeout(function(){
     $('.artwork-gallery article').eq(i).addClass('is-showing');
  }, 150 * (i+1));
});

$(window).scroll(function(){

var wScroll = $(this).scrollTop();

  if(wScroll > $('main').offset().top - ($(window).height() / 14)) {
    $('#logo').attr('src', 'images/logo-2.svg').addClass('logo-swap');
  } else {
    $('#logo').attr('src', 'images/logo.svg').removeClass('logo-swap');
  }
});

/*
for (var i = 1; i < 11; i++) {
  var art = document.createElement("article");
  var img = document.createElement("img");
  var tag = document.createElement("figcaption");
    tag.innerHTML = "Placeholder "+i;

  img.setAttribute('src', 'images/'+i+'.png');
    art.append(tag);
    art.append(img);

  $('.artwork-gallery').append(art);
}*/
/* SCROLL AFFECTED
$(window).scroll(function(){

var wScroll = $(this).scrollTop();

  if(wScroll > $('#artwork-grid').offset().top - ($(window).height() / 1.2)) {
    $('#artwork-grid article').each(function(i){
      setTimeout(function(){
         $('#artwork-grid article').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }
});*/
