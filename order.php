<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Shocky's Portfolio | Contact</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/main.js" defer></script>
    <script src="js/order.js" defer></script>
    <link rel="icon" href="images/favicon.ico">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/order.css">
    <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
  </head>
  <body>
    <header>
      <div class="wrapper">
        <a href="index.php" id="logo">
          <svg data-name="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 259.81">
            <polygon class="stroke" points="255.6 259.81 150 76.97 66.67 221.31 201.95 221.31 224.17 259.81 0 259.81 150 0 300 259.81 255.6 259.81"/>
            <polygon class="shape" points="179.91 185.23 174.87 176.51 172.58 172.54 168 172.54 155.82 172.53 161.9 161.96 164.18 157.99 161.89 154.03 156.88 145.34 150 133.43 143.12 145.34 120.09 185.23 113.22 197.14 126.97 197.14 173.03 197.14 186.78 197.14 179.91 185.23"/>
          </svg>
        </a>
        <ul>
          <li><a href="work.php">My Work</a></li>
          <li><a href="contact.php">Contact</a></li>
          <a href="order.php" class="order-btn"><i class="fas fa-angle-double-right"></i> Order Now</a>
        </ul>
        <div class="nav-toggler">
          <a href="order.php" class="order-btn"><i class="fas fa-angle-double-right"></i> Order Now</a>
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </header>
    <ul class="nav-bar">
      <li><a href="work.php">My Work</a></li>
      <li><a href="contact.php">Contact</a></li>
    </ul>
    <div id="page-title">
      <img src="images/contact.svg">
    </div>
    <main>
      <div class="content">
        <form class="order-form" action="contact.php" method="post">
          <div class="content-left">
            <label for="name">Name:</label>
              <input type="text" id="name" name="name" required>
            <label for="email">E-mail:</label>
              <input type="email" id="email" name="email" required>
            <label for="type">What do you need?:</label>
              <select id="type" name="type">
                <option value="animation">Animation</option>
                <option value="artwork">Avatar</option>
                <option value="avatar">Banner</option>
                <option value="logo">Logo</option>
                <option value="mascot">Mascot</option>
              </select>
          </div>
          <div class="content-right">
            <label for="message">Brief message:</label>
              <textarea id="message" name="message" rows="8" cols="80" required></textarea>
          </div>
          <label>Reference images: (Optional)</label>
            <div class="ref-image-wrapper"></div>
            <div class="btn-wrapper">
              <label for="add-file" class="add-btn">ADD FILE</label>
              <span class="add-msg"></span>
              <input type="file" id="add-file" name="ref-files" accept="image/*" multiple>
            </div>
          <button name="message-btn" class="message-btn"><i class="fas fa-angle-double-right"></i>&nbsp;Make an order</button>
        </form>        
      </div>
    </main>
<?php include_once 'include/footer.php'; ?>