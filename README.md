# 🚀 Professional Portfolio Website

A stunning, modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features advanced animations, 3D elements, and a professional design.

![Portfolio Preview](https://via.placeholder.com/800x400/1e293b/06b6d4?text=Professional+Portfolio)

## ✨ Features

- **Modern Design**: Professional UI with glassmorphism effects
- **Advanced Animations**: Smooth Framer Motion animations and transitions
- **3D Elements**: Interactive Three.js background with floating geometries
- **Particle System**: Dynamic particle background with connecting lines
- **Typewriter Effect**: Animated text with multiple rotating titles
- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Lazy loading, intersection observers, and optimized assets
- **Accessibility**: WCAG 2.1 AA compliant with proper focus management
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Lucide React
- **Performance**: React Intersection Observer, Lazy Loading

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

## 🚀 Quick Start

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
\`\`\`

### 2. Install Dependencies

Using npm:
\`\`\`bash
npm install
\`\`\`

Using yarn:
\`\`\`bash
yarn install
\`\`\`

### 3. Start Development Server

Using npm:
\`\`\`bash
npm run dev
\`\`\`

Using yarn:
\`\`\`bash
yarn dev
\`\`\`

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📁 Project Structure

\`\`\`
portfolio-website/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   ├── hero-enhanced.tsx        # Enhanced hero section
│   ├── particle-background.tsx  # Particle animation
│   ├── typewriter-effect.tsx    # Typewriter animation
│   ├── professional-about.tsx   # About section
│   ├── premium-skills.tsx       # Skills section
│   ├── projects.tsx             # Projects showcase
│   ├── experience.tsx           # Work experience
│   ├── achievements.tsx         # Achievements section
│   ├── leetcode-stats.tsx       # LeetCode statistics
│   ├── contact.tsx              # Contact form
│   ├── navigation.tsx           # Navigation menu
│   ├── three-scene-optimized.tsx # 3D background
│   ├── lazy-wrapper.tsx         # Lazy loading wrapper
│   ├── intersection-wrapper.tsx # Intersection observer
│   └── performance-monitor.tsx  # Performance monitoring
├── data/                        # Data files
│   └── portfolio.json           # Portfolio content
├── public/                      # Static assets
│   ├── manifest.json           # PWA manifest
│   └── ...                     # Images, icons, etc.
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
\`\`\`

## ⚙️ Configuration

### 1. Personal Information

Edit \`data/portfolio.json\` to customize your portfolio content:

\`\`\`json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "subtitle": "Your tagline or description",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your City, Country",
    "avatar": "/your-photo.jpg",
    "resume": "/your-resume.pdf",
    "social": {
      "github": "https://github.com/yourusername",
      "linkedin": "https://linkedin.com/in/yourusername",
      "twitter": "https://twitter.com/yourusername",
      "website": "https://yourwebsite.com",
      "leetcode": "https://leetcode.com/yourusername"
    }
  }
}
\`\`\`

### 2. Add Your Images

Place your images in the \`public\` directory:

- \`public/your-photo.jpg\` - Your profile photo
- \`public/your-resume.pdf\` - Your resume file
- \`public/project-images/\` - Project screenshots

### 3. Customize Colors

Edit \`tailwind.config.ts\` to change the color scheme:

\`\`\`typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom colors
        }
      }
    }
  }
}
\`\`\`

## 🎨 Customization

### Changing Animations

Modify animation settings in component files:

\`\`\`typescript
// Example: Adjust animation duration
transition={{ duration: 0.8, delay: 0.2 }}
\`\`\`

### Adding New Sections

1. Create a new component in \`components/\`
2. Add it to \`app/page.tsx\`
3. Update navigation in \`components/navigation.tsx\`

### Modifying 3D Elements

Edit \`components/three-scene-optimized.tsx\` to:
- Change 3D object colors
- Adjust animation speeds
- Add new geometric shapes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Optimization

### Built-in Optimizations

- **Lazy Loading**: Components load as they enter viewport
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for better performance
- **Intersection Observer**: Efficient scroll-based animations
- **Debounced Scroll**: Optimized scroll event handling

### Performance Monitoring

Development mode includes a performance monitor. Toggle it with the gauge icon in the bottom-right corner.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Deploy to Netlify

1. Build the project:
   \`\`\`bash
   npm run build
   \`\`\`

2. Deploy the \`out\` directory to Netlify

### Deploy to Other Platforms

The portfolio works with any static hosting service that supports Next.js.

## 🔧 Development

### Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint

### VS Code Setup

Recommended extensions:

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- Auto Rename Tag

### Environment Variables

Create \`.env.local\` for environment variables:

\`\`\`
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
\`\`\`

## 🐛 Troubleshooting

### Common Issues

**1. Three.js errors:**
\`\`\`bash
npm install --save-dev @types/three
\`\`\`

**2. Tailwind styles not working:**
Check \`tailwind.config.ts\` content paths

**3. Animation performance issues:**
Reduce particle count in \`particle-background.tsx\`

**4. Build errors:**
\`\`\`bash
npm run lint
npm run build
\`\`\`

### Getting Help

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Framer Motion docs](https://www.framer.com/motion/)
- Open an issue on GitHub

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you need help setting up or customizing your portfolio:

- 📧 Email: your.email@example.com
- 💬 GitHub Issues: [Create an issue](https://github.com/yourusername/portfolio-website/issues)
- 🐦 Twitter: [@yourusername](https://twitter.com/yourusername)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Three.js](https://threejs.org/) - 3D graphics library
- [Lucide](https://lucide.dev/) - Icon library

---

**Made with ❤️ and lots of ☕**

*Happy coding! 🚀*
