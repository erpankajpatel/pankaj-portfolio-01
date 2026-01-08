# Pankaj Patel - Portfolio Website

A modern, bold, and creative single-page portfolio website showcasing 9+ years of mobile development experience, with a unique focus on leadership and mentoring capabilities.

## Features

- **Modern Design**: Bold, creative design with vibrant gradients and animations
- **Dark/Light Theme**: Full theme support with smooth transitions and persistence
- **Leadership Focus**: Unique Leadership Impact section highlighting team management and mentoring
- **Interactive Elements**: Smooth animations, hover effects, and scroll-triggered reveals
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Performance Optimized**: Fast loading with optimized assets and code splitting

## Technology Stack

- React 19
- Vite
- Framer Motion (animations)
- React Icons
- CSS Variables (theming)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PAPPORTFOLIO
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:

**Option 1: Using the run script (Recommended)**
```bash
# Linux/Mac
./run.sh

# Windows
run.bat
```

**Option 2: Using npm directly**
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment on Vercel

### Automatic Deployment

1. Push your code to GitHub
2. Import your project in [Vercel Dashboard](https://vercel.com)
3. Vercel will auto-detect the Vite framework
4. Deploy and get your live URL

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Vercel Configuration

The project includes `vercel.json` with:
- Build configuration
- SPA routing (all routes redirect to index.html)
- Cache headers for optimal performance

## Project Structure

```
PAPPORTFOLIO/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── LeadershipImpact.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   └── Contact.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── hooks/
│   │   └── useTheme.js
│   ├── styles/
│   │   ├── global.css
│   │   └── themes.css
│   ├── App.jsx
│   └── index.js
├── package.json
├── vercel.json
└── README.md
```

## Customization

All portfolio data is centralized in `src/data/portfolioData.js`. Update this file to customize:
- Personal information
- Experience
- Projects
- Skills
- Achievements
- Education

## Theme Customization

Themes are defined in `src/styles/themes.css` using CSS variables. Modify the color values to customize the appearance.

## License

ISC

## Contact

- Email: patelpankaj.1010@gmail.com
- Website: https://pankaj-portfolio-01.vercel.app
- LinkedIn: https://www.linkedin.com/in/pranaypatel512/

