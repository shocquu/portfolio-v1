<?php

if( $_POST['message-btn'] ) {
  //$to = 'arkadiusz.liszka13@gmail.com';
  $to = 'mario123.al@gmail.com';
  $from = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $headers = 'From: '.$from.'';

  if (mail( $to, $subject, $message, $headers ) ) {
    echo 'Message successfully sent';
  } else {
    echo 'Failed to send a message'
  }
}

/*
$to= "mario123.al@gmail.com";
$subject = "Sukces";
$messages= "Wiadomość została pomyślnie wysłana z serwera lokalnego.";

if( mail($to, $subject, $messages) ) {
  echo "Wiadomość wysłana!";
} else {
  echo "Niepowodzenie!";
}
*/

?>
