# Portfolio Project Structure

This document explains the organization of your portfolio project for easy navigation and modification.

## 📁 Folder Organization

```
Portfolio/
├── components/              # React components (each section)
│   ├── Navigation.jsx      # Navigation bar with scroll detection
│   ├── Hero.jsx            # Hero/Landing section
│   ├── About.jsx           # About me section
│   ├── Skills.jsx          # Skills & expertise section
│   ├── Projects.jsx        # Featured projects from GitHub
│   ├── Certifications.jsx  # Certifications section
│   ├── Contact.jsx         # Contact form section
│   ├── Footer.jsx          # Footer section
│   └── LoadingScreen.jsx   # Loading screen component
│
├── config/                 # Configuration files (EDIT THESE)
│   ├── heroConfig.js       # Hero section content (name, role, etc.)
│   ├── aboutConfig.js      # About section content
│   ├── skillsConfig.js     # Skills list and categories
│   ├── certificationsConfig.js  # Your certifications
│   ├── contactConfig.js    # Contact information
│   ├── footerConfig.js     # Footer text
│   └── projectsConfig.js   # GitHub username & repos to show
│
├── constants/              # Reusable constants
│   └── animations.js       # Framer Motion animation variants
│
├── Portfolio.jsx           # Main app component (imports everything)
├── STRUCTURE.md            # This file
└── file.html              # Original file (can be deleted)
```

## 🎨 Component Overview

### Components (`components/` folder)
Each component is independent and focuses on one section:

- **Navigation.jsx** - Sticky navigation with mobile menu
- **Hero.jsx** - Landing section with name, role, and CTA buttons
- **About.jsx** - About me text and highlights
- **Skills.jsx** - Skill categories and individual skills
- **Projects.jsx** - GitHub repositories fetched dynamically
- **Certifications.jsx** - List of certifications
- **Contact.jsx** - Contact form and social links
- **Footer.jsx** - Footer with copyright text
- **LoadingScreen.jsx** - Loading animation

### Configuration Files (`config/` folder)
**These are the files you should edit** to customize your portfolio:

- **heroConfig.js** - Change your name, role, tagline, and buttons
- **aboutConfig.js** - Update about text and highlights
- **skillsConfig.js** - Add/remove skills and categories
- **certificationsConfig.js** - Add your certifications
- **contactConfig.js** - Update email and social links
- **footerConfig.js** - Change footer text
- **projectsConfig.js** - Update GitHub username and number of repos

### Constants (`constants/` folder)
- **animations.js** - Reusable Framer Motion animation variants used across components

## 📝 How to Make Changes

### 1. Update Personal Information
Edit files in the `config/` folder:
```javascript
// config/heroConfig.js
export const heroConfig = {
  name: "Your Name",           // Change this
  role: "Your Role",           // Change this
  tagline: "Your tagline",     // Change this
  // ... etc
};
```

### 2. Update Skills
```javascript
// config/skillsConfig.js
export const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', ...], // Add/remove skills here
    // ... etc
  }
];
```

### 3. Update Certifications
```javascript
// config/certificationsConfig.js
export const certifications = [
  {
    title: 'Your Certification',
    organization: 'Organization Name',
    year: '2025',
    link: 'https://your-link.com'
  }
  // Add more certifications here
];
```

### 4. Update Contact Info
```javascript
// config/contactConfig.js
export const contactConfig = {
  email: 'your-email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile'
};
```

### 5. Update GitHub Projects
```javascript
// config/projectsConfig.js
export const projectsConfig = {
  GITHUB_USERNAME: 'your-github-username', // Change this
  REPOS_TO_SHOW: 6  // Number of repos to display
};
```

## 🔧 Common Customizations

### Change Colors
- Colors are defined using Tailwind CSS classes
- Look for `from-blue-500` and `to-purple-600` patterns
- Common gradients: `from-blue-500 to-purple-600`
- Edit directly in component files

### Modify Animations
- Animation variants are in `constants/animations.js`
- Framer Motion properties are in component files
- Add `whileHover`, `whileTap` props to customize interactions

### Add New Sections
1. Create a new component in `components/MySection.jsx`
2. Import and add to `Portfolio.jsx`
3. Create a config file if needed

## 📦 Component Dependencies

Each component imports:
- React hooks (`useState`, `useEffect`)
- Framer Motion for animations
- Lucide icons for icons
- Configuration from `config/` folder
- Animation variants from `constants/animations.js`

## 🎯 Quick Reference

| What to Edit | File | Purpose |
|---|---|---|
| Your name, role | `config/heroConfig.js` | Hero section |
| About text | `config/aboutConfig.js` | About section |
| Skills list | `config/skillsConfig.js` | Skills display |
| Certifications | `config/certificationsConfig.js` | Certs section |
| Contact info | `config/contactConfig.js` | Contact section |
| GitHub projects | `config/projectsConfig.js` | Projects section |
| Footer text | `config/footerConfig.js` | Footer |

---

**Happy customizing! 🚀**
