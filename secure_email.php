<?php
 $subject = $_POST['New Contact from Portfolio Website'];

 $message = $_POST['msg'];

 $headers = 'From:'. $email2 . "\r\n"; // Sender's Email

 // message lines should not exceed 70 characters (PHP rule), so wrap it
 $message = wordwrap($message, 70);

 // Send mail by PHP Mail Function
 mail("jacksrf@gmail.com", $subject, $message, $headers);
 echo "Your mail has been sent successfuly ! Thank you for your feedback";
?>
