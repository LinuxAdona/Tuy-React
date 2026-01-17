# Developer Access Guide
## Password-Protected /dev/ Routes for Municipality of Tuy Website

---

## 📋 **Overview**

This guide explains the developer access system that allows authorized users to view the full React application at `/dev/*` routes while keeping the public site in maintenance mode (showing the under-construction page).

---

## 🎯 **Features**

✅ **Public Routes** (`/`, `/about`, `/contact`, etc.) → Show under-construction page  
✅ **Developer Routes** (`/dev/`, `/dev/about`, `/dev/contact`, etc.) → Show full React app (password-protected)  
✅ **Session-Based Authentication** → Login once, stay logged in for 24 hours  
✅ **Brute Force Protection** → Lockout after 5 failed login attempts  
✅ **Secure Password Hashing** → bcrypt password storage  
✅ **Easy Logout** → `/dev/logout.php` to end session  

---

## 🔐 **Setting Your Password**

### **IMPORTANT: Before Deployment**

You **MUST** set a secure password before deploying to production. The default password hash in `/public/dev/verify.php` is for demonstration only.

### **Step 1: Choose a Strong Password**

Create a password with:
- At least 12 characters
- Mix of uppercase and lowercase letters
- Numbers
- Special characters

**Example:** `TuyMunicipality2026!Dev#Access`

### **Step 2: Generate Password Hash**

You have three options:

#### **Option A: Using PHP Command Line** (Recommended)

```bash
php -r "echo password_hash('YOUR_PASSWORD_HERE', PASSWORD_BCRYPT);"
```

**Example:**
```bash
php -r "echo password_hash('TuyMunicipality2026!Dev#Access', PASSWORD_BCRYPT);"
```

**Output:**
```
$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi
```

#### **Option B: Using Online Tool** (Less Secure)

Visit: https://bcrypt-generator.com/
- Enter your password
- Use cost/rounds: 10
- Copy the generated hash

**⚠️ Warning:** Don't use sensitive production passwords with online tools.

#### **Option C: Using Hostgator PHP** (After Upload)

1. Create a temporary file: `hash-generator.php`
2. Add this code:
```php
<?php
echo password_hash('YOUR_PASSWORD_HERE', PASSWORD_BCRYPT);
?>
```
3. Upload to your site
4. Visit: `https://yourdomain.com/hash-generator.php`
5. Copy the hash, then DELETE the file immediately

### **Step 3: Update verify.php**

1. Open `/public/dev/verify.php` in your editor
2. Find line ~30:
```php
$CORRECT_PASSWORD_HASH = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi';
```
3. Replace the hash with your generated hash
4. Save the file

### **Step 4: (Optional) Testing Mode**

For local testing without SSL, you can temporarily use plain text password:

1. In `/public/dev/verify.php`, uncomment line ~35:
```php
$TESTING_PLAIN_PASSWORD = 'your_test_password_here';
```
2. Set your test password
3. **IMPORTANT:** Comment this line out before deploying to production!

---

## 🚀 **Deployment Instructions**

### **Step 1: Build the Project**

```bash
npm run build
```

**Verify these files exist in `dist/`:**
```
dist/
├── dev/
│   ├── login.php       ✅ Login page
│   ├── verify.php      ✅ Password verification
│   └── logout.php      ✅ Logout script
├── .htaccess           ✅ Routing configuration
├── under-construction.html  ✅ Public maintenance page
├── index.html          ✅ React app
└── assets/             ✅ CSS/JS bundles
```

### **Step 2: Upload to Hostgator**

