<?php
$host = 'localhost';    // Change if necessary
$dbname = 'bloomy_flowers';
$user = 'root';         // Default XAMPP MySQL user
$pass = '';             // Default XAMPP password (leave empty)

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
