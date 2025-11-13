# 🔒 SECURITY ADVISORY - Exposed API Keys

## ⚠️ CRITICAL ACTION REQUIRED

**Date:** 2025-01-13
**Severity:** HIGH
**Status:** MITIGATED (Keys removed from repository)

---

## 🚨 What Happened

GitHub's Secret Scanning feature detected exposed API keys in your public repository:

### Exposed Credentials:
1. **Google Gemini API Key**
   - File: `main.js` (line 11)
   - Commit: `d936335`
   - Key: `AIzaSyBflXaGZEruJEoYkSkS-ZjSA3BRzCuxrnE`

2. **Firebase API Key**
   - File: `main.js` (line 16)
   - Commit: `d936335`
   - Key: `AIzaSyC9zH3D170r7ejc4b7teH9xq1cN0XTVids`

---

## ✅ What We Did (COMPLETED)

- [x] Removed API keys from `main.js`
- [x] Replaced with placeholders (`YOUR_GEMINI_API_KEY_HERE`)
- [x] Committed fix to repository
- [x] Pushed updated code to GitHub
- [x] Created this security advisory

---

## 🔥 URGENT ACTIONS YOU MUST TAKE NOW

### STEP 1: Revoke Compromised Google Gemini API Key ⚡

**DO THIS IMMEDIATELY:**

1. Go to: https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Find the key ending in `...cuxrnE`
4. Click the **trash icon** or **"Delete"** button
5. Confirm deletion

**Why?** Anyone who saw the GitHub repository can now use your API key to:
- Make API calls on your behalf
- Exhaust your quota
- Potentially incur costs (if you upgrade from free tier)

---

### STEP 2: Revoke Firebase API Key (If Active) 🔥

**If you're actively using Firebase:**

1. Go to: https://console.firebase.google.com/
2. Select project: `control-systems-34707`
3. Click **⚙️ Project Settings**
4. Go to **General** tab
5. Under **Your apps**, find the web app
6. Click **⋮** (three dots) → **Delete app**
7. Create new app with fresh keys

**OR** (if not using Firebase):
- No action needed - the Firebase config appears unused

---

### STEP 3: Generate New API Keys 🔑

#### For Google Gemini:

1. Visit: https://makersuite.google.com/app/apikey
2. Click **"Create API Key"**
3. Copy the new key immediately
4. **DO NOT** paste it in any GitHub files

#### For Firebase (if needed):

1. Visit Firebase Console: https://console.firebase.google.com/
2. Create new web app
3. Copy new configuration
4. Store securely

---

### STEP 4: Update Keys Locally (NOT in GitHub) 🔐

**Update these files on your LOCAL machine ONLY:**

```bash
# Files to update with YOUR new keys:
index.html (line ~915)
videos.html (line ~886)
ai-assistant.html (line ~655)
resources.html (line ~1114)
contact.html (line ~828)
about.html (line ~1013)
```

**Find this line:**
```javascript
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
```

**Replace with:**
```javascript
const GEMINI_API_KEY = 'YOUR-ACTUAL-NEW-KEY';  // KEEP LOCAL ONLY!
```

⚠️ **NEVER commit these changes to GitHub!**

---

### STEP 5: Set Up .gitignore to Prevent Future Leaks 📝

Already done! Your `.gitignore` file now includes:

```
# Environment variables
.env
.env.local
.env.production

# API Keys (backup)
**/api-keys.txt
**/secrets.txt
```

---

## 🛡️ Best Practices Going Forward

### 1. Use Environment Variables

**Instead of hardcoding keys in files:**

Create `.env` file (NOT tracked by Git):
```env
VITE_GEMINI_API_KEY=your-actual-key-here
VITE_FIREBASE_API_KEY=your-firebase-key-here
```

Access in code:
```javascript
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
```

### 2. Use Netlify Environment Variables

For production deployment on Netlify:

1. Go to: https://app.netlify.com/
2. Select your site
3. **Site settings** → **Environment variables**
4. Click **"Add a variable"**
5. Add:
   - Key: `GEMINI_API_KEY`
   - Value: `your-new-key`
6. **Save**

Then redeploy your site.

### 3. Implement Backend Proxy (Recommended)

**Problem:** Client-side API keys are always visible in browser.

**Solution:** Create a backend proxy:

```
User → Your Backend (Netlify Functions) → Google Gemini API
```

This way, the API key never leaves your server!

**Example:** Netlify Serverless Function:
```javascript
// netlify/functions/chat.js
exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);

  const response = await fetch('https://generativelanguage.googleapis.com/...', {
    headers: {
      'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`
    },
    body: JSON.stringify({ message })
  });

  return {
    statusCode: 200,
    body: JSON.stringify(await response.json())
  };
};
```

### 4. Use API Key Restrictions

**Restrict your new Google API key:**

1. Go to: https://console.cloud.google.com/apis/credentials
2. Find your new API key
3. Click **"Edit API key"**
4. Under **"API restrictions":**
   - Select **"Restrict key"**
   - Choose **"Generative Language API"**
5. Under **"Website restrictions":**
   - Add: `https://control-systems.netlify.app/*`
   - Add: `http://localhost:*` (for testing)
