<?php
/**
 * Endpoint per hosting classico con PHP (caricamento via FTP): POST /api/leads
 * La chiave va messa in una variabile d'ambiente BREVO_API_KEY del server,
 * oppure in un file api/config.php NON pubblico che definisce BREVO_API_KEY.
 */
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Metodo non consentito']);
    exit;
}

$configFile = __DIR__ . '/config.php';
if (file_exists($configFile)) {
    require_once $configFile;
}

$apiKey = getenv('BREVO_API_KEY') ?: (defined('BREVO_API_KEY') ? BREVO_API_KEY : '');
$listId = (int) (getenv('BREVO_LIST_ID') ?: 51);

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    $input = [];
}

$fullName = trim($input['fullName'] ?? '');
$email    = trim($input['email'] ?? '');
$phone    = trim($input['phone'] ?? '');
$interest = trim($input['interest'] ?? '');
$message  = trim($input['message'] ?? '');

if ($email === '' || $fullName === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Nome ed email sono obbligatori']);
    exit;
}

if ($apiKey === '') {
    error_log('[Brevo API] BREVO_API_KEY non configurata: lead NON salvato. ' . $email);
    http_response_code(500);
    echo json_encode(['error' => 'Configurazione Brevo mancante sul server']);
    exit;
}

$parts     = preg_split('/\s+/', $fullName);
$firstName = $parts[0] ?? '';
$lastName  = trim(implode(' ', array_slice($parts, 1)));

$rawPhone = preg_replace('/[^\d+]/', '', $phone);
$formattedPhone = $rawPhone;
if ($formattedPhone !== '' && strpos($formattedPhone, '+') !== 0) {
    $formattedPhone = strpos($formattedPhone, '39') === 0
        ? '+' . $formattedPhone
        : '+39' . ltrim($formattedPhone, '0');
}

// Solo attributi realmente esistenti nell'account Brevo:
// quelli sconosciuti vengono accettati ma scartati in silenzio.
$attributes = [
    'FIRSTNAME'        => $firstName,
    'LASTNAME'         => $lastName,
    'SERVIZIO_CLIENTE' => $interest,
    'MESSAGE_FORM'     => $message,
    'SOURCE'           => 'Landing Page Zenith Fisiofit',
];
if ($formattedPhone !== '') {
    $attributes['SMS']      = $formattedPhone;
    $attributes['WHATSAPP'] = $formattedPhone;
    $attributes['TELEFONO'] = $formattedPhone;
}

$payload = [
    'email'         => strtolower($email),
    'attributes'    => $attributes,
    'listIds'       => [$listId],
    'updateEnabled' => true,
];

$ch = curl_init('https://api.brevo.com/v3/contacts');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 15,
    CURLOPT_HTTPHEADER     => [
        'api-key: ' . $apiKey,
        'Content-Type: application/json',
        'Accept: application/json',
    ],
    CURLOPT_POSTFIELDS     => json_encode($payload),
]);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr  = curl_error($ch);
curl_close($ch);

if ($response === false || $httpCode < 200 || $httpCode >= 300) {
    error_log('[Brevo API] Errore ' . $httpCode . ' ' . ($curlErr ?: $response));
    http_response_code(502);
    echo json_encode([
        'error'   => 'Brevo ha rifiutato il contatto',
        'status'  => $httpCode,
        'details' => $curlErr ?: $response,
    ]);
    exit;
}

echo json_encode(['success' => true, 'data' => json_decode($response, true)]);