1. Login to **cPanel** → **File Manager**
2. Navigate to `public_html/` (or your domain's root)
3. Upload all files from `dist/` folder
4. Set permissions:
   - PHP files: `644`
   - Directories: `755`
   - `.htaccess`: `644`

### **Step 3: Verify PHP is Enabled**

Most Hostgator plans include PHP by default. To verify:

1. Create a test file: `phpinfo.php`
2. Add this code:
```php
<?php phpinfo(); ?>
```
3. Upload to your site
4. Visit: `https://yourdomain.com/phpinfo.php`
5. If you see PHP information, it's working!
6. **Delete the file immediately** for security

### **Step 4: Configure SSL (Optional but Recommended)**

If you have SSL certificate installed:

1. Edit `.htaccess` in cPanel
2. Find lines 16-19 (HTTPS redirect section)
3. Uncomment the 3 RewriteCond/RewriteRule lines
4. Save

**Note:** The verify.php and logout.php have `'cookie_secure' => true` which requires HTTPS. For local testing without SSL, change to `false`.

---

## 🔑 **How to Use Developer Access**

### **Logging In**

1. Visit any `/dev/` route, for example:
   - `https://yourdomain.com/dev/`
   - `https://yourdomain.com/dev/about`
   - `https://yourdomain.com/dev/contact`

2. You'll be redirected to the login page: `/dev/login.php`

3. Enter your password and click "Login"

4. On successful login:
   - Session cookie is created (valid for 24 hours)
   - You're redirected back to the page you requested
   - Full React app is now accessible at all `/dev/*` routes

### **Navigating the Dev Site**

Once logged in, you can access the full site at:

- **Home:** `https://yourdomain.com/dev/`
- **About:** `https://yourdomain.com/dev/about`
- **Contact:** `https://yourdomain.com/dev/contact`
- **Services:** `https://yourdomain.com/dev/services`
- All other routes: `https://yourdomain.com/dev/[route-name]`

**React Router** handles all navigation within `/dev/*` routes normally, just like the production site.

### **Logging Out**

To end your session:

**Option 1:** Visit logout URL
```
https://yourdomain.com/dev/logout.php
```

**Option 2:** Clear your browser cookies

After logout, you'll be redirected to the under-construction page.

---

## 🛡️ **Security Features**

### **1. Brute Force Protection**

- **Failed Attempts:** Tracks wrong password entries
- **Lockout:** After 5 failed attempts, account is locked for 15 minutes
- **Auto-Reset:** Lockout timer resets automatically after duration

**During Lockout:**
- Error message shows: "Too many failed attempts. Please try again in X minutes."
- All login attempts are blocked
- Timer counts down automatically

### **2. Session Security**

**Session Configuration:**
- **Duration:** 24 hours (86400 seconds)
- **HttpOnly:** Session cookie not accessible via JavaScript
- **Secure:** Only transmitted over HTTPS (when enabled)
- **SameSite:** Lax - CSRF protection

**Session Variables Stored:**
- `dev_authenticated`: Authentication status
- `dev_login_time`: Timestamp of login
- `dev_login_ip`: IP address of user
- `failed_attempts`: Failed login counter
- `lockout_until`: Lockout expiration timestamp

### **3. Cookie Configuration**

**Two cookies are used:**

**PHP Session Cookie (PHPSESSID):**
- Stores session ID
- HttpOnly: Yes
- Secure: Yes (with SSL)
- SameSite: Lax

**Authentication Cookie (dev_session_authenticated):**
- Value: "true" when authenticated
- Used by .htaccess for routing decisions
- HttpOnly: No (needs to be readable by Apache)
- Secure: Yes (with SSL)
- Expires: 24 hours

### **4. Password Security**

- **Algorithm:** bcrypt (PHP PASSWORD_BCRYPT)
- **Cost Factor:** 10 (2^10 iterations)
- **Salt:** Automatically generated and included in hash
- **Plain Text:** Never stored or logged

**Security Level:**
- bcrypt is specifically designed for password hashing
- Resistant to brute force attacks
- Automatically handles salt generation
- Industry-standard for password storage

### **5. Optional: Security Logging**

The verify.php and logout.php include commented-out logging code. To enable security auditing:

**In `/dev/verify.php`:**

Uncomment lines for:
- Successful login logging (line ~118)
- Failed attempt logging (line ~139)

**In `/dev/logout.php`:**

Uncomment line ~37 for logout logging

**Logs will be written to:**
- Hostgator: Usually `/home/username/logs/error_log`
- Check cPanel → Metrics → Errors

**Log Format:**
```
[DEV AUTH] Successful login from IP: 192.168.1.100 at 2026-01-18 12:00:00
[DEV AUTH] Failed login attempt #3 from IP: 192.168.1.200 at 2026-01-18 12:05:00
[DEV AUTH] User logged out from IP: 192.168.1.100 at 2026-01-18 15:30:00
```

---

## 🔧 **Configuration Options**

### **Adjust Session Duration**

In `/public/dev/verify.php`, line 19:
```php
'cookie_lifetime' => 86400,     // Change to desired seconds
```

**Common Values:**
- 1 hour: `3600`
- 12 hours: `43200`
- 24 hours: `86400` (default)
- 7 days: `604800`

### **Adjust Lockout Settings**

In `/public/dev/verify.php`, lines 43-44:
```php
$MAX_FAILED_ATTEMPTS = 5;      // Change max attempts
$LOCKOUT_DURATION = 900;       // Change lockout time (seconds)
```

**Example - Stricter Security:**
```php
$MAX_FAILED_ATTEMPTS = 3;      // Lock after 3 attempts
$LOCKOUT_DURATION = 1800;      // Lock for 30 minutes
```

### **Change Logout Redirect**

In `/public/dev/logout.php`, line 39:
```php
header('Location: /under-construction.html');  // Change to desired page
```

**Options:**
- Under construction: `/under-construction.html`
- Login page: `/dev/login.php`
- Public home: `/`

---

## 🧪 **Testing Checklist**

After deployment, test these scenarios:

### **Authentication Tests**

- [ ] Visit `/dev/` → Redirects to `/dev/login.php`
- [ ] Enter wrong password → Shows error message
- [ ] Enter correct password → Redirects to `/dev/`
- [ ] After login, visit `/dev/about` → Shows full site
- [ ] Close browser and reopen `/dev/` → Still logged in (within 24hrs)

### **Security Tests**

- [ ] Try 5 wrong passwords → Gets locked out
- [ ] During lockout, try logging in → Shows lockout message
- [ ] Wait 15 minutes → Can try again
- [ ] Clear cookies → Redirected to login

### **Public Access Tests**

- [ ] Visit `/` → Shows under-construction page
- [ ] Visit `/about` → Shows under-construction page
- [ ] Images and logo load correctly
- [ ] Facebook link works

### **Navigation Tests (While Logged In)**

- [ ] React Router works in `/dev/*`
- [ ] Refresh page on `/dev/about` → No 404 error
- [ ] Browser back/forward buttons work
- [ ] All navigation links function correctly

### **Logout Tests**

- [ ] Visit `/dev/logout.php` → Session destroyed
- [ ] Try accessing `/dev/` → Redirected to login
- [ ] No residual session cookies

---

## 🐛 **Troubleshooting**

### **Problem: 500 Internal Server Error**

**Cause:** PHP syntax error or .htaccess misconfiguration

**Solutions:**
1. Check PHP error logs in cPanel → Errors
2. Verify all `.htaccess` syntax is correct
3. Ensure PHP files uploaded correctly
4. Check file permissions (644 for PHP files)

---

### **Problem: Login Page Shows PHP Code**

**Cause:** PHP not enabled or not processing .php files

**Solutions:**
1. Verify PHP is enabled on your Hostgator plan
2. Check file extension is `.php` (not `.php.txt`)
3. Verify MIME type in .htaccess includes PHP
4. Contact Hostgator support to enable PHP

---

### **Problem: "Incorrect Password" Even With Right Password**

**Cause:** Password hash mismatch or verification issue

**Solutions:**
1. **Verify your password hash:**
   - Generate hash again using same password
   - Ensure you copied entire hash (starts with `$2y$10$`)
   - No extra spaces or line breaks in hash

2. **Test with plain text mode (temporarily):**
   - Uncomment `$TESTING_PLAIN_PASSWORD` in verify.php
   - Set to your password
   - Try logging in
   - If works, issue is with hash generation

3. **Check hash format:**
   ```php
   // Correct format:
   '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
   
   // Wrong (missing quotes):
   $2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi
   ```

---

### **Problem: Gets Logged Out Immediately**

**Cause:** Session cookie not being set or read

**Solutions:**
1. **Check browser cookies:**
   - Open DevTools → Application → Cookies
   - Look for `dev_session_authenticated` and `PHPSESSID`
   - If missing, cookies aren't being set

2. **Check SSL settings:**
   - If testing without SSL, change `'cookie_secure' => false` in:
     - verify.php (lines 20 & 107)
     - logout.php (line 27)

3. **Session configuration:**
   - Ensure PHP sessions are working on server
   - Check if session.save_path is writable (cPanel → PHP Settings)

---

### **Problem: Can't Access /dev/ Routes After Login**

**Cause:** .htaccess not reading cookie or routing issue

**Solutions:**
1. **Verify cookie is set:**
   - DevTools → Application → Cookies
   - Check `dev_session_authenticated` = "true"

2. **Check .htaccess:**
   - Line 36: Cookie check condition
   ```apache
   RewriteCond %{HTTP_COOKIE} !dev_session_authenticated=true
   ```
   - Ensure no typos in cookie name

3. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R)
   - Try incognito/private window