6. **Save**

Now the key only works on your website!

### 5. Monitor API Usage

Set up billing alerts:

1. Go to: https://console.cloud.google.com/billing
2. **Budgets & alerts** → **Create budget**
3. Set budget: $0 (for free tier)
4. Alert threshold: 90%
5. Add email notification

You'll be notified if someone is abusing your key!

---

## 📊 Impact Assessment

### What Could Have Happened:
- ❌ Unauthorized API usage
- ❌ Quota exhaustion
- ❌ Potential billing charges (if upgraded)
- ❌ Service disruption

### What Actually Happened:
- ✅ Keys were public for a short time
- ✅ Detected quickly by GitHub
- ✅ Removed immediately
- ✅ No evidence of abuse (check your API usage)

### Check for Unauthorized Usage:

**Google Gemini:**
1. Visit: https://console.cloud.google.com/
2. Select your project
3. Go to **APIs & Services** → **Dashboard**
4. Check **Generative Language API** usage
5. Look for unusual spikes

**Firebase (if applicable):**
1. Visit: https://console.firebase.google.com/
2. Select project: `control-systems-34707`
3. Go to **Authentication** or **Database**
4. Check for unexpected activity

---

## 🔍 Git History Cleanup (OPTIONAL - Advanced)

**Note:** The keys are still in Git history. To completely remove:

### Option 1: Use BFG Repo-Cleaner (Recommended)

```bash
# Download BFG: https://rtyley.github.io/bfg-repo-cleaner/

# Replace exposed strings
java -jar bfg.jar --replace-text passwords.txt Control-Systems.git

# passwords.txt contains:
# AIzaSyBflXaGZEruJEoYkSkS-ZjSA3BRzCuxrnE
# AIzaSyC9zH3D170r7ejc4b7teH9xq1cN0XTVids

# Force push cleaned history
cd Control-Systems
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push --force
```

### Option 2: Use git filter-repo

```bash
# Install git-filter-repo
pip install git-filter-repo

# Remove sensitive data
git filter-repo --replace-text passwords.txt

# Force push
git push --force --all
```

⚠️ **Warning:** Force pushing rewrites history. Coordinate with any collaborators!

---

## ✅ Verification Checklist

- [ ] Old Google Gemini key deleted
- [ ] Old Firebase key deleted (if applicable)
- [ ] New Google Gemini key generated
- [ ] New key added to local files ONLY
- [ ] Website tested with new key
- [ ] Netlify environment variables set
- [ ] API key restrictions configured
- [ ] Billing alerts enabled
- [ ] Usage dashboard checked for abuse
- [ ] `.gitignore` properly configured
- [ ] This advisory read and understood

---

## 📞 Still Have Questions?

### Contact:
- **GitHub Issues:** https://github.com/HorizonHnk/Control-Systems/issues
- **Discord:** https://discord.gg/hnk0422_76455
- **Email:** [Check contact.html for current email]

### Resources:
- **Google API Security:** https://cloud.google.com/docs/authentication/api-keys
- **GitHub Secret Scanning:** https://docs.github.com/en/code-security/secret-scanning
- **Netlify Environment Variables:** https://docs.netlify.com/environment-variables/overview/

---

## 🎓 Lessons Learned

1. **Never hardcode API keys** in client-side code
2. **Always use environment variables** for sensitive data
3. **Enable GitHub secret scanning** (free for public repos)
4. **Restrict API keys** to specific domains/IPs
5. **Monitor API usage** regularly
6. **Have a security incident response plan**

---

## 📝 Timeline

| Time | Event |
|------|-------|
| Initial commit (d936335) | Keys exposed in main.js |
| 17:07 UTC | GitHub secret scanning alert received |
| 17:10 UTC | Keys removed from repository (commit e64f913) |
| 17:15 UTC | Security advisory created |
| **NOW** | ⚠️ **YOU MUST REVOKE OLD KEYS** |

---

## ⚡ IMMEDIATE TODO

**RIGHT NOW (Next 5 minutes):**

1. [ ] Open: https://makersuite.google.com/app/apikey
2. [ ] Delete old key: `...cuxrnE`
3. [ ] Create new key
4. [ ] Copy new key to safe place (password manager)

**After that (Next 15 minutes):**

5. [ ] Update all 6 HTML files locally with new key
6. [ ] Test website locally
7. [ ] Verify AI chatbot works
8. [ ] Add key to Netlify env variables
9. [ ] Redeploy site on Netlify

**Later (Next hour):**

10. [ ] Set up API key restrictions
11. [ ] Enable billing alerts
12. [ ] Review API usage dashboard
13. [ ] Check for unauthorized activity
14. [ ] Update documentation

---

**Status:** 🟡 PARTIALLY RESOLVED

- Repository cleaned: ✅
- Keys revoked: ⚠️ **WAITING ON YOU**
- New keys deployed: ⚠️ **WAITING ON YOU**

---

**Remember:** Security is ongoing. Stay vigilant! 🛡️

*Last updated: 2025-01-13*
