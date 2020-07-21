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
    <span>SCROLL</span>
  </aside>
  <main>
    <div id="home">
      <img src="images/banner.svg" alt="Shocky Design">
    </div>
    <div id="projects">
      <h1>Projects</h1>
      <div class="carousel-progress-bar">
        <div class="progress"></div>
      </div>
      <div class="wrapper">
        <div class="display">
          <div class="img-slider"><?php include_once 'include/loadImages.php'; displayRandom($db); ?></div>
        </div>
        <div class="next-slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="15.079" height="76.06" viewBox="0 0 15.079 76.06">
            <path d="M13.076,37.7,0,0,13.076,37.7,0,75.4Z" transform="translate(0.945 0.328)" fill="none" stroke="#f9f9f9" stroke-width="2"/>
          </svg>
        </div>
      </div>
      <a href="./projects.php" class="link">
        <div class="link-wrapper"><span>See more</span><span>See more</span></div>
      </a>
    </div>
    <div id="contact">
      <h1>Contact me</h1>
      <div class="box">
        <svg xmlns="http://www.w3.org/2000/svg" width="464" height="394" viewBox="0 0 464 394">
          <g transform="translate(-517 -335)">
            <text id="BE" transform="translate(401 427)" fill="#0e0e0e" font-size="170" font-family="Montserrat-Regular, Montserrat" font-weight="600" letter-spacing="0.039em"><tspan x="20.78" y="165">BE</tspan></text>
            <text id="TOUCH" transform="translate(439 613)" fill="#0e0e0e" font-size="95" font-family="Montserrat-Regular, Montserrat" font-weight="400" letter-spacing="0.038em"><tspan x="0" y="92">TOUCH</tspan></text>
            <text id="IN" transform="translate(675 665) rotate(-90)" fill="#3ac7bb" font-size="126" font-family="Montserrat-Regular, Montserrat" font-weight="400" letter-spacing="0.1em"><tspan x="56.218" y="122">IN</tspan></text>
            <text id="LET_S" data-name="LET&apos;S" transform="translate(427 335)" fill="#3ac7bb" font-size="95" font-family="Montserrat-Thin, Montserrat" font-weight="200" letter-spacing="0.34em"><tspan x="0" y="92">LET&apos;S</tspan></text>
          </g>
        </svg>
        <form class="contact-form" action="#" method="post">
          <label for="name">Your name:</label>
          <label for="email">Your e-mail:</label>
          <input type="text" name="name" id="name">
          <input type="email" name="email" id="email">
          <label for="subject">Subject:</label>
          <input type="text" name="subject" id="subject">
          <label for="message">What's the matter?:</label>
          <textarea name="message" id="message"></textarea>
          <button name="button">Send a message</button>
        </form>
      </div>
    </div>
    <div id="pricing">
      <h1>Pricing</h1>
      <div class="box">
        <p class="price-display">20€</p>
        <div class="service-price-list">
          <div data-type="animation"><span>Animation</span><span>Animation</span></div>
          <div data-type="avatar"><span>Avatar</span><span>Avatar</span></div>
          <div data-type="banner"><span>Banner</span><span>Banner</span></div>
          <div data-type="logo"><span>Logo</span><span>Logo</span></div>
          <div data-type="mascot"><span>Mascot</span><span>Mascot</span></div>
        </div>
      </div>
    </div>
    <div id="order-now">
      <h1>Order now</h1>
      <div class="carousel">
        <div class="wrapper">
          <div data-type="animation">-Animation-</div>
          <div data-type="avatar">-Avatar-</div>
          <div data-type="banner">-Banner-</div>
          <div data-type="logo">-Logo-</div>
          <div data-type="mascot">-Mascot-</div>
        </div>
      </div>
      <div class="grid-box">
        <div>
          <span>AVATAR</span>
        </div>
        <form class="order-form" action="#" method="post">
          <label for="name">Name:</label>
          <input type="text" name="name" id="name">
          <label for="email">E-mail:</label>
          <input type="email" name="email" id="email">
          <label for="message">Brief message:</label>
          <textarea name="message" id="message"></textarea>
          <input type="hidden" name="artwork-type" value="">
          <button name="button">Make an order</button>
        </form>
        <div></div>
      </div>
    </div>
  </main>
</div>
</body>
</html>