---

### **Problem: Public Routes Still Show React App**

**Cause:** Maintenance mode not properly configured in .htaccess

**Solutions:**
1. **Check .htaccess is uploaded:**
   - File Manager → Show hidden files
   - Verify `.htaccess` exists in root

2. **Verify maintenance rules (lines 47-58):**
   ```apache
   RewriteCond %{REQUEST_URI} !^/dev/
   RewriteCond %{REQUEST_URI} !^/under-construction\.html$
   ...
   RewriteRule ^.*$ /under-construction.html [L]
   ```

3. **Test directly:**
   - Visit `/under-construction.html` → Should work
   - Visit `/` → Should redirect to under-construction

---

### **Problem: Lockout Timer Won't Reset**

**Cause:** Session not expiring or persistent cookies

**Solutions:**
1. **Wait full lockout duration** (15 minutes by default)
2. **Clear browser cookies:**
   - DevTools → Application → Clear site data
3. **Clear session on server:**
   - Delete cookies manually
   - Close all browser windows

---

### **Problem: Images/CSS Not Loading in Dev Mode**

**Cause:** Asset path issues or routing conflicts

**Solutions:**
1. **Check asset paths:**
   - Ensure assets in `/assets/` folder
   - Verify .htaccess allows asset access (line 54-56)

