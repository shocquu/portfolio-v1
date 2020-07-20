<?php

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
                    <figcaption>'.$imgName.'</figcaption>
                    <img src="'.$image .'" alt="'.$image.'">
                  </article>';
            } else {
                continue;
            }
          }

?>
