<?php
// Include the database connection
require 'db.php';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm-password'];

    // Address Information
    $streetAddress = $_POST['street-address'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $zip = $_POST['zip'];
    $country = $_POST['country'];

    // Delivery Address
    $deliveryAddress = isset($_POST['delivery-address']) ? $_POST['delivery-address'] : null;

    // Payment Information
    $cardNumber = $_POST['card-number'];
    $expirationDate = $_POST['expiration-date'];
    $cvv = $_POST['cvv'];
    $billingAddress = isset($_POST['billing-address']) ? $_POST['billing-address'] : null;

    // Validation
    if ($password !== $confirmPassword) {
        echo 'Passwords do not match!';
        exit();
    }

    // Hash the password before storing it
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    try {
        // Prepare an SQL query to insert the new user into the database
        $stmt = $pdo->prepare("
            INSERT INTO user_accounts
            (first_name, last_name, email, phone, username, password, street_address, city, state, zip, country, delivery_address, card_number, expiration_date, cvv, billing_address) 
            VALUES 
            (:first_name, :last_name, :email, :phone, :username, :password, :street_address, :city, :state, :zip, :country, :delivery_address, :card_number, :expiration_date, :cvv, :billing_address)
        ");

        // Bind parameters to the SQL query
        $stmt->execute([
            'first_name' => $firstName,
            'last_name' => $lastName,
            'email' => $email,
            'phone' => $phone,
            'username' => $username,
            'password' => $hashedPassword,
            'street_address' => $streetAddress,
            'city' => $city,
            'state' => $state,
            'zip' => $zip,
            'country' => $country,
            'delivery_address' => $deliveryAddress,
            'card_number' => $cardNumber,
            'expiration_date' => $expirationDate,
            'cvv' => $cvv,
            'billing_address' => $billingAddress
        ]);

        echo 'Registration successful!';

        // Redirect to the login page
        header('Location: login.html');
        exit();
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>
