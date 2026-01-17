<?php
/**
 * Logout Script
 * Municipality of Tuy, Batangas
 * 
 * Destroys the development session and redirects to the public site.
 */

// Start session
session_start();

// Unset all session variables
$_SESSION = array();

// Delete the session cookie
if (isset($_COOKIE[session_name()])) {
    setcookie(
        session_name(),
        '',
        [
            'expires' => time() - 3600,
            'path' => '/'
        ]
    );
}

// Delete the authentication cookie used by .htaccess
setcookie(
    'dev_session_authenticated',
    '',
    [
        'expires' => time() - 3600,
        'path' => '/',
        'secure' => true,
        'httponly' => false,
        'samesite' => 'Lax'
    ]
);

// Destroy the session
session_destroy();

// Optional: Log logout event
// Uncomment if you want to track logouts
// error_log('[DEV AUTH] User logged out from IP: ' . $_SERVER['REMOTE_ADDR'] . ' at ' . date('Y-m-d H:i:s'));

// Redirect to under construction page or home
header('Location: /under-construction.html');
exit();
?>
