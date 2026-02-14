# Dinesh Kumar Peddakotla - Portfolio Website

A modern, responsive portfolio website showcasing test automation engineering expertise, project experience, and technical skills.

## 🎯 Overview

This is a personal portfolio website built with **pure HTML, CSS, and JavaScript** (no frameworks or build tools). It highlights expertise in:
- Test automation frameworks (Selenium, Playwright, Cypress)
- BDD and hybrid automation architectures (Cucumber, Reqnroll)
- API testing (Rest Assured, Postman)
- Performance testing (JMeter)
- CI/CD integration (Jenkins, Azure DevOps, AKS)
- Mobile automation (Appium)

**Currently working at:** SafeSend Technologies (Thomson Reuters) as QA Engineer with 4+ years of experience in automation and manual testing.

## 🌐 Live Site

[dineshportfolio.netlify.app](https://dineshportfolio.netlify.app)

## ✨ Features

### Multi-Page Structure
- **index.html** - Main portfolio with hero, about, skills, experience, projects, education
- **contact.html** - Contact form with Formspree integration
- **thank-you.html** - Form submission confirmation

### Interactive Elements
- **Floating Navigation** - Appears on scroll (threshold: 400px) for quick section access
- **Project Carousel** - Browse 5 detailed projects with prev/next navigation
- **Tool Carousel** - Explore 11 automation tools with descriptions
- **Responsive Design** - Mobile-first layout optimized for all devices
- **Smooth Scrolling** - Enhanced UX with smooth scroll behavior

### Contact Integration
- **Formspree** backend for form submissions
- Email validation
- Spam prevention (hidden honeypot field)
- Auto-redirect to thank-you page after submission

## 📁 Project Structure

```
dinesh_portfolio_site/
├── index.html              # Main portfolio page
├── contact.html            # Contact form page
├── thank-you.html          # Form confirmation page
├── css/
│   └── style.css           # All styling (562 lines, single file)
├── js/
│   └── script.js           # Interactive behaviors
├── images/                 # Portfolio images
│   ├── hero.png
│   ├── tools.png
│   ├── linkedin.png
│   ├── github.png
│   └── ...
├── .github/
│   └── copilot-instructions.md  # AI assistant guidelines
└── README.md               # This file
```

## 🎨 Design & Styling

### Color Palette
```css
--primary: #081C3A          /* Dark Blue */
--secondary: #1E3D66        /* Medium Blue */
--accent: #00A6FB           /* Bright Blue */
--light: #F5F7FA            /* Light Gray */
--text: #1A1A1A             /* Dark Text */
```

### Layout Conventions
- Flexbox-based `.container` class for responsive grid
- `.section` and `.card` patterns for consistent component styling
- `.skill-card` grid for skills (6 columns on desktop, responsive on mobile)
- CSS variables for theming and easy color updates

## 🛠️ Technologies Used

### Automation & Testing
- **Selenium** - Web automation framework
- **Playwright** - Modern browser automation (.NET & JavaScript)
- **Cypress** - End-to-end testing framework
- **Cucumber** - BDD behavior-driven testing
- **Reqnroll** - BDD framework for .NET
- **Rest Assured** - API testing library
- **JMeter** - Performance & load testing
- **Appium** - Mobile automation
- **Postman** - API development and testing

### CI/CD & DevOps
- **Jenkins** - Automation server
- **Azure DevOps** - CI/CD pipelines and test management
- **AKS** - Azure Kubernetes Service
- **Maven/Gradle** - Build tools
- **Git/GitLab/Bitbucket/Azure Repos** - Version control

### IDEs & Tools
- **Visual Studio** - C# .NET development
- **IntelliJ IDEA** - Java development
- **VS Code** - Code editor
- **GitHub Copilot** - AI-assisted development
- **Browserstack** - Cross-browser testing

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Responsive styling with media queries
- **Vanilla JavaScript** - No frameworks, pure DOM manipulation

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor for modifications

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/dineshkumarpeddakotla/dinesh_portfolio_site.git
cd dinesh_portfolio_site
```

2. Open in a browser (no build process required):
```bash
# Using Python 3
python3 -m http.server 8000

# Or using Node.js http-server
npx http-server

# Or simply double-click index.html
```

3. Visit `http://localhost:8000` (or file path if opened directly)

### Making Changes

#### Update Skills
1. Open `index.html`
2. Find the `.skills-grid` section
3. Copy a `.skill-card` div and modify:
   - Image source in `<img>`
   - Title in `<h3>`
   - List items in `<ul>`

#### Add New Project
1. Open `index.html`
2. Find `.project-slides` container
3. Append a new `.project-slide` div with:
   - Project title and description
   - Tools & contributions list
4. Carousel auto-detects new slides

#### Update Colors
1. Open `css/style.css`
2. Modify `:root` CSS variables (lines 6-11):
```css
:root {
  --primary: #081C3A;      /* Change here */
  --secondary: #1E3D66;
  /* ... */
}
```

## 📋 Key Sections

### Hero Section
- Full-width banner with background image
- Main heading and professional tagline
- Call-to-action button linking to contact

### About
- Professional summary highlighting expertise
- Emphasis on automation frameworks and AI-assisted development

### Technical Skills
Six skill cards covering:
1. **Tools & Frameworks** - Selenium, Playwright, Cypress, Cucumber, Reqnroll, JMeter, Appium
2. **Languages & Databases** - Java, JavaScript, JSON, C# .NET, SQL
3. **CI/CD & Tools** - Jenkins, Azure DevOps, Maven, Gradle, Git platforms, Azure Repos
4. **Testing & Methodologies** - BDD, hybrid frameworks, regression, performance testing
5. **Management & Version Control** - JIRA, Asana, QASE, Zephyr, Azure DevOps
6. **Domain & IDE** - E-commerce, ERP, Taxation, Gaming, Payment Gateway, Visual Studio, GitHub Copilot

### Tool Carousel
11 interactive slides with descriptions:
- Selenium, Rest Assured, Cypress, Postman, Cucumber, TestNG, Playwright, JMeter, Appium, Reqnroll, Azure DevOps

### Experience
Two roles with bullet points:
1. **SafeSend Technologies** (Mar 2025 - present) - Current QA Engineer role
2. **Blazeclan Technologies** (Aug 2021 - Mar 2025) - Previous role with multiple clients

### Projects
Five detailed project case studies:
1. **SafeSend Technologies** - Tax & Compliance Platform
2. **Optty** - Payment Aggregator (Blazeclan)
3. **Quantum Gaming** - Gaming Platform
4. **Camilla** - Fashion E-commerce Platform
5. **Ultra Tech** - Test Automation Project

### Education & Certifications
- **Degree:** B.Tech Computer Science (2019, CGPA 8.07)
- **Certifications:** ISTQB Foundation, AWS Cloud Practitioner, Azure Fundamentals (AZ-900)

### Contact
- Email: dineshkumar.icon@gmail.com
- Phone: +91 9542409637
- Location: Anantapur, Andhra Pradesh, India
- Social links: LinkedIn, GitHub

## 🎯 JavaScript Functionality

### Three Independent Modules in `script.js`

#### 1. Floating Navigation Toggle
```javascript
// Shows/hides .floating-nav when scrollY > 400px
// Listens to scroll events
```
- Always visible on contact.html
- Appears on scroll on index.html
- Smooth visibility toggle with CSS classes

#### 2. Project Carousel
```javascript
// Cycles .project-slide elements
// Prev/next button navigation
// Uses modulus arithmetic for safe looping: (index - 1 + length) % length
```

#### 3. Tool Carousel
```javascript
// Cycles .tool-slide elements
// Prev/next button navigation
// Auto-detects slides and initializes
```

## 📝 Responsive Design Approach

- **Mobile-first** CSS structure
- **Flexbox** layout system (no CSS Grid to maintain simplicity)
- **Media queries** for tablet and desktop breakpoints
- **Non-breaking spaces** in headings (`&nbsp;`) to preserve line breaks
- **Viewport meta tag** for proper mobile scaling

## 🔗 Cross-Page Navigation

- Links from contact.html to index.html use: `href="index.html#section-id"`
- Breadcrumb navigation on contact page: `<a href="index.html">Home</a> / <span>Contact</span>`
- All social links open in new tabs: `target="_blank"`

## 📧 Contact Form Integration

- **Backend:** Formspree (formspree.io/f/mgvzlwvw)
- **Method:** POST to Formspree endpoint
- **Spam Prevention:** Hidden `_honey` field
- **Success Redirect:** `_next` field points to thank-you.html
- **Fields:** Name, Email, Subject, Message (all form-validated)

## 🌐 Deployment

### Netlify (Current)
The portfolio is deployed on Netlify with auto-deployment from git pushes.

**Deploy URL:** https://dineshportfolio.netlify.app

To deploy your own:
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: (none - static site)
4. Set publish directory: `/` (root)

### Other Options
- **GitHub Pages** - Free, no configuration needed
- **Vercel** - Fast deployment, edge functions
- **Firebase Hosting** - Google's static hosting
- **AWS S3 + CloudFront** - Scalable CDN delivery

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚠️ Known Constraints

1. **No Build System** - Changes deploy directly (no minification/optimization)
2. **Single CSS File** - All styling in one file for simplicity
3. **Vanilla JavaScript** - No framework dependencies to manage
4. **Static Site** - No backend required; form submissions via Formspree
5. **Fixed Scroll Threshold** - Floating nav appears at 400px hardcoded in `script.js`
6. **Images Required** - Portfolio relies on image assets in `images/` folder for full visual experience

## 🔧 Common Customizations

### Change Resume/CV Link
1. Open `index.html`
2. Find the CTA button and update `href`

### Update Social Links
1. Open `index.html` and `contact.html`
2. Update LinkedIn and GitHub URLs in social links section

### Modify Form Endpoint
1. Open `contact.html`
2. Change Formspree endpoint in form `action` attribute

### Adjust Scroll Threshold
1. Open `js/script.js`
2. Change `400` in `if (window.scrollY > 400)` to desired pixel value

## 📞 Contact & Social

- **Email:** dineshkumar.icon@gmail.com
- **Phone:** +91 9542409637
- **LinkedIn:** [dineshkumarpeddakotla](https://www.linkedin.com/in/dineshkumarpeddakotla)
- **GitHub:** [dineshkumarpeddakotla](https://github.com/dineshkumarpeddakotla)
- **Location:** Anantapur, Andhra Pradesh, India

## 📄 License

This portfolio is open source and available for personal use. Feel free to fork and customize for your own portfolio.

## 🤝 Contributing

Have suggestions or improvements? Feel free to:
- Open an issue for bugs or feature requests
- Submit a pull request with improvements
- Share feedback via email or LinkedIn

## 📚 Additional Resources

- [AI Coding Agent Instructions](.github/copilot-instructions.md) - Guidelines for AI assistants working with this codebase
- [HTML5 Specification](https://html.spec.whatwg.org/)
- [CSS3 Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [JavaScript DOM APIs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

---

**Last Updated:** February 14, 2026  
**Version:** 1.0  
**Status:** Active & Maintained
