<?php
class Database {
    private $host = "localhost";
    private $username = "powerhouse";
    private $password = '1oK2$s5nTP4o';
    private $database = "insanedev.in";
    private $conn;

    // Constructor
    public function __construct() {
        try {
            $this->conn = new PDO("mysql:host=$this->host;dbname=$this->database", $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            return false;
        }
    }

    // Method to get the database connection
    public function getConnection() {
        return $this->conn;
    }

    // Method to save contact
    public function saveContact($name, $email, $contact_number, $message) {
        try {
            $stmt = $this->conn->prepare("INSERT INTO contacts (name, email, contact_number, message) VALUES (:name, :email ,:contact_number, :message)");
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':contact_number', $contact_number);
            $stmt->bindParam(':message', $message);

            $stmt->execute();
            return true;
        } catch(PDOException $e) {
            return false; 
        }
    }
}

?>
