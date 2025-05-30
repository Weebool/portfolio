<?php
header('Content-Type: application/json');
require_once 'db_config.php';

$response = ['success' => false, 'message' => ''];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? 0;

    if ($id) {
        // Récupérer le nom de l'image avant suppression
        $query = "SELECT image FROM projets WHERE id = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $projet = $result->fetch_assoc();

        // Supprimer le projet
        $stmt = $conn->prepare("DELETE FROM projets WHERE id = ?");
        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            // Supprimer l'image associée
            if ($projet && file_exists('../uploads/' . $projet['image'])) {
                unlink('../uploads/' . $projet['image']);
            }
            $response = ['success' => true, 'message' => 'Projet supprimé avec succès'];
        } else {
            $response['message'] = 'Erreur lors de la suppression';
        }
    } else {
        $response['message'] = 'ID du projet requis';
    }
} else {
    $response['message'] = 'Méthode non autorisée';
}

echo json_encode($response);
?>