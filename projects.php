<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Shocky's Portfolio WIP</title>
  <script src="js/main.js" defer></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link rel="icon" href="images/favicon.ico">
  <link rel="stylesheet" href="css/main.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:100,400&display=swap" rel="stylesheet">
</head>
<body>
<header>
  <a href="">
    <img id="logo" src="images/logo.svg" alt="Logo">
  </a>
  <nav>
    <ul class="nav-bar">
      <li><a href="#home">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#order-now">Order now</a></li>
    </ul>
    <div id="menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</header>
<div class="container">
  <aside>
    <div class="page-progress-bar">
      <div class="progress"></div>
    </div>
  </aside>
  <main>
    <div id="projects">
      <div class="box">
        <a href="javascript:history.back()" class="link">Back</a>
        <h1>Projects</h1>
      </div>
      <div class="artwork-gallery">
        <?php include_once 'include/loadImages.php'; displayAll($db); ?>
      </div>
    </div>
  </main>
</div>
</body>
</html>
