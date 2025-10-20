<?php
// Mostrar erros em caso de debug (remover em produção)
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// INCLUIR CLASSES PHPMailer:
require_once __DIR__ . '/PHPMailer.php';
require_once __DIR__ . '/SMTP.php';
require_once __DIR__ . '/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Receber dados em JSON
$data = json_decode(file_get_contents("php://input"), true);

$name    = $data['name'] ?? '';
$email   = $data['email'] ?? '';
$phone   = $data['phone'] ?? '';
$company = $data['company'] ?? '';
$service = $data['service'] ?? '';
$message = $data['message'] ?? '';

// Destinatário
$to = "administrativo@lliz.com.br";
$subject = "Novo contato do site";

// Corpo do e-mail em HTML
$body = "
<html>
  <body style='font-family: Arial, sans-serif; color:#333;'>
    <h2 style='color:#2e7d32;'>Novo contato recebido</h2>
    <p><b>Nome:</b> {$name}</p>
    <p><b>Email:</b> {$email}</p>
    <p><b>Telefone:</b> {$phone}</p>
    <p><b>Empresa:</b> {$company}</p>
    <p><b>Serviço:</b> {$service}</p>
    <p><b>Mensagem:</b><br/>" . nl2br($message) . "</p>
    <hr/>
    <small>Este e-mail foi enviado automaticamente pelo formulário do site.</small>
  </body>
</html>
";

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.lliz.com.br'; // AJUSTE PARA SEU PROVEDOR!
    $mail->SMTPAuth   = true;
    $mail->Username   = 'administrativo@lliz.com.br'; // SEU EMAIL DE ENVIO
    $mail->Password   = '@j1608@d1804';         // SENHA DO EMAIL
    $mail->SMTPSecure = 'tls';                    // 'ssl' ou 'tls' (veja as opções do seu servidor)
    $mail->Port       = 587;                      // 465 para SSL, 587 para TLS

    $mail->setFrom($mail->Username, $name);
    $mail->addAddress($to);
    $mail->addReplyTo($email);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $body;

    $mail->send();
    echo json_encode(["success" => true]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "error" => $mail->ErrorInfo]);
}
?>
