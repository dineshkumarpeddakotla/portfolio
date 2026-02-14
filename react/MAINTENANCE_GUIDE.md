# Portfolio Maintenance & Update Guide

## Quick Start

### Starting Development
```bash
cd /Users/dineshkumarp/Documents/dinesh_portfolio_site\ \(3\)/react
npm install          # Install dependencies (first time only)
npm run dev         # Start development server
```

Development server will run at `http://localhost:3000` with HMR enabled.

### Building for Production
```bash
npm run build       # Create optimized build
npm run preview     # Preview production build locally
```

## Making Common Updates

### 1. Update Personal Information

**Location**: Various component files
- **Hero Section**: `src/pages/Hero.tsx` - Update h1, tagline, summary
- **About Section**: `src/pages/About.tsx` - Update about text
- **Skills Section**: `src/pages/Skills.tsx` - Add/remove skill categories
- **Experience Section**: `src/pages/Experience.tsx` - Add job entries
- **Projects Section**: `src/pages/Projects.tsx` - Add/remove projects
- **Education Section**: `src/pages/Education.tsx` - Update education details
- **Contact Section**: `src/pages/Contact.tsx` - Update contact info and links

### 2. Update Colors

All colors are in CSS variables in `src/index.css`:

```css
:root {
  --primary: #081C3A;      /* Change dark blue */
  --secondary: #1E3D66;    /* Change medium blue */
  --accent: #00A6FB;       /* Change bright blue */
  --light: #F5F7FA;        /* Change light background */
  --text: #1A1A1A;         /* Change text color */
}
```

Update these values and all components will automatically update via CSS variable inheritance.

### 3. Update Navigation Links

**File**: `src/components/Navigation.tsx`

```jsx
<nav>
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    {/* Add more links */}
  </ul>
</nav>
```

Links use anchor (#) based routing for smooth scrolling.

### 4. Add New Section

**Steps**:
1. Create new component in `src/pages/NewSection.tsx`
2. Create styling in `src/styles/NewSection.css`
3. Import in `src/App.tsx`
4. Add to main render and navigation

**Example**:
```tsx
// src/pages/Blog.tsx
export default function Blog() {
  return (
    <section id="blog">
      <h2>Blog</h2>
      {/* Content here */}
    </section>
  );
}
```

```tsx
// src/App.tsx
import Blog from './pages/Blog';

function App() {
  return (
    <main>
      {/* Other sections */}
      <Blog />
    </main>
  );
}
```

### 5. Update Images

**Asset Location**: `public/images/`

1. Add new images to `public/images/`
2. Reference in components: `<img src="/images/filename.png" />`
3. No need to import - Vite serves public folder automatically

### 6. Update Social Media Links

**File**: `src/pages/Contact.tsx`

```jsx
<div className="social-links">
  <a href="https://linkedin.com/in/yourprofile" target="_blank">
    <img src="/images/linkedin.png" alt="LinkedIn" />
  </a>
  <a href="https://github.com/yourprofile" target="_blank">
    <img src="/images/github.png" alt="GitHub" />
  </a>
</div>
```

## CSS Customization

### 1. Change Section Background

In `src/App.css`, update:
```css
section:nth-child(even) {
  background-color: #f9f9f9;  /* Change even sections */
}

section:nth-child(odd) {
  background-color: #fff;     /* Change odd sections */
}
```

### 2. Adjust Spacing

Change padding in section base styles:
```css
section {
  padding: 4rem 2rem;  /* Increase/decrease vertical and horizontal padding */
}
```

### 3. Modify Hover Effects

Each component has hover effects. Example in `src/styles/Skills.css`:
```css
.skill-card:hover {
  transform: translateY(-8px);              /* Change move distance */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);  /* Change shadow */
}
```

### 4. Adjust Animations

Animations defined in `src/index.css`:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);  /* Change movement */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 5. Update Typography

In component CSS files:
```css
h2 {
  font-size: 2rem;        /* Change heading size */
  font-weight: 700;       /* Change weight */
  letter-spacing: 0.5px;  /* Adjust spacing */
}
```

## Responsive Design Modifications

### Adding New Breakpoint

In `src/App.css` or component CSS:
```css
@media (max-width: 768px) {
  /* Mobile styles */
}

@media (max-width: 600px) {
  /* Extra small screens */
}

@media (min-width: 1440px) {
  /* Large screens */
}
```

### Adjusting Mobile Padding

