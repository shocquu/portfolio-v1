<?php

if( $_POST['message-btn'] ) {
  $to = 'arkadiusz.liszka13@gmail.com';
  $from = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $headers = 'From: '.$from.'';

  if (mail( $to, $subject, $message, $headers ) ) {
    echo 'Message successfully sent';
  } else {
    echo 'Failed to send a message';
  }
}

?>
