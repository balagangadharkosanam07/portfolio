# Balagangadhar Kosanam — Personal Full-Stack Developer Portfolio

A modern, responsive personal developer portfolio website for **Balagangadhar Kosanam**, a Full-Stack Developer specializing in full-stack web applications, AWS cloud infrastructure, and cybersecurity.

Built with **React.js**, **Vite**, **JavaScript**, and **Plain CSS** (without CSS frameworks like Tailwind or Bootstrap), following clean component architecture and modern web standards.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, JavaScript (ES Modules), HTML5, Plain CSS3 (CSS Variables, Flexbox, CSS Grid)
- **Tooling & Bundler**: Vite
- **Icons**: React Icons (`react-icons`)
- **Contact Service**: `@emailjs/browser` (with client-side validation and fallback)
- **Deployment**: Configured for GitHub & Vercel

---

## 📁 Project Architecture & Folder Structure

```text
portfolio/
├── public/
│   ├── favicon.svg              # Custom BK monogram SVG favicon
│   └── resume.pdf               # Place your resume here when ready
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navigation with scroll spy and mobile drawer
│   │   ├── Hero.jsx             # BK branding, headline, introduction, CTA buttons
│   │   ├── About.jsx            # Background, focus areas (Full-stack, Cloud, Security)
│   │   ├── Skills.jsx           # 6 skill categories with exact levels and tech icons
│   │   ├── Projects.jsx         # PlacementPath & WebSentinel project showcase
│   │   ├── ProjectCard.jsx      # Individual project preview cards with highlights
│   │   ├── ProjectModal.jsx     # Accessible native dialog for architecture deep dives
│   │   ├── Experience.jsx       # Academic focus & internship readiness status
│   │   ├── Education.jsx        # Vasireddy Venkatadri Institute of Technology B.Tech
│   │   ├── Certifications.jsx   # Modular container ready for verified credentials
│   │   ├── Contact.jsx          # Form validation + direct email + EmailJS support
│   │   ├── Footer.jsx           # Dynamic copyright, quick links, back-to-top trigger
│   │   ├── BackToTop.jsx        # Floating smooth scroll-to-top button
│   │   └── SectionTitle.jsx     # Standardized section headings
│   ├── data/
│   │   ├── personalInfo.js      # Contact details, focus areas, and resume flag
│   │   ├── skills.js            # 26 categorized skills across groups A–F with exact levels
│   │   ├── projects.js          # Detailed verified records for PlacementPath & WebSentinel
│   │   ├── experience.js        # Academic focus data and preparation highlights
│   │   ├── education.js         # Degree and specialization information
│   │   └── certifications.js   # Ready for future verified entries
│   ├── styles/
│   │   ├── variables.css        # Centralized theme tokens (primary blue: #2563EB, navy: #0F172A)
│   │   ├── global.css           # Resets, typography, layout containers, accessible focus states
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── skills.css
│   │   ├── projects.css
│   │   ├── projectModal.css
│   │   ├── experience.css
│   │   ├── education.css
│   │   ├── contact.css
│   │   ├── footer.css
│   │   └── backToTop.css
│   ├── App.jsx                  # Main single-page application layout
│   └── main.jsx                 # React root entry point
├── .env.example                 # EmailJS environment variable template
├── .gitignore                   # Excludes node_modules, dist, and local environment files
├── index.html                   # SEO title, meta descriptions, OpenGraph tags
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 2. Local Installation
```bash
# Clone the repository
git clone https://github.com/balagangadharkosanam07/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
# Create an optimized production bundle in the /dist folder
npm run build

# Preview the production build locally
npm run preview
```

---

## ⚙️ Configuration & Customization

### Enabling the Contact Form with EmailJS
1. Sign up for a free account at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service and an Email Template.
3. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
4. Fill in your keys:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
> *Note:* If environment variables are not supplied, the contact form gracefully informs the user and provides a one-click mail client link to email `balagangadharkosanam99@gmail.com` directly. It never simulates fake delivery.

### Adding Your Resume
1. Export your resume as `resume.pdf`.
2. Place `resume.pdf` in the `public/` folder.
3. Open `src/data/personalInfo.js` and set:
   ```javascript
   hasResume: true,
   ```
The **Resume** download button will automatically appear in the Hero section.

### Adding Future Certifications
When you complete verified certifications:
1. Open `src/data/certifications.js`.
2. Set `enabled: true` and populate the `items` array.
The **Certifications** section will automatically render.

---

## 🌐 Deploying to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Balagangadhar Kosanam Developer Portfolio"
   git branch -M main
   git remote add origin https://github.com/balagangadharkosanam07/portfolio.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `portfolio` GitHub repository.
4. Settings are automatically detected by Vercel:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. (Optional) Under **Environment Variables**, add your `VITE_EMAILJS_*` keys if using EmailJS.
6. Click **Deploy**.
