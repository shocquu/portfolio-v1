<?php include_once 'db.php';



//Display all
function displayAll($db) {

$stmt = $db->query('SELECT * FROM `artworks`');
  while( $artwork = $stmt->fetch() ){
    echo '<article data-img-type="'.strtolower($artwork['type']).'">
            <div class="img-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" width="60.243" height="60.243" viewBox="0 0 60.243 60.243">
              <line y2="60.243" transform="translate(30.403)" fill="none" stroke="#f9f9f9" stroke-width="1"></line>
              <line x2="60.243" transform="translate(0 30.403)" fill="none" stroke="#f9f9f9" stroke-width="1"></line>
            </svg>
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
                <span>
                  <i class="fas fa-expand"></i>
                  <i class="fas fa-times"></i>
                </span>
              </div>
            </div>
            <img src="uploads/'.$artwork['src'] .'" alt="'.$artwork['name'].'">
         </article>';
  };
}

//Display random
function displayRandom($db) {
  $total = $db->query('SELECT COUNT(*) as `total` FROM `artworks`')->fetchColumn();
  $numbers = range(1, $total);
    shuffle($numbers);

  for ($i=0; $i<6 ; $i++) {
    $random = $db->query('SELECT * FROM `artworks` WHERE `id`='.$numbers[$i].'');

    while( $artwork = $random->fetch() ){
      echo '<article>
             <div class="thumbnail">
               <img src="uploads/'.$artwork['src'] .'" alt="'.$artwork['name'].'">
             </div>
             <figcaption>
               <div>'.$artwork['name'].'</div>
               <div>'.$artwork['type'].'</div>
             </figcaption>
           </article>';
    }
  }
}
?>
