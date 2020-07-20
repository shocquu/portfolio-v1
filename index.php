<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Shocky's Portfolio</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/script.js" defer></script>
    <script src="js/particles.js" defer></script>
    <script src="js/app.js" defer></script>
    <link rel="icon" href="images/favicon.ico">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js"></script>
  </head>
  <body>
    <nav>
      <div class="wrapper">
        <a href="index.php" id="logo2"><img id="logo" src="images/logo.svg" alt="logo"></a>
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Pricing</a></li>
          <a href="#" class="btn"><i class="fas fa-angle-double-right"></i> Order Now</a>
        </ul>
        <div class="nav-toggler">
          <a href="#" class="btn"><i class="fas fa-angle-double-right"></i> Order Now</a>
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </nav>
    <ul class="nav-bar">
      <li><a href="#">Contact</a></li>
      <li><a href="#">Pricing</a></li>
    </ul>
    <header id="particles-js"></header>
    <main>
      <div class="filter">
        <div class="wrapper">
        <ul>
          <li class="active">All</li>
          <li>Animations</li>
          <li>Avatars</li>
          <li>Logos</li>
          <li>Mascots</li>
          <li>Artworks</li>
        </ul>
        </div>
      </div>
      <div class="artwork-gallery">
        <?php include 'php/loadImages.php'; ?>
      </div>
    </main>
    <footer>
      <span>2018 &copy; All rights reserved. Arkadiusz "Shocky" Liszka.</span>
      <div class="wrapper">
        <i class="fas fa-envelope"> </i>
        <span>arkadiusz.liszka13@gmail.com</span>
        <ul>
          <li><a href="#">
            <i class="fab fa-facebook-f"></i>
           </a></li>
          <li><a href="#">
            <i class="fab fa-twitter"></i>
           </a></li>
          <li><a href="#">
            <i class="fab fa-behance"></i>
           </a></li>
          <li><a href="#">
            <i class="fab fa-dribbble"></i>
           </a></li>
          <li><a href="https://steamcommunity.com/id/shoqu/">
            <i class="fab fa-steam-symbol"></i>
           </a></li>
        </ul>
      </div>
    </footer>
  </body>
</html>