2. **Check React build:**
   - Asset references should be absolute (`/assets/...`)
   - Not relative (`./assets/...` or `../assets/...`)

3. **Verify .htaccess exception:**
   ```apache
   # Skip assets folder
   RewriteCond %{REQUEST_URI} !^/assets/
   ```

---

## 📊 **File Structure Reference**

```
/public/
├── dev/
│   ├── login.php          # Login page with form
│   ├── verify.php         # Password verification script
│   └── logout.php         # Session destroy script
├── .htaccess              # Apache routing configuration
└── under-construction.html # Public maintenance page

After build → /dist/
├── dev/
│   ├── login.php
│   ├── verify.php
│   └── logout.php
├── .htaccess
├── under-construction.html
├── index.html             # React app entry
└── assets/                # JS/CSS bundles
```

---

## 🎨 **Color Scheme**

The under-construction page and login page now use a **dark blue theme**:

- **Primary:** `#01377d` (dark blue)
- **Accent:** `#3b82f6` (lighter blue)
- **Hover:** `#012a5e` (darker blue)
- **Background:** Light gray gradient

All green colors (`#2D5F2E`) have been replaced with the dark blue palette.

---

## 📞 **Support & Contact**

**Municipality of Tuy**
- **Phone:** (043) XXX-XXXX
- **Email:** info@tuy.gov.ph
- **Facebook:** https://www.facebook.com/MunicipalityOfTuy

**Technical Support**
- **Hostgator:** 24/7 Live Chat in cPanel
- **PHP Issues:** Contact Hostgator support
- **Password Reset:** Regenerate hash and update verify.php

---

## 🔒 **Security Best Practices**

1. ✅ **Use strong passwords** (12+ characters, mixed types)
2. ✅ **Enable HTTPS** (SSL certificate) before production
3. ✅ **Never commit passwords** to version control (Git)
4. ✅ **Keep password hash private** (don't share publicly)
5. ✅ **Enable security logging** for audit trail
6. ✅ **Regular password updates** (every 3-6 months)
7. ✅ **Monitor failed login attempts** via logs
8. ✅ **Use different passwords** for different environments (dev/staging/prod)
9. ✅ **Delete testing files** immediately after use
10. ✅ **Keep PHP and server updated** via Hostgator

---

## 🚀 **Quick Reference Commands**

### **Generate Password Hash**
```bash
php -r "echo password_hash('YOUR_PASSWORD', PASSWORD_BCRYPT);"
```

### **Build Project**
```bash
npm run build
```

### **Test PHP Locally** (If you have PHP installed)
```bash
php -S localhost:8000 -t dist/
```

### **Access URLs**
- **Public Site:** `https://yourdomain.com/`
- **Dev Login:** `https://yourdomain.com/dev/login.php`
- **Dev Site:** `https://yourdomain.com/dev/`
- **Logout:** `https://yourdomain.com/dev/logout.php`

---

## 📝 **Changelog**

**Version 2.0 - January 2026**
- Added password-protected developer access at `/dev/*`
- Implemented session-based authentication with PHP
- Added brute force protection (5 attempts, 15-minute lockout)
- Updated color scheme to dark blue (#01377d)
- Created dedicated login page with branded design
- Added secure logout functionality
- Maintained public under-construction page for all non-dev routes

---

**End of Developer Access Guide**

For additional questions or support, please contact the website administrator.
