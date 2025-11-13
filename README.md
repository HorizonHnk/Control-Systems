# 🎓 Control Systems Mastery - Engineering Made Simple

[![Live Website](https://img.shields.io/badge/🌐_Live-control--systems.netlify.app-00C7B7?style=for-the-badge)](https://control-systems.netlify.app/)
[![YouTube](https://img.shields.io/badge/YouTube-@HNK2005-FF0000?style=for-the-badge&logo=youtube)](https://www.youtube.com/@HNK2005)
[![Videos](https://img.shields.io/badge/Videos-62-blue?style=for-the-badge)]()
[![Built](https://img.shields.io/badge/Built_in-1_Day-success?style=for-the-badge)]()

> **A comprehensive, free educational platform for mastering Control Systems Engineering with 62 expert video tutorials, AI-powered assistance, and interactive tools.**

**🚀 Developed in just ONE DAY!** This project showcases rapid web development with modern technologies and AI integration.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [API Configuration](#-api-configuration)
- [Project Structure](#-project-structure)
- [Video Content](#-video-content)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Connect](#-connect)

---

## 🌟 Overview

**Control Systems Mastery** is a modern, responsive educational platform designed to help engineering students master Control Systems Engineering. The platform provides:

- **62 comprehensive video tutorials** covering fundamental to advanced concepts
- **AI-powered chatbot assistant** using Google Gemini 2.0 Flash for instant help
- **Interactive calculators and tools** for Laplace transforms, transfer functions, and more
- **Searchable video library** with topic filtering and difficulty levels
- **Mobile-first responsive design** optimized for all devices (320px to 4K+)
- **Mathematical equation rendering** using KaTeX

### Live Website
🔗 **https://control-systems.netlify.app/**

---

## ✨ Features

### 📚 Video Library
- **62 expert tutorials** organized by difficulty (Beginner, Intermediate, Advanced)
- **Topic-based filtering:** Laplace Transforms, Transfer Functions, RLC Circuits, PID Controllers, Root Locus, Stability Analysis, and more
- **Search functionality** across titles, descriptions, and tags
- **Embedded video player** with transcript support
- **Related videos suggestions**

### 🤖 AI Assistant
- **Dual AI capabilities:**
  - Text-based Q&A for instant help with control systems concepts
  - Image analysis for circuit diagrams and handwritten problems
- **Short, concise responses** optimized for learning
- **Mathematical equation support** with KaTeX rendering
- **Context-aware** answers specific to control systems engineering
- **Available on every page** via floating chat widget

### 🎨 User Experience
- **Glass-morphism design** with modern gradient effects
- **Smooth animations** and scroll reveals
- **Responsive navigation** with mobile menu
- **Dark mode compatible** styles
- **Fast loading** with optimized assets
- **SEO optimized** with proper meta tags

### 🛠️ Interactive Tools
- Laplace Transform calculator
- Transfer Function analyzer
- System response simulator
- Frequency response plotter *(coming soon)*
- Bode plot generator *(coming soon)*

---

## 💻 Tech Stack

### Frontend
- **HTML5** - Semantic structure
- **Tailwind CSS** - Utility-first styling via CDN
- **Vanilla JavaScript** - No framework dependencies
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts (Inter + JetBrains Mono)** - Typography

### AI & APIs
- **Google Generative AI (Gemini 2.0 Flash)** - AI chatbot & image analysis
- **KaTeX** - Mathematical equation rendering
- **YouTube Data API** - Video embeddings

### Deployment
- **Netlify** - Static site hosting with continuous deployment
- **GitHub** - Version control and collaboration

### Development Tools
- **VS Code** - Primary IDE
- **Git** - Version control
- **Chrome DevTools** - Debugging and responsive testing

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Google Gemini API key (free tier available)
- Basic understanding of HTML/CSS/JavaScript (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HorizonHnk/Control-Systems.git
   cd "Control-Systems/OKComputer_run the website"
   ```

2. **Configure API Key** (see [API Configuration](#-api-configuration) below)

3. **Open locally**
   - **Option A:** Double-click `index.html` to open in browser
   - **Option B:** Use a local server:
     ```bash
     # Python 3
     python -m http.server 8000

     # Node.js
     npx http-server -p 8000

     # VS Code Live Server extension
     Right-click index.html → "Open with Live Server"
     ```

4. **Access the website**
   ```
   http://localhost:8000
   ```

---

## 🔑 API Configuration

### Google Gemini API Setup

1. **Get your API key:**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Click "Create API Key"
   - Copy your new API key

2. **Add API key to files:**

   Replace `'YOUR_GEMINI_API_KEY_HERE'` with your actual API key in these files:

   - `index.html` (line ~915)
   - `videos.html` (line ~886)
   - `ai-assistant.html` (line ~655)
   - `resources.html` (line ~1114)
   - `contact.html` (line ~828)
   - `about.html` (line ~1013)

   **Example:**
   ```javascript
   // Before
   const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';

   // After
   const GEMINI_API_KEY = 'AIzaSyC...your-actual-key-here';
   ```

3. **⚠️ Security Warning:**
   - **NEVER commit your API keys to public repositories**
   - Use environment variables for production deployments
   - For Netlify: Set API key in Environment Variables dashboard
   - Consider implementing a backend proxy for API calls in production

### Free Tier Limits
- Google Gemini Free Tier: 60 requests/minute
- If quota exceeded, get a new API key or upgrade to paid tier

---

## 📁 Project Structure

```
OKComputer_run the website/
│
├── index.html                 # Home page with hero, features, and CTA
├── videos.html                # Video library with search and filtering
├── ai-assistant.html          # Main AI chatbot page with image analysis
├── resources.html             # Interactive tools and calculators
├── contact.html               # Contact form and social links
├── about.html                 # About the project and creator
│
├── videos-data.js             # All 62 video metadata and transcripts
│
├── README.md                  # This file
│
└── assets/ (optional)
    └── images/                # Project images/screenshots
```

### Key Files

| File | Purpose | Features |
|------|---------|----------|
| `index.html` | Landing page | Hero section, stats counter, YouTube playlist embed, chat widget |
| `videos.html` | Video library | Search, topic filters, difficulty badges, modal player |
| `ai-assistant.html` | AI chatbot | Text & image analysis, math rendering, conversation history |
| `videos-data.js` | Data layer | 62 video objects with titles, descriptions, topics, transcripts |
| `resources.html` | Learning tools | Interactive calculators, formulas, reference materials |
| `contact.html` | Contact page | Social media links, Discord community, contact form |
| `about.html` | About page | Creator bio, project mission, development story |

---

## 🎥 Video Content

### Statistics
- **Total Videos:** 62
- **Total Topics:** 15+
- **Estimated Content:** 42+ hours
- **Difficulty Levels:** Beginner, Intermediate, Advanced

### Topics Covered

#### 🔵 Fundamental Concepts
- Laplace Transforms
- Transfer Functions
- Differential Equations
- Unit Step, Impulse, and Ramp Functions
- Partial Fraction Decomposition

#### 🟣 Circuit Analysis
- RLC Circuit Analysis
- Operational Amplifiers (Op-Amps)
- Integrator and Differentiator Circuits
- Impedance in S-Domain
- KVL and KCL Applications

#### 🟢 Mechanical Systems
- Mass-Spring-Damper Systems
- Force and Vibration Analysis
- Two-Mass Systems
- Equations of Motion
- S-Domain Conversion

#### 🟠 Control Systems Analysis
- **Root Locus** (NEW!)
- PID Controllers
- Stability Analysis
- Damping Ratio and Natural Frequency
- Second-Order System Response
- Block Diagram Simplification

#### 🔴 Advanced Topics
- State-Space Analysis
- Frequency Response
- Bode Plots
- System Stability Criteria
- Multi-Stage Systems

### Video Data Structure
Each video entry in `videos-data.js` contains:
```javascript
{
    id: 62,
    videoId: "Yd0hKzuzvss",
    title: "Finding the Root Locus of a Control System Step-by-Step",
    url: "https://www.youtube.com/watch?v=Yd0hKzuzvss",
    embedUrl: "https://www.youtube.com/embed/Yd0hKzuzvss",
    thumbnail: "https://img.youtube.com/vi/Yd0hKzuzvss/maxresdefault.jpg",
    topics: ["Root Locus", "Transfer Functions", "Poles and Zeros", "Asymptotes"],
    difficulty: "Intermediate",
    description: "Master the root locus plotting technique...",
    transcript: "Complete walkthrough of finding the root locus..."
}
```

### 📺 Complete Video Library

**YouTube Channel:** [@HNK2005](https://www.youtube.com/@HNK2005)
**Complete Playlist:** [Control Systems Mastery - Engineering Made Simple](https://www.youtube.com/playlist?list=PLrZbkNpNVSww_NDEWivJGMEekY40cUpJg)

<details>
<summary><b>🎬 All 62 Video Tutorials (Click to expand)</b></summary>

#### 🔵 Transfer Functions & Laplace Transforms
1. [Solving for Vout with Unit Ramp Input and Transfer Function](https://www.youtube.com/watch?v=7MzlIX4JhXA)
2. [Solving for Vout with Impulse Input and Transfer Function](https://www.youtube.com/watch?v=l_a7eL0lR4g)
3. [Understanding Laplace Transform and Inverse Laplace Transform](https://www.youtube.com/watch?v=vjD8zOV_-3Y)
4. [Applying Initial Conditions with Laplace Transform for Differential Equations](https://www.youtube.com/watch?v=clYQlPOFVjY)
5. [Converting Time Domain to S-Domain in System Analysis | Step-by-Step Process](https://www.youtube.com/watch?v=_B7sd1SivcI)
6. [Solving for Vout Using Partial Fractions and Inverse Laplace Transform](https://www.youtube.com/watch?v=EJWe4I0Sk-s)
7. [Introduction to Partial Fractions and Decomposition Techniques](https://www.youtube.com/watch?v=lYQ0pGONFHg)
8. [Solving for Vout with Unit Step Input and Transfer Function](https://www.youtube.com/watch?v=kdyLpeq3JTM)

#### ⚡ RLC Circuits & Electrical Systems
9. [Solving First-Order Differential Equation in R-L Circuit](https://www.youtube.com/watch?v=4vEjBgz8U-Q)
10. [Electrical Circuit Analysis Basics | RLC Circuits & Impedance in Laplace Domain](https://www.youtube.com/watch?v=mQD0oiXmICY)
11. [Solving for Current and Transfer Function in R-L-C Circuits | Loop Analysis](https://www.youtube.com/watch?v=d1Z7erRr7fw)
12. [Solving for Current and Voltage in R-L-C Circuits | Loop Analysis and Kirchhoff's Law](https://www.youtube.com/watch?v=Bb8UDdNg1Hs)
13. [Solving for Voltage and Current in Parallel R-L-C Circuits | Loop Analysis](https://www.youtube.com/watch?v=75BTLSiQsgQ)
14. [Finding the Transfer Function in R-L Circuits | Step-by-Step Derivation](https://www.youtube.com/watch?v=xtK2RizbGyE)
15. [Solving for Current in R-L Circuits | Using KVL and Laplace Transform](https://www.youtube.com/watch?v=90zEzk2fdWM)
16. [Solving R-C Circuit with Initial Conditions | Time and S-Domain Analysis](https://www.youtube.com/watch?v=5sJVaKBNydY)
17. [Solving Capacitor Loop Circuits | Voltage and Current Analysis with KVL & KCL](https://www.youtube.com/watch?v=hZxTKSzb52U)
18. [Solving for Current in Parallel R-L-C Circuits | Using KVL and Laplace Transform](https://www.youtube.com/watch?v=oEMxeLKmmf0)
19. [Deriving the Transfer Function in Parallel R-C Circuits | Step-by-Step Analysis](https://www.youtube.com/watch?v=hDY-rKN5Ct8)
20. [Solving for Current in R-L Circuits | Using KVL and Laplace Transform](https://www.youtube.com/watch?v=RGOWDN-XH0k)
21. [Finding the Transfer Function in R-L-C Circuits | Step-by-Step Derivation](https://www.youtube.com/watch?v=aYb3ZVrWL6Q)
22. [Deriving the Transfer Function in R-L-C Circuits | Series and Parallel Impedances](https://www.youtube.com/watch?v=4nXSA5Paayw)
23. [Solving for Voltage and Current in R-L-C Circuits | Using KVL and KCL](https://www.youtube.com/watch?v=lTsRpYPUKHo)
24. [How to Solve Loop Circuit Problems | Voltage and Current Analysis](https://www.youtube.com/watch?v=whJs-BVk80k)
25. [Solving for Vout in R-C Circuit with Unit Ramp Input](https://www.youtube.com/watch?v=TlFGCZrozaw)
26. [Solving Loop Circuit Equations | Current Analysis and Laplace Transform](https://www.youtube.com/watch?v=ZZHcWSmLRWM)

#### 🔧 Operational Amplifiers
27. [Solving Complex Transfer Functions in Operational Amplifier Circuits | Step-by-Step Guide](https://www.youtube.com/watch?v=c2UKpabYqz8)
28. [Solving Complex Transfer Functions in Multi-Stage Operational Amplifier Circuits](https://www.youtube.com/watch?v=V-eq821MQRM)
29. [Understanding Operational Amplifiers (Op-Amps) | Amplifying Weak Signals](https://www.youtube.com/watch?v=cbDVX4NcOQE)
30. [Understanding Amplifiers | How Amplifiers Work and Why They're Essential](https://www.youtube.com/watch?v=UwBjEnnZDZ8)
31. [Differentiator Circuit with Operational Amplifiers | Transfer Function & Laplace Transform](https://www.youtube.com/watch?v=5yWY9nRFb5o)
32. [Solving for the Integrator in Operational Amplifiers | Transfer Function Breakdown](https://www.youtube.com/watch?v=iMPjM_o0Vyc)
33. [Transfer Function & V_out in Operational Amplifier Circuits | Parallel Resistor & Capacitor](https://www.youtube.com/watch?v=qljk-wHqIsE)

#### ⚙️ Mechanical Systems
34. [Force in Mechanical Systems | Derivation of the Equation with Mass, Stiffness, and Damping](https://www.youtube.com/watch?v=oNB41eBnuU8)
35. [Single-Mass Mechanical System Analysis | Differential Equations & Force Calculation](https://www.youtube.com/watch?v=z9UiispugMU)
36. [Solving Two-Mass Mechanical Systems | Force & Vibration Analysis](https://www.youtube.com/watch?v=oL_mtycI05c)
37. [Solving Two-Mass Systems | Differential Equations & Force Analysis](https://www.youtube.com/watch?v=fesRRHazjm4)
38. [Solving Two-Mass System Equations | Differential Equations & Vibration Analysis](https://www.youtube.com/watch?v=k9NDblRDEFY)
39. [Solving Two-Mass Systems | Force Equations & Differential Equations](https://www.youtube.com/watch?v=6hIZnLzInRM)
40. [Solving Two-Mass Mechanical Systems | Deriving Equations & S-Domain Conversion](https://www.youtube.com/watch?v=_q5QTGoloT0)
41. [Solving for Force in Mechanical Systems | Equation Derivation and Analysis](https://www.youtube.com/watch?v=boGdI35rbPc)
42. [Solving Two-Mass System Equations | Force, Vibration & Differential Equations](https://www.youtube.com/watch?v=vmE0-Oy4eno)
43. [Solving for Force in Two-Mass Mechanical Systems | Differential Equations and Vibration Analysis](https://www.youtube.com/watch?v=F7qKkoeQ5SY)
44. [Solving Two-Mass System Equations | Vibration Analysis & Differential Equations](https://www.youtube.com/watch?v=-b1OlE0ywTk)
45. [Mechanical System Dynamics | Equations of Motion, Derivatives & S-Domain Conversion](https://www.youtube.com/watch?v=yb5o1FHUY7A)
46. [Solving Two-Mass System Equations | S-Domain Conversion & Force Analysis](https://www.youtube.com/watch?v=1bZq3OM2Kk8)
47. [Modeling Mechanical Systems: Mass, Damper, and Elastic Force with Laplace Transform](https://www.youtube.com/watch?v=2spOFm2orjk)
48. [Solving for Force in Multi-Mass Mechanical Systems | Differential Equations & System Analysis](https://www.youtube.com/watch?v=hItBIPJhHEE)
49. [Solving for Force in Mechanical Systems | Equation Derivation with Mass and Displacement](https://www.youtube.com/watch?v=7OnS7nY8oTI)
50. [Solving for Force in Two-Mass Systems | Differential Equations and Vibration Analysis](https://www.youtube.com/watch?v=NXKaOd2KvIY)
51. [Solving Two-Mass Mechanical Systems | Differential Equations & Force Analysis](https://www.youtube.com/watch?v=me7-icFgo_E)
52. [Solving for Force in Single-Mass Mechanical Systems | Differential Equations & S-Domain Conversion](https://www.youtube.com/watch?v=IZKbQiUwwQ8)
53. [Solving Two-Mass Mechanical System Equations | Differential Equations & Vibration Analysis](https://www.youtube.com/watch?v=WzkSK0rhJAU)
54. [Solving for Force in Mass-Spring-Damper Systems | S-Domain Conversion & Analysis](https://www.youtube.com/watch?v=1466xlaY3W8)

#### 📊 System Analysis & Control
55. [Calculating Damping Ratio and Natural Frequency in Second-Order Systems](https://www.youtube.com/watch?v=hBJrJrKiD64)
56. [Simplifying Blocks in Control Systems: Cascade, Parallel, and Feedback Connections](https://www.youtube.com/watch?v=IAB0MNLRNu8)
57. [Introduction to Differential Equations and First-Order Systems](https://www.youtube.com/watch?v=WyHKabxCyZ8)
58. [Understanding Basic Functions in Dynamic System Analysis](https://www.youtube.com/watch?v=UJyot6qxXwU)
59. [🔍 Understanding Unit Step, Impulse, and Ramp Functions in Signal Processing 📈](https://www.youtube.com/watch?v=m3UssjhuCB0)
60. [Solving Second-Order Differential Equation Using Laplace Transform with Initial Conditions](https://www.youtube.com/watch?v=PsO2vL5MGG8)
61. [Understanding System Response: First and Second Order Systems and Damping Ratio](https://www.youtube.com/watch?v=_2a-w8-olJU)

#### 🎯 Root Locus (NEW!)
62. [Finding the Root Locus of a Control System Step-by-Step | Poles, Zeros & Asymptotes Explained](https://www.youtube.com/watch?v=Yd0hKzuzvss) ⭐ **Latest Video!**

</details>

---

## 🌐 Deployment

### Netlify Deployment

The website is deployed on **Netlify** with continuous deployment from GitHub.

**Live URL:** https://control-systems.netlify.app/

#### Deploy Your Own Instance

1. **Fork the repository** on GitHub

2. **Sign up for Netlify** (free tier available)

3. **Connect your repository:**
   - Click "New site from Git"
   - Choose GitHub
   - Select your forked repository
   - Set build settings:
     - Build command: *leave empty*
     - Publish directory: `OKComputer_run the website`

4. **Set environment variables:**
   - Go to Site Settings → Environment Variables
   - Add: `GEMINI_API_KEY` = your-api-key

5. **Deploy!**
   - Netlify will auto-deploy on every push to main branch

### Alternative Hosting

#### GitHub Pages
```bash
# Enable GitHub Pages in repository settings
# Select branch: main
# Folder: /OKComputer_run the website
```

#### Vercel
```bash
vercel --prod
```

#### Traditional Web Server
- Upload files to your web server via FTP
- Ensure proper MIME types for `.js` and `.html`
- Configure HTTPS for API security

---

## 🎨 Customization Guide

### Branding
1. **Colors:** Edit CSS variables in `<style>` tags:
   ```css
   :root {
       --primary-blue: #1E3A8A;
       --electric-blue: #3B82F6;
       --cyan-accent: #06B6D4;
   }
   ```

2. **Logo:** Replace gradient logo with custom image:
   ```html
   <img src="your-logo.png" alt="Logo" class="w-10 h-10">
   ```

3. **Typography:** Change Google Fonts imports:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap">
   ```

### Adding New Videos
1. Open `videos-data.js`
2. Add new entry to `VIDEOS_DATA` array:
   ```javascript
   {
       id: 63,  // Increment ID
       videoId: "YouTube-Video-ID",
       title: "Your Video Title",
       // ... other fields
   }
   ```
3. Update video count in comments and `index.html`

### AI Prompt Customization
Edit the AI prompts in each HTML file for different response styles:
```javascript
const enhancedPrompt = `You are a [ROLE]. Answer in [STYLE].
Question: ${message}
[ADDITIONAL INSTRUCTIONS]`;
```

---

## 👥 Contributing

Contributions are welcome! Here's how you can help:

### Ways to Contribute
- 🐛 Report bugs via GitHub Issues
- 💡 Suggest new features or improvements
- 📝 Add more video transcripts
- 🌍 Translate to other languages
- 🎨 Improve UI/UX design
- 📚 Add more interactive tools

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly (all screen sizes!)
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style Guidelines
- Use **semantic HTML5** elements
- Follow **Tailwind CSS** utility classes
- Write **clean, commented JavaScript**
- Maintain **mobile-first** responsive design
- Test on **multiple browsers** (Chrome, Firefox, Safari, Edge)
- Ensure **accessibility** (ARIA labels, keyboard navigation)

---

## 📄 License

This project is licensed under the **MIT License** - see below for details.

```
MIT License

Copyright (c) 2025 HNK (Horizon)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🔗 Connect

### Social Media
- 🎥 **YouTube:** [@HNK2005](https://www.youtube.com/@HNK2005)
- 💬 **Discord:** [Join Community](https://discord.gg/hnk0422_76455)
- 🐦 **Twitter/X:** [@HnkHorizon](https://twitter.com/HnkHorizon)
- 📸 **Instagram:** [@hhnk.3693](https://instagram.com/hhnk.3693)
- 🎵 **TikTok:** [@codingfever](https://tiktok.com/@codingfever)

### Repository
- 🌐 **GitHub:** [HorizonHnk/Control-Systems](https://github.com/HorizonHnk/Control-Systems)
- 🐛 **Issues:** [Report a Bug](https://github.com/HorizonHnk/Control-Systems/issues)
- 💡 **Discussions:** [Feature Requests](https://github.com/HorizonHnk/Control-Systems/discussions)

---

## 🙏 Acknowledgments

- **Google Gemini AI** for providing free AI capabilities
- **YouTube** for hosting educational content
- **Netlify** for free static site hosting
- **Tailwind CSS** for rapid styling
- **Font Awesome** for beautiful icons
- **KaTeX** for math rendering
- **The engineering community** for continuous learning and support

---

## 📊 Project Stats

- **Development Time:** 1 Day (24 hours)
- **Lines of Code:** ~10,000+
- **Total Files:** 7 HTML + 1 JS data file
- **Video Content:** 62 tutorials (~42 hours)
- **AI Integration:** Google Gemini 2.0 Flash
- **Responsive Breakpoints:** 5 (320px, 640px, 1024px, 1920px, 4K+)
- **Browser Support:** Chrome, Firefox, Safari, Edge (latest versions)

---

## 🚧 Roadmap

### Coming Soon
- [ ] User authentication and progress tracking
- [ ] Interactive quizzes and assessments
- [ ] Downloadable PDF study guides
- [ ] Advanced calculators (Bode, Nyquist, Root Locus)
- [ ] Mobile app (React Native)
- [ ] Video notes and bookmarking
- [ ] Community forum integration
- [ ] Certificate of completion
- [ ] Multi-language support

### Future Enhancements
- [ ] Dark mode toggle
- [ ] Offline PWA support
- [ ] Video playback speed control
- [ ] Subtitle/closed captions
- [ ] Backend API for user data
- [ ] Integration with MATLAB/Simulink
- [ ] Live coding tutorials
- [ ] Virtual lab environment

---

## 📞 Support

Need help? Here's how to get support:

1. **Check the FAQ** on the website
2. **Search existing issues** on GitHub
3. **Join our Discord** for community help
4. **Open a new issue** for bugs or features
5. **Email:** Available on contact page

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Built with ❤️ by [HNK (Horizon)](https://github.com/HorizonHnk) in ONE DAY**

*Making engineering education accessible to everyone*

[![GitHub Stars](https://img.shields.io/github/stars/HorizonHnk/Control-Systems?style=social)](https://github.com/HorizonHnk/Control-Systems/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/HorizonHnk/Control-Systems?style=social)](https://github.com/HorizonHnk/Control-Systems/network/members)

</div>
