// Show/Hide Password
$('#password').on('keyup', function() {
  if ( $(this).val() ) {
    $('label[for="password"]').removeClass('fa-key');
    $('label[for="password"]').addClass('fa-eye');

    $('.fas').click(function() {
      $(this).addClass('fa-eye-slash');
      $(this).removeClass('fa-eye');

    });
  } else {
    $('label[for="password"]').addClass('fa-key');
    $('label[for="password"]').removeClass('fa-eye');
    console.log('zero');
  }
});

//Add inputs
$('#add-file').on('change', function(){
  $('.remove-msg').text('Remove all');

  var val = $('#add-file').val();

  if(val) {
    $('.display-grid').append('<article class="img-preview"></article><input type="text" name="artwork-name" placeholder="Artwork name"><select name="artwork-type"><option value="animation">Animation</option><option value="artwork">Avatar</option><option value="avatar">Banner</option><option value="logo">Logo</option><option value="mascot">Mascot</option></select><div class="close-field">X</div>');
  }
});
