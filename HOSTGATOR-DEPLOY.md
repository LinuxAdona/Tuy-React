# Hostgator Deployment Quick Start

## 🚀 Quick Deploy to Hostgator cPanel

### Step 1: Build
```bash
npm run build
```

### Step 2: Upload
1. Login to cPanel → File Manager
2. Navigate to `public_html/`
3. Upload all files from `dist/` folder
4. Set permissions: Files = 644, Directories = 755

### Step 3: Test
- Visit your domain
- Test all routes work
- Refresh pages (should not 404)

---

## 🔧 Maintenance Mode

### Enable (Show Under Construction Page):
1. Edit `.htaccess` in File Manager
2. Find "MAINTENANCE MODE TOGGLE" section (~line 40)
3. Remove `#` from these 4 lines:
```apache
RewriteCond %{REQUEST_URI} !^/under-construction\.html$
RewriteCond %{REQUEST_URI} !^/assets/
RewriteCond %{REQUEST_URI} !\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot)$
RewriteRule ^.*$ /under-construction.html [L]
```
4. Save

### Disable (Show Full Site):
1. Re-add `#` to the same 4 lines
2. Save

---

## 📁 Files Created

### `/public/under-construction.html`
- Branded maintenance page
- Matches Tuy municipality styling
- Shows contact info and Facebook link
- Fully responsive
- Size: ~10 KB

### `/public/.htaccess`
- React Router SPA support (prevents 404s)
- Maintenance mode toggle
- Gzip compression
- Browser caching
- Security headers
- Size: ~8.6 KB

### `/DEPLOYMENT.md`
- Complete deployment guide
- Troubleshooting section
- File structure reference
- Quick commands

---

## 📋 Deployment Checklist

- [ ] Run `npm run build`
- [ ] Verify dist/ contains: `.htaccess`, `under-construction.html`, `index.html`, assets/
- [ ] Upload to cPanel File Manager
- [ ] Set file permissions (644/755)
- [ ] Test main site loads
- [ ] Test React Router (navigate between pages)
- [ ] Test page refresh (should not 404)
- [ ] Test under-construction.html directly
- [ ] Enable/disable maintenance mode
- [ ] Test on mobile

---

## 🆘 Quick Troubleshooting

**404 on refresh?**
→ Check `.htaccess` uploaded correctly

**500 error?**
→ Check `.htaccess` syntax, verify mod_rewrite enabled

**Images not loading?**
→ Check file permissions (644), verify files uploaded

**Maintenance mode not working?**
→ Clear browser cache, verify `.htaccess` edited correctly

---

## 📖 Full Documentation

See `DEPLOYMENT.md` for:
- Complete step-by-step instructions
- Detailed troubleshooting
- File structure reference
- Performance optimization tips
- Security best practices

---

## 📞 Support

**Municipality of Tuy**
- Phone: (043) XXX-XXXX
- Email: info@tuy.gov.ph
- Facebook: https://www.facebook.com/MunicipalityOfTuy

**Hostgator Support**
- Available 24/7 via cPanel Live Chat
- Knowledge Base: https://www.hostgator.com/help

---

**Ready to deploy!** 🎉
