<?php
// Include database connection
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

 
    if (empty($username) || empty($password)) {
        echo 'Please fill in both fields.';
        exit();
    }

     
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
    $stmt->execute(['username' => $username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
     
        session_start();
        $_SESSION['username'] = $user['username'];
        header('Location: dashboard.html');  
        exit();
    } else {
        
        echo 'Invalid username or password';
    }
}
?>