Each CSS file has mobile section:
```css
@media (max-width: 768px) {
  section {
    padding: 2.5rem 1.5rem;  /* Reduced from desktop 4rem 2rem */
  }
}
```

## Performance Optimization

### 1. Image Optimization

Convert images to WebP format:
```bash
# Using ImageMagick
convert image.png -quality 85 image.webp
```

Update HTML to use WebP with fallback:
```jsx
<picture>
  <source srcSet="/images/hero.webp" type="image/webp" />
  <img src="/images/hero.png" alt="Hero" />
</picture>
```

### 2. Add Image Lazy Loading

```jsx
<img src="/images/skill.png" alt="Skill" loading="lazy" />
```

### 3. Minify CSS

Vite automatically minifies on build. Check output:
```bash
npm run build
# Check dist/ folder for optimized files
```

### 4. Code Splitting

For large projects, split components:
```tsx
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./pages/Projects'));

<Suspense fallback={<div>Loading...</div>}>
  <Projects />
</Suspense>
```

## Troubleshooting

### Issue: HMR Not Working
**Solution**: Restart dev server
```bash
# Stop: Ctrl+C
npm run dev
```

### Issue: CSS Not Updating
**Solution**: 
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R)
3. Restart dev server

### Issue: Images Not Loading
**Solution**:
1. Verify image path: `/images/filename.png`
2. Check image exists in `public/images/`
3. Check browser console for errors

### Issue: TypeScript Errors
**Solution**:
1. Run `tsc --noEmit` to check
2. Verify import paths
3. Check component prop types

### Issue: Build Failing
**Solution**:
1. Check console for error messages
2. Run `npm run lint` to check code
3. Delete `node_modules` and `npm install`
4. Check `vite.config.ts` configuration

## GitHub Integration

### 1. Initialize Repository
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

### 2. Create GitHub Pages Deploy

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Update package.json scripts
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### 3. GitHub Actions (Auto Deploy)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-artifact@v2
        with:
          name: dist
          path: dist/
```

## Adding Features

### 1. Dark Mode

Add to `src/index.css`:
```css
html[data-theme="dark"] {
  --primary: #1a1a2e;
  --secondary: #16213e;
  --accent: #0f3460;
  --light: #0f0f0f;
  --text: #f0f0f0;
}
```

Toggle in Navigation:
```tsx
<button onClick={() => {
  document.documentElement.setAttribute(
    'data-theme',
    isDark ? 'light' : 'dark'
  );
}}>
  🌙
</button>
```

### 2. Smooth Scroll Behavior

Add to `src/index.css`:
```css
html {
  scroll-behavior: smooth;
}
```

### 3. Back to Top Button

Create `src/components/BackToTop.tsx`:
```tsx
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  window.addEventListener('scroll', toggleVisibility);

  return visible && (
    <button onClick={() => window.scrollTo(0, 0)}>
      ↑ Back to Top
    </button>
  );
}
```

## Deployment Platforms

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on push

### Netlify

1. `npm run build`
2. Connect to Netlify
3. Deploy `dist` folder

### GitHub Pages

```bash
npm run deploy
```

## Performance Monitoring

### Run Lighthouse Audit

1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Click "Analyze page load"
4. Fix issues reported

### Optimize Score

- ✓ Image optimization
- ✓ Code splitting
- ✓ Remove unused CSS
- ✓ Minify JavaScript
- ✓ Enable compression

## Maintenance Schedule

| Task | Frequency | Notes |
|------|-----------|-------|
| Update dependencies | Monthly | `npm update` |
| Security audit | Monthly | `npm audit` |
| Content updates | As needed | Update info, projects, etc |
| Backup | Monthly | Version control + cloud backup |
| Performance review | Quarterly | Run Lighthouse |
| Browser testing | Quarterly | Test on new versions |

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/index.css` | Global styles, CSS variables |
| `src/App.tsx` | Main app component |
| `src/App.css` | Section base styling |
| `src/pages/*` | Page components |
| `src/styles/*.css` | Component stylesheets |
| `package.json` | Dependencies, scripts |
| `vite.config.ts` | Build configuration |
| `tsconfig.json` | TypeScript configuration |

## Contact & Support

For issues or questions:
1. Check console for errors (F12 → Console)
2. Review relevant component file
3. Check CSS for styling issues
4. Verify responsive design
5. Test in incognito mode

---

**Last Updated**: December 2024
**Version**: 2.0 Complete Redesign
