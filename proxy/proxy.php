<?php
if (isset($_GET['url'])) {
    $url = $_GET['url'];

    // Validate the URL
    if (!filter_var($url, FILTER_VALIDATE_URL)) {
        http_response_code(400);
        echo "Invalid URL";
        exit;
    }

    // Fetch the content from the target URL
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HEADER, false);

    // Forward headers
    foreach (getallheaders() as $key => $value) {
        curl_setopt($ch, CURLOPT_HTTPHEADER, ["$key: $value"]);
    }

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $content_type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

    curl_close($ch);

    // Send the response back to the client
    http_response_code($http_code);
    header("Content-Type: $content_type");
    echo $response;
} else {
    echo "No URL provided. Use ?url=<your-target-url>";
}
?>
