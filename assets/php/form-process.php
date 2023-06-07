<?php

require 'PHPMailer\src\PHPMailer.php';
require 'PHPMailer\src\SMTP.php';
require 'PHPMailer\src\Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone_number = $_POST["phone_number"];
    $message = $_POST["message"];

    // Validate form data (you can add more validation if needed)
    if (empty($name) || empty($email) || empty($phone_number) || empty($message)) {
        echo "Please fill in all fields.";
        exit;
    }

    // Create a new PHPMailer instance
    $mail = new PHPMailer();

    // Read SMTP configuration from env.ini
    $config = parse_ini_file('env.ini');

    // Set up SMTP configuration
    $mail->isSMTP();
    $mail->Host = $config['Host'];
    $mail->SMTPAuth = true;
    $mail->Port = $config['Port'];
    $mail->Username = $config['Username'];
    $mail->Password = $config['Password'];

    // Set up sender and recipient
    $mail->setFrom($email, $name);
    $mail->addAddress('enquiries@kaki.com.my');

    // Set email subject and body
    $mail->Subject = "New Message Received";
    $mail->Body = "Name: $name\nEmail: $email\nPhone Number: $phone_number\nMessage:\n$message";

    // Attempt to send the email
    if ($mail->send()) {
        echo "Your message has been sent. Thank you!";
    } else {
        echo "Something went wrong, please resend the again:(";
    }
}


?>
