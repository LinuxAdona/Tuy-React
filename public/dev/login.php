<?php
/**
 * Developer Access Login Page
 * Municipality of Tuy, Batangas
 * 
 * This page provides password-protected access to the development version
 * of the website at /dev/* routes.
 */

// Start session
session_start();

// Get redirect URL from query parameter (where to go after successful login)
$redirect_url = isset($_GET['redirect']) ? $_GET['redirect'] : '/dev/';

// Check if already authenticated
if (isset($_SESSION['dev_authenticated']) && $_SESSION['dev_authenticated'] === true) {
    // Already logged in, redirect to intended page
    header('Location: ' . $redirect_url);
    exit();
}

// Check for error parameter (from failed login attempt)
$error_message = '';
if (isset($_GET['error'])) {
    if ($_GET['error'] === 'invalid') {
        $attempts = isset($_GET['attempts']) ? intval($_GET['attempts']) : 0;
        $remaining = 5 - $attempts;
        $error_message = 'Incorrect password. Please try again.';
        if ($attempts >= 3) {
            $error_message .= ' (' . $remaining . ' attempts remaining)';
        }
    } elseif ($_GET['error'] === 'empty') {
        $error_message = 'Please enter a password.';
    } elseif ($_GET['error'] === 'lockout') {
        $minutes = isset($_GET['minutes']) ? intval($_GET['minutes']) : 15;
        $error_message = 'Too many failed attempts. Please try again in ' . $minutes . ' minute' . ($minutes > 1 ? 's' : '') . '.';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Developer Access - Municipality of Tuy, Batangas">
    <meta name="robots" content="noindex, nofollow">
    <title>Developer Access - Municipality of Tuy, Batangas</title>
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" 
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" 
          crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
            color: #1f2937;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            width: 100%;
            padding: 50px 40px;
            text-align: center;
            animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .logo {
            width: 100px;
            height: 100px;
            margin: 0 auto 25px;
        }

        .logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .lock-icon {
            font-size: 60px;
            color: #01377d;
            margin-bottom: 20px;
        }

        h1 {
            font-size: 2rem;
            color: #01377d;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .subtitle {
            font-size: 1rem;
            color: #6b7280;
            margin-bottom: 30px;
        }

        .divider {
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, #01377d 0%, #3b82f6 100%);
            margin: 0 auto 30px;
            border-radius: 2px;
        }

        .login-form {
            margin-bottom: 25px;
        }

        .form-group {
            margin-bottom: 20px;
            text-align: left;
        }

        .form-group label {
            display: block;
            font-size: 0.95rem;
            font-weight: 600;
            color: #374151;
            margin-bottom: 8px;
        }

        .password-input-wrapper {
            position: relative;
            display: flex;
            gap: 10px;
        }

        .form-group input[type="password"],
        .form-group input[type="text"] {
            flex: 1;
            padding: 12px 15px;
            font-size: 1rem;
            border: 2px solid #d1d5db;
            border-radius: 8px;
            outline: none;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .form-group input:focus {
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .toggle-password {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: #6b7280;
            cursor: pointer;
            font-size: 1.1rem;
            padding: 5px;
            transition: color 0.3s ease;
        }

        .toggle-password:hover {
            color: #01377d;
        }

        .submit-btn {
            width: 100%;
            padding: 14px 20px;
            background: #01377d;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(1, 55, 125, 0.3);
        }

        .submit-btn:hover {
            background: #012a5e;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(1, 55, 125, 0.4);
        }

        .submit-btn:active {
            transform: translateY(0);
        }

        .error-message {
            background: #fee2e2;
            border: 2px solid #fecaca;
            color: #991b1b;
            padding: 12px 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.95rem;
            animation: shake 0.5s ease;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }

        .error-message i {
            font-size: 1.2rem;
        }

        .info-text {
            font-size: 0.9rem;
            color: #6b7280;
            margin-top: 20px;
            padding: 15px;
            background: #f9fafb;
            border-radius: 8px;
            line-height: 1.5;
        }

        .info-text i {
            color: #3b82f6;
            margin-right: 5px;
        }

        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #6b7280;
            text-decoration: none;
            font-size: 0.95rem;
            margin-top: 20px;
            padding: 10px 15px;
            border-radius: 6px;
            transition: all 0.3s ease;
        }

        .back-link:hover {
            color: #01377d;
            background: #f3f4f6;
        }

        .back-link i {
            font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 480px) {
            .container {
                padding: 35px 25px;
            }

            h1 {
                font-size: 1.6rem;
            }

            .lock-icon {
                font-size: 50px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Logo -->
        <div class="logo">
            <img src="/logo.png" alt="Municipality of Tuy Logo">
        </div>

        <!-- Lock Icon -->
        <div class="lock-icon">
            <i class="fas fa-lock"></i>
        </div>

        <!-- Main Heading -->
        <h1>Developer Access</h1>
        <p class="subtitle">Municipality of Tuy, Batangas</p>
        
        <!-- Divider -->
        <div class="divider"></div>

        <!-- Error Message -->
        <?php if ($error_message): ?>
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <span><?php echo htmlspecialchars($error_message); ?></span>
        </div>
        <?php endif; ?>

        <!-- Login Form -->
        <form method="POST" action="/dev/verify.php" class="login-form">
            <div class="form-group">
                <label for="password">
                    <i class="fas fa-key"></i> Enter Password
                </label>
                <div class="password-input-wrapper">
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter developer password"
                        required 
                        autofocus
                        autocomplete="off"
                    >
                </div>
            </div>

            <!-- Hidden field to preserve redirect URL -->
            <input type="hidden" name="redirect" value="<?php echo htmlspecialchars($redirect_url); ?>">

            <button type="submit" class="submit-btn">
                <i class="fas fa-sign-in-alt"></i> Login
            </button>
        </form>

        <!-- Info Text -->
        <div class="info-text">
            <i class="fas fa-shield-alt"></i>
            This area is restricted to authorized developers only. Please enter your password to access the development version of the website.
        </div>

        <!-- Back Link -->
        <a href="/" class="back-link">
            <i class="fas fa-arrow-left"></i>
            Back to Public Site
        </a>
    </div>

    <script>
        // Auto-focus password field on page load
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('password').focus();
        });

        // Handle form submission with Enter key
        document.getElementById('password').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.target.form.submit();
            }
        });
    </script>
</body>
</html>
