<?php
// Mostrar erros em caso de debug (remover em produção)
error_reporting(E_ALL);
ini_set('display_errors', 1);

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
$subject = "📩 Novo contato do site";

// Cabeçalhos do e-mail
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

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

// Envio
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Erro ao enviar email"]);
}
