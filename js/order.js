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
                    $(this).parent().remove();
                    countFiles();
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
