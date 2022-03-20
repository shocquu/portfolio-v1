<?php

$stmt = $db->query('SELECT * FROM `artworks`');
  while( $artwork = $stmt->fetch() ){
    echo '<article data-img-type="'.strtolower($artwork['type']).'">
            <div class="img-overlay">
              <i class="fas fa-search-plus"></i>
              <figcaption>
                <div>'.$artwork['name'].'</div>
                <div>'.$artwork['type'].'</div>
              </figcaption>
            </div>
            <div class="preview-header hidden">
              <div class="wrapper">
                <figcaption>
                  <div>'.$artwork['name'].'</div>
                  <div>'.$artwork['type'].'</div>
                </figcaption>
                <span><i class="fas fa-expand"></i><i class="fas fa-times"></i></span>
              </div>
            </div>
            <img src="uploads/'.$artwork['src'] .'" alt="'.$artwork['name'].'">
         </article>';
  };

/*
$files = glob("uploads/*.*");
     for ($i=0; $i<count($files); $i++)
      {
        $image = $files[$i];
        $supported_file = array(
                'gif',
                'jpg',
                'jpeg',
                'png',
                'svg'
         );

         $ext = strtolower(pathinfo($image, PATHINFO_EXTENSION));

         if (in_array($ext, $supported_file)) {
            $imgName = preg_replace('/\\.[^.\\s]{3,4}$/', '', basename($image));
             echo '<article>
                    <div class="img-overlay">
                      <i class="fas fa-search-plus"></i>
                      <figcaption>
                        <div>'.$imgName.'</div>
                        <div>Avatar</div>
                      </figcaption>
                    </div>
                    <img src="'.$image .'" alt="'.$image.'">
                  </article>';
            } else {
                continue;
            }
          }
*/

?>
