<?php
header('Content-Type: application/json');
require_once 'db_config.php';

$query = "SELECT * FROM projets ORDER BY id DESC";
$result = $conn->query($query);

$projets = [];
while ($row = $result->fetch_assoc()) {
    $projets[] = $row;
}

echo json_encode($projets);
?>