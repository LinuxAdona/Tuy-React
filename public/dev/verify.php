<?php
/**
 * Password Verification Script
 * Municipality of Tuy, Batangas
 * 
 * Verifies the submitted password and creates a session if correct.
 * 
 * IMPORTANT: Before deploying, you must:
 * 1. Choose a strong password
 * 2. Generate its bcrypt hash using: password_hash('YOUR_PASSWORD', PASSWORD_BCRYPT)
 * 3. Replace the hash below with your generated hash
 */

// Start session with secure settings
session_start([
    'cookie_lifetime' => 86400,     // 24 hours
    'cookie_httponly' => true,       // Not accessible via JavaScript
    'cookie_secure' => true,         // Only sent over HTTPS (set to false for local testing without SSL)
    'cookie_samesite' => 'Lax',     // CSRF protection
]);

// ============================================
// PASSWORD CONFIGURATION
// ============================================
// 
// STEP 1: Generate your password hash
// Run this command in PHP:
//   php -r "echo password_hash('YOUR_PASSWORD_HERE', PASSWORD_BCRYPT);"
//
// STEP 2: Replace the hash below with your generated hash
// 
// Example hash (for password "TuyMunicipality2026!"):
// $2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi
//
// ⚠️ IMPORTANT: Change this before deploying! ⚠️

$CORRECT_PASSWORD_HASH = '$2y$12$gqkZpuUY5zMsWMO9k.0vfuPGSfk21lkRU5FLK9tzqrxiTVv2QrtCu';

// For testing purposes, you can also set a plain text password here (NOT RECOMMENDED FOR PRODUCTION)
// Uncomment the line below and set your password if you want to test without generating a hash first
// $TESTING_PLAIN_PASSWORD = 'your_test_password_here';

// ============================================
// SECURITY SETTINGS
// ============================================

// Maximum failed login attempts before temporary lockout
$MAX_FAILED_ATTEMPTS = 5;
$LOCKOUT_DURATION = 900; // 15 minutes in seconds

// ============================================
// RATE LIMITING / BRUTE FORCE PROTECTION
// ============================================

// Initialize failed attempts tracking in session
if (!isset($_SESSION['failed_attempts'])) {
    $_SESSION['failed_attempts'] = 0;
    $_SESSION['lockout_until'] = 0;
}

// Check if currently locked out
if (time() < $_SESSION['lockout_until']) {
    $remaining_time = $_SESSION['lockout_until'] - time();
    $minutes = ceil($remaining_time / 60);
    
    // Redirect back to login with lockout error
    header('Location: /dev/login.php?error=lockout&minutes=' . $minutes);
    exit();
}

// Reset lockout if duration has passed
if (time() >= $_SESSION['lockout_until']) {
    $_SESSION['failed_attempts'] = 0;
    $_SESSION['lockout_until'] = 0;
}

// ============================================
// PROCESS LOGIN ATTEMPT
// ============================================

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Not a POST request, redirect back to login
    header('Location: /dev/login.php');
    exit();
}

// Get submitted password
$submitted_password = isset($_POST['password']) ? trim($_POST['password']) : '';

// Get redirect URL (where to go after successful login)
$redirect_url = isset($_POST['redirect']) ? $_POST['redirect'] : '/dev/';

// Validate password is not empty
if (empty($submitted_password)) {
    header('Location: /dev/login.php?error=empty&redirect=' . urlencode($redirect_url));
    exit();
}

// ============================================
// VERIFY PASSWORD
// ============================================

$password_is_correct = false;

// Method 1: Check against bcrypt hash (PRODUCTION METHOD)
if (password_verify($submitted_password, $CORRECT_PASSWORD_HASH)) {
    $password_is_correct = true;
}

// Method 2: Check against plain text (TESTING ONLY - remove in production)
if (isset($TESTING_PLAIN_PASSWORD) && $submitted_password === $TESTING_PLAIN_PASSWORD) {
    $password_is_correct = true;
}

// ============================================
// HANDLE RESULT
// ============================================

if ($password_is_correct) {
    // ✅ PASSWORD CORRECT - Grant access
    
    // Reset failed attempts
    $_SESSION['failed_attempts'] = 0;
    $_SESSION['lockout_until'] = 0;
    
    // Set authentication flag
    $_SESSION['dev_authenticated'] = true;
    $_SESSION['dev_login_time'] = time();
    $_SESSION['dev_login_ip'] = $_SERVER['REMOTE_ADDR'];
    
    // Set cookie for .htaccess to check
    setcookie(
        'dev_session_authenticated',
        'true',
        [
            'expires' => time() + 86400,  // 24 hours
            'path' => '/',
            'secure' => true,              // Only HTTPS (set to false for local testing)
            'httponly' => false,           // Need to be readable by .htaccess
            'samesite' => 'Lax'
        ]
    );
    
    // Log successful login (optional - for security auditing)
    // Uncomment if you want to track logins
    // error_log('[DEV AUTH] Successful login from IP: ' . $_SERVER['REMOTE_ADDR'] . ' at ' . date('Y-m-d H:i:s'));
    
    // Redirect to intended page
    header('Location: ' . $redirect_url);
    exit();
    
} else {
    // ❌ PASSWORD INCORRECT - Deny access
    
    // Increment failed attempts
    $_SESSION['failed_attempts']++;
    
    // Log failed attempt (optional - for security auditing)
    // Uncomment if you want to track failed attempts
    // error_log('[DEV AUTH] Failed login attempt #' . $_SESSION['failed_attempts'] . ' from IP: ' . $_SERVER['REMOTE_ADDR'] . ' at ' . date('Y-m-d H:i:s'));
    
    // Check if should lock out
    if ($_SESSION['failed_attempts'] >= $MAX_FAILED_ATTEMPTS) {
        $_SESSION['lockout_until'] = time() + $LOCKOUT_DURATION;
        
        // Redirect with lockout message
        header('Location: /dev/login.php?error=lockout&minutes=' . ($LOCKOUT_DURATION / 60));
        exit();
    }
    
    // Redirect back to login with error
    header('Location: /dev/login.php?error=invalid&redirect=' . urlencode($redirect_url) . '&attempts=' . $_SESSION['failed_attempts']);
    exit();
}
?>
