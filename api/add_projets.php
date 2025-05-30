<?php
header('Content-Type: application/json');
require_once 'db_config.php';

$uploadDir = '../uploads/';
$response = ['success' => false, 'message' => ''];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $titre = $_POST['titre'] ?? '';
    $description = $_POST['description'] ?? '';
    $image = $_FILES['image'] ?? null;

    if ($titre && $description && $image) {
        $fileName = uniqid() . '_' . basename($image['name']);
        $targetPath = $uploadDir . $fileName;

        if (move_uploaded_file($image['tmp_name'], $targetPath)) {
            $stmt = $conn->prepare("INSERT INTO projets (titre, description, image) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $titre, $description, $fileName);

            if ($stmt->execute()) {
                $response = ['success' => true, 'message' => 'Projet ajouté avec succès'];
            } else {
                $response['message'] = 'Erreur lors de l\'insertion en base de données';
            }
        } else {
            $response['message'] = 'Erreur lors du téléchargement de l\'image';
        }
    } else {
        $response['message'] = 'Tous les champs sont requis';
    }
} else {
    $response['message'] = 'Méthode non autorisée';
}

echo json_encode($response);
?>