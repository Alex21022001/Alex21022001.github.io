<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$json = file_get_contents('php://input');
$data = json_decode($json, true);

$name = $data['name'];
$phone = $data['phone'];
$email = $data['email'];
$to = "ktpd343@gmail.com";

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'ukrainian.ttt@gmail.com';                     // SMTP username
    $mail->Password   = '*';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('ukrainian.ttt@gmail.com', 'UTTT');
    $mail->addAddress($to);     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New contact wants to get in touch with you';
    $mail->Body    = "Name: $name <br> Phone: $phone <br> Email: $email";

    $mail->send();
    echo json_encode(array("success" => true));
} catch (Exception $e) {
    echo json_encode(array("success" => false));
}
?>
