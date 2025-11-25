# 🚀 Nihal Parmar - Portfolio Website

A modern, responsive, and optimized portfolio website built with React 18, showcasing projects, certifications, articles, and professional information.

![React](https://img.shields.io/badge/React-18.0.0-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.1.3-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, responsive design with smooth animations
- ⚡ **Performance Optimized** - Lazy loading, code splitting, and memoization
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🔍 **SEO Optimized** - Meta tags, structured data, and Open Graph
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎯 **Error Handling** - Comprehensive error boundaries and user feedback
- 🚀 **Fast Loading** - Optimized images and lazy loading
- 🎭 **Smooth Animations** - AOS (Animate On Scroll) library integration

## 🛠️ Tech Stack

### Core Technologies
- **React 18.0.0** - UI Framework
- **React Router DOM 6.3.0** - Routing (configured)
- **Bootstrap 5.1.3** - CSS Framework
- **SCSS/SASS** - CSS Preprocessor

### Key Libraries
- **AOS (Animate On Scroll)** - Scroll animations
- **Swiper 7.4.1** - Image carousels
- **React Icons** - Icon library
- **Font Awesome** - Additional icons

### Backend
- **Firebase Realtime Database** - Contact form submissions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**
- **Git**

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/itznihal/nihal_portfolio.git
   cd nihal_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration** (Optional)
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_FIREBASE_DATABASE_URL=https://your-firebase-url/reactcontactform.json
   REACT_APP_GITHUB_USERNAME=itznihal
   REACT_APP_EMAIL=itznihal143@gmail.com
   REACT_APP_PHONE=(+91)8980452333
   ```

### Development

1. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

2. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The page will reload automatically when you make changes

### Building for Production

1. **Create production build**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Test production build locally**
   ```bash
   npm install -g serve
   serve -s build
   ```

## 📁 Project Structure

```
portfolio-nihal-2025/
├── public/                 # Static files
│   ├── index.html         # HTML template
│   └── manifest.json      # PWA manifest
│
├── src/
│   ├── Client/
│   │   ├── HomePage/      # Hero section
│   │   ├── AboutPage/     # About section
│   │   ├── ProjectsPage/  # Projects showcase
│   │   ├── CertificationsPage/ # Certifications
│   │   ├── ArticlesPage/  # Articles/blog posts
│   │   ├── ResumePage/    # Resume section
│   │   ├── ContactPage/   # Contact form
│   │   ├── NavbarPage/    # Navigation bar
│   │   ├── SideBarPage/   # Social media sidebar
│   │   ├── FooterPage/    # Footer
│   │   ├── Data/          # Static data files
│   │   └── Images/        # Image assets
│   │
│   ├── App.js             # Main app component
│   ├── App.css            # App styles
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
│
├── package.json           # Dependencies
├── firebase.json          # Firebase config
└── README.md             # This file
```

## 🎨 Customization

### Updating Content

All content is stored in data files located in `src/Client/Data/`:

- **Personal Info**: `HomeAndAboutPageData.js`
- **Projects**: `ProjectPageData.js`
- **Certificates**: `CertificatePageData.js`
- **Articles**: `ArticlePageData.js`
- **Resume Info**: `ResumePageData.js`
- **Contact Info**: `ContactPageData.js`
- **Footer**: `FooterPageData.js`

### Styling

- Component styles: Each component has its own `.scss` file
- Global styles: `src/index.css` and `src/App.css`
- Bootstrap: Customize via SCSS variables or override classes

### Images

- Add images to `src/Client/Images/`
- Use appropriate folders for organization
- Optimize images before adding (recommended: WebP format)

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Realtime Database
3. Update `.env` with your Firebase URL:
   ```env
   REACT_APP_FIREBASE_DATABASE_URL=https://your-project.firebaseio.com/reactcontactform.json
   ```

### SEO Configuration

Update meta tags in `public/index.html`:
- Title
- Description
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)

## 📱 Features Breakdown

### Sections

1. **Home** - Hero section with name and description
2. **About** - Personal introduction and achievements
3. **Projects** - Portfolio projects with image carousels
4. **Certifications** - Certificates and achievements
5. **Articles** - Published blog posts and articles
6. **Resume** - Resume section with download link
7. **Contact** - Contact form and information
8. **Footer** - Copyright and social links

### Performance Optimizations

- ✅ React.lazy() for code splitting
- ✅ React.memo() for component memoization
- ✅ useMemo() and useCallback() for expensive operations
- ✅ Image lazy loading
- ✅ Optimized bundle size
- ✅ Error boundaries for error handling

### Accessibility Features

- ✅ Semantic HTML
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Focus management
- ✅ Alt text for images

## 🚀 Deployment

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase** (if not already done)
   ```bash
   firebase init
   ```

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Other Hosting Options

- **Netlify**: Connect GitHub repo and auto-deploy
- **Vercel**: Connect GitHub repo and auto-deploy
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3 + CloudFront**: Manual deployment

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 📊 Performance Metrics

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: Optimized with code splitting

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Nihal Parmar**

- GitHub: [@itznihal](https://github.com/itznihal)
- LinkedIn: [Nihal Parmar](https://www.linkedin.com/in/nihal-parmar-2924411b7/)
- Medium: [@itznihal](https://itznihal.medium.com/)
- Email: itznihal143@gmail.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Framework
- [Bootstrap](https://getbootstrap.com/) - CSS Framework
- [AOS](https://michalsnik.github.io/aos/) - Animation library
- [Swiper](https://swiperjs.com/) - Carousel library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## 📚 Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- [Create React App Documentation](https://create-react-app.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)

## 🐛 Known Issues

None at the moment. If you find any issues, please [open an issue](https://github.com/itznihal/nihal_portfolio/issues).

## 🔄 Changelog

### Version 2.0.0 (Current)
- ✅ Upgraded to React 18
- ✅ Added error boundaries
- ✅ Implemented lazy loading
- ✅ Optimized performance with memoization
- ✅ Improved accessibility
- ✅ Enhanced SEO
- ✅ Better error handling
- ✅ Code optimization and cleanup

### Version 1.0.0
- Initial release

---

**Made with ❤️ by Nihal Parmar**
