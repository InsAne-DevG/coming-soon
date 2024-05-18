<?php 

require_once('Database.php');


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    try {
        $database = new Database();
        $conn = $database->getConnection();
        $database->saveContact($_POST['full_name'], $_POST['email'], $_POST['phone_number'], $_POST['message']);
        header("Location: /?success=true");
        exit();
    } catch (\Throwable $th) {
        header("Location: /?success=false");
        exit();
    }
     
} else {
    http_response_code(404);
    echo json_encode(array('status' => 'error', 'message' => 'Not Found'));
}

