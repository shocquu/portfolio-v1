<?php

$currentYear  = date("Y");
$footer = '<footer>
    <div class="wrapper">
      <div>
        <span>'.$currentYear.' &copy; Arkadiusz Liszka</span>
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
          <li><a href="#">
            <i class="fab fa-steam-symbol"></i>
           </a></li>
        </ul>
      </div>
    </div>
  </footer>
</body>
</html>';

echo $footer;

?>
