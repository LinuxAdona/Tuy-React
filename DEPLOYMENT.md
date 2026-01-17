# Deployment Guide for Municipality of Tuy Website
## Hostgator cPanel Deployment Instructions

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Pre-Deployment Checklist](#pre-deployment-checklist)
3. [Building the Project](#building-the-project)
4. [Uploading to Hostgator cPanel](#uploading-to-hostgator-cpanel)
5. [Maintenance Mode Usage](#maintenance-mode-usage)
6. [Testing the Deployment](#testing-the-deployment)
7. [Troubleshooting](#troubleshooting)
8. [File Structure Reference](#file-structure-reference)

---

## Overview

This guide covers deploying the Municipality of Tuy React website to Hostgator cPanel using the File Manager.

**What's Included:**
- ✅ Full React application with React Router
- ✅ Under construction page (`under-construction.html`)
- ✅ Apache `.htaccess` configuration for React Router support
- ✅ Maintenance mode toggle capability
- ✅ Performance optimization (gzip, caching)
- ✅ Security headers

---

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] Node.js and npm are installed on your local machine
- [ ] All dependencies are installed: `npm install`
- [ ] Development server runs without errors: `npm run dev`
- [ ] You have Hostgator cPanel login credentials
- [ ] You know which directory to deploy to (usually `public_html/`)
- [ ] You have a backup of any existing site (if applicable)

---

## Building the Project

### Step 1: Build for Production

Run the build command in your project directory:

```bash
npm run build
```

**Expected Output:**
```
✓ 70 modules transformed.
dist/index.html                   0.77 kB
dist/assets/index-CHXPqPXE.css   46.42 kB
dist/assets/index-CVi9IK5r.js   313.44 kB
✓ built in 3.83s
```

### Step 2: Verify Build Output

Check that the `dist/` folder contains all necessary files:

```bash
ls -la dist/
```

**Required Files:**
- `index.html` - Main React app entry point
- `under-construction.html` - Maintenance page
- `.htaccess` - Apache configuration
- `assets/` - JavaScript and CSS bundles
- `logo.png` - Municipality logo
- `hero-image.jpg` - Hero section image
- `mayor-photo.jpg` - Mayor's photo

**Total Size:** ~1.1 MB

---

## Uploading to Hostgator cPanel

### Step 1: Login to cPanel

1. Go to your Hostgator cPanel URL (usually: `yourdomain.com/cpanel`)
2. Enter your cPanel username and password
3. Click "Login"

### Step 2: Access File Manager

1. In cPanel, find and click **"File Manager"** (usually under "Files" section)
2. A new tab will open with the File Manager interface

### Step 3: Navigate to Deployment Directory

**For Main Domain:**
- Navigate to `public_html/`

**For Subdomain:**
- Navigate to `public_html/subdomain-name/`

**For Addon Domain:**
- Navigate to `public_html/addon-domain.com/`

### Step 4: Backup Existing Files (Important!)

**If you have existing website files:**

1. Select all files in the directory
2. Click "Compress" in the toolbar
3. Choose "Zip Archive"
4. Name it: `backup-[current-date].zip`
5. Click "Compress Files"
6. Download the backup to your local machine
7. Now you can safely delete the old files

### Step 5: Upload New Files

**Option A: Upload as ZIP (Recommended - Faster)**

1. On your local machine, compress the entire `dist/` folder contents into a ZIP file
   - **Important:** Compress the CONTENTS of dist/, not the dist/ folder itself
   - Files should be at the root of the ZIP, not inside a "dist" folder

2. In cPanel File Manager, click **"Upload"** button
3. Click "Select File" and choose your ZIP file
4. Wait for upload to complete (progress bar will show)
5. Close the upload dialog when done
6. Right-click on the uploaded ZIP file
7. Select **"Extract"**
8. Click "Extract Files"
9. After extraction, delete the ZIP file

**Option B: Upload Individual Files (Alternative)**

1. In cPanel File Manager, click **"Upload"** button
2. Select all files from your local `dist/` folder
3. Drag and drop into the upload dialog
4. Wait for all files to upload

### Step 6: Set File Permissions

**Important for security and functionality:**

**For Files:**
1. Select all files (excluding directories)
2. Click "Permissions" in the toolbar
3. Set to `644` (or check: Owner Read+Write, Group Read, World Read)
4. Click "Change Permissions"

**For Directories (including assets/):**
1. Select all directories
2. Click "Permissions"
3. Set to `755` (or check: Owner All, Group Read+Execute, World Read+Execute)
4. Click "Change Permissions"

**For .htaccess specifically:**
- Permission: `644`
- Owner: Your cPanel user
- This is critical for Apache to read the configuration

### Step 7: Verify Upload

Check that all files are present:

```
public_html/
├── .htaccess
├── index.html
├── under-construction.html
├── logo.png
├── hero-image.jpg
├── mayor-photo.jpg
└── assets/
    ├── index-[hash].css
    └── index-[hash].js
```

---

## Maintenance Mode Usage

The `.htaccess` file includes a maintenance mode toggle that shows the under-construction page to all visitors while you work on the site.

### To Enable Maintenance Mode:

1. In cPanel File Manager, navigate to your site's root directory
2. Right-click on `.htaccess`
3. Select **"Edit"** or **"Code Edit"**
4. Find this section (around line 40):

```apache
# MAINTENANCE MODE TOGGLE
# To enable maintenance mode:
# 1. Uncomment the 4 lines below (remove the # at the start)

# RewriteCond %{REQUEST_URI} !^/under-construction\.html$
# RewriteCond %{REQUEST_URI} !^/assets/
# RewriteCond %{REQUEST_URI} !\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot)$
# RewriteRule ^.*$ /under-construction.html [L]
```

5. Remove the `#` from the 4 RewriteCond/RewriteRule lines:

```apache
RewriteCond %{REQUEST_URI} !^/under-construction\.html$
RewriteCond %{REQUEST_URI} !^/assets/
RewriteCond %{REQUEST_URI} !\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot)$
RewriteRule ^.*$ /under-construction.html [L]
```

6. Click **"Save Changes"**
7. **Result:** All visitors will now see the under-construction page

### To Disable Maintenance Mode:

1. Edit `.htaccess` again
2. Re-comment the same 4 lines (add `#` at the start):

```apache
# RewriteCond %{REQUEST_URI} !^/under-construction\.html$
# RewriteCond %{REQUEST_URI} !^/assets/
# RewriteCond %{REQUEST_URI} !\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot)$
# RewriteRule ^.*$ /under-construction.html [L]
```

3. Click **"Save Changes"**
4. **Result:** Full React site is accessible again

### IP Whitelist (Optional)

To allow specific IP addresses to access the full site while showing maintenance mode to others:

1. Find your IP address: Visit `https://whatismyipaddress.com/`
2. In `.htaccess`, find the "MAINTENANCE MODE WITH IP WHITELIST" section
3. Replace `YOUR_IP_ADDRESS` with your actual IP
4. Uncomment the section
5. To add more IPs, duplicate the `RewriteCond %{REMOTE_ADDR}` line

---

## Testing the Deployment

### After Upload - Test Everything:

#### 1. Test Main Site Loading
- Visit: `https://yourdomain.com/`
- **Expected:** React app loads, shows homepage
- **Check:** Logo displays, navigation works

#### 2. Test React Router
- Click navigation links (About, Contact, Services, etc.)
- URL should change without page reload
- **Expected:** Routes work smoothly

#### 3. Test Direct URL Access
- Visit: `https://yourdomain.com/about`
- Refresh the page (F5 or Ctrl+R)
- **Expected:** Page loads correctly, no 404 error
- **If you get 404:** Check `.htaccess` was uploaded correctly

#### 4. Test Under Construction Page
- Visit: `https://yourdomain.com/under-construction.html`
- **Expected:** 
  - Page loads with Tuy branding
  - Logo displays
  - Contact information visible
  - Facebook link works
  - Responsive on mobile

#### 5. Test Maintenance Mode Toggle
- Enable maintenance mode in `.htaccess`
- Visit main site: `https://yourdomain.com/`
- **Expected:** Under construction page shows
- Disable maintenance mode
- **Expected:** React app shows again

#### 6. Test Mobile Responsiveness
- Open site on mobile device or use browser dev tools
- Test navigation menu (hamburger menu)
- Check all pages render correctly
- **Expected:** Site is fully responsive

#### 7. Test Performance
- Use Google PageSpeed Insights: `https://pagespeed.web.dev/`
- Enter your domain
- **Expected:** Good scores (70+)
- Gzip compression active
- Browser caching working

---

## Troubleshooting

### Problem: 500 Internal Server Error

**Cause:** Syntax error in `.htaccess` or Apache module not enabled

**Solutions:**
1. Check `.htaccess` for typos
2. Delete `.htaccess` temporarily - if site works, issue is in `.htaccess`
3. Contact Hostgator support to verify `mod_rewrite` is enabled
4. Check file permissions (should be 644)

---

### Problem: 404 Error on Refresh or Direct URLs

**Cause:** `.htaccess` not uploaded or not working

**Solutions:**
1. Verify `.htaccess` exists in root directory
2. Check file permissions (644)
3. Ensure filename is exactly `.htaccess` (starts with dot, no extension)
4. Clear browser cache
5. Check Apache `mod_rewrite` is enabled (contact Hostgator)

---

### Problem: Images Not Loading (Broken Images)

**Cause:** File paths incorrect or files not uploaded

**Solutions:**
1. Check image files are in root directory:
   - `logo.png`
   - `hero-image.jpg`
   - `mayor-photo.jpg`
2. Verify file permissions (644)
3. Check file names match exactly (case-sensitive)
4. Open browser console (F12) to see specific error messages

---

### Problem: CSS Not Loading (Unstyled Page)

**Cause:** CSS files not uploaded or wrong path

**Solutions:**
1. Verify `assets/` folder exists with CSS file
2. Check `index.html` references correct CSS file
3. Clear browser cache (Ctrl+Shift+R)
4. Check file permissions (644 for files, 755 for directories)

---

### Problem: Maintenance Mode Not Working

**Cause:** `.htaccess` rules not uncommented correctly or syntax error

**Solutions:**
1. Double-check you removed ALL `#` from the 4 lines
2. Ensure no extra spaces at line start
3. Save file after editing
4. Clear browser cache
5. Try incognito/private browsing window

---

### Problem: HTTPS Redirect Not Working

**Cause:** SSL not configured or HTTPS rules commented out

**Solutions:**
1. Verify SSL certificate is installed (contact Hostgator)
2. In `.htaccess`, find "HTTPS REDIRECT" section
3. Uncomment the RewriteCond and RewriteRule lines
4. Save and test

---

### Problem: Site Loads Slowly

**Cause:** Compression or caching not working

**Solutions:**
1. Verify `.htaccess` mod_deflate and mod_expires sections are present
2. Contact Hostgator to enable these Apache modules
3. Consider using Cloudflare CDN for additional performance
4. Optimize images before upload (use WebP format)

---

### Problem: Can't Edit .htaccess in File Manager

**Cause:** File hidden or permission issue

**Solutions:**
1. In File Manager, click **"Settings"** (top right)
2. Check **"Show Hidden Files (dotfiles)"**
3. Click "Save"
4. `.htaccess` should now be visible
5. If still can't edit, check file permissions

---

## File Structure Reference

### Production Build Structure (dist/)

```
dist/
├── .htaccess                    # Apache configuration (8.5 KB)
├── index.html                   # Main React app entry (0.77 KB)
├── under-construction.html      # Maintenance page (10 KB)
├── logo.png                     # Municipality logo (44 KB)
├── hero-image.jpg              # Hero section image (741 KB)
├── mayor-photo.jpg             # Mayor photo (224 KB)
└── assets/                     # Build output folder
    ├── index-[hash].css        # Compiled CSS (~46 KB)
    └── index-[hash].js         # Compiled JavaScript (~313 KB)
```

### Source Code Structure (src/)

```
src/
├── assets/
│   └── css/
│       └── index.css           # Global styles
├── components/
│   ├── Navbar.tsx              # Navigation component
│   ├── Button.tsx              # Reusable button
│   ├── SkeletonCard.tsx        # Loading skeleton
│   └── ...
├── pages/
│   ├── Home.tsx                # Homepage
│   ├── About.tsx               # About page
│   ├── ContactUs.tsx           # Contact page
│   └── ...
├── hooks/
│   ├── useFacebookPosts.ts     # Facebook API hook
│   ├── useScrollAnimation.ts   # Scroll animations
│   └── useParallax.ts          # Parallax effect
├── services/
│   └── facebook/
│       ├── client.ts           # Facebook API client
│       └── types.ts            # TypeScript types
├── data/
│   └── facebookPosts.ts        # Static post data
├── utils/
│   └── dateFormat.ts           # Date formatting
├── App.tsx                     # Main app component
└── main.tsx                    # App entry point
```

---

## Quick Reference Commands

### Build Commands
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### File Permissions
- Files: `644` (rw-r--r--)
- Directories: `755` (rwxr-xr-x)
- .htaccess: `644`

### Important URLs
- **Live Site:** `https://yourdomain.com/`
- **Under Construction:** `https://yourdomain.com/under-construction.html`
- **cPanel:** `https://yourdomain.com:2083/`
- **Facebook Page:** `https://www.facebook.com/MunicipalityOfTuy`

---

## Contact Information for Support

**Municipality of Tuy**
- **Address:** Municipal Hall, Tuy, Batangas, Philippines 4200
- **Phone:** (043) XXX-XXXX
- **Email:** info@tuy.gov.ph
- **Office Hours:** Monday - Friday, 8:00 AM - 5:00 PM

**Hostgator Support**
- **Live Chat:** Available 24/7 in cPanel
- **Phone:** Check your Hostgator welcome email
- **Knowledge Base:** `https://www.hostgator.com/help`

---

## Next Steps After Deployment

1. ✅ **Test thoroughly** - Go through all checklist items
2. ✅ **Setup SSL** - Enable HTTPS if not already configured
3. ✅ **Configure domain** - Ensure domain points to correct directory
4. ✅ **Set up analytics** - Add Google Analytics if needed
5. ✅ **Create 404 page** - Custom error page (optional)
6. ✅ **Regular backups** - Schedule automatic backups in cPanel
7. ✅ **Monitor performance** - Use PageSpeed Insights regularly
8. ✅ **Update content** - Keep Facebook posts and announcements current

---

## Changelog

**Version 1.0 - January 2026**
- Initial deployment setup
- Under construction page created
- React Router configuration
- Performance optimization
- Security headers implemented
- Maintenance mode toggle added

---

**End of Deployment Guide**

For questions or issues not covered in this guide, please contact your web administrator or Hostgator support.
