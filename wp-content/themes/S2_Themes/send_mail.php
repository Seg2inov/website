<?php
// Vérifie si le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupération des données du formulaire
    $from = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    
    // Adresse de destination
    $to = "heloise@seg2inov.fr";
    
    // En-têtes de l'e-mail
    $headers = "From: heloise@seg2inov.fr\r\n";
    $headers .= "Reply-To: $from\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Envoi de l'e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
} else {
    echo "Méthode de requête non valide.";
}


include get_template_directory() . '/front-page.php';
?>


