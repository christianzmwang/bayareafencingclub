# Bay Area Fencing Club Website

A modern, responsive Next.js website for Bay Area Fencing Club, featuring all the content and pages from their original website with **dark mode support**.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **Complete Content**: All sections from the original website included
- **Performance**: Built with Next.js 14 for optimal performance
- **Accessibility**: Semantic HTML and proper ARIA labels
- **🌙 Dark Mode**: Full dark mode support with theme toggle and system preference detection

## Pages & Sections

- **Home**: Hero section with main messaging
- **About**: Mission statement and club description
- **Values**: Core values (Teamwork, Sportsmanship, Integrity)
- **Locations**: Both Los Gatos and Pleasanton locations with contact info
- **Programs**: Summer camp and various fencing programs
- **Footer**: Complete navigation and social media links

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with dark mode support
- **Icons**: Lucide React
- **Language**: TypeScript
- **State Management**: React Context for theme management
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bayareafencingclub
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
bayareafencingclub/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with Tailwind + dark mode
│   ├── layout.tsx         # Root layout with ThemeProvider
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── Navbar.tsx         # Sticky navigation bar with theme toggle
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Values.tsx         # Core values
│   ├── Locations.tsx      # Location information
│   ├── Programs.tsx       # Fencing programs
│   ├── Footer.tsx         # Footer with links
│   └── ThemeToggle.tsx    # Dark/light mode toggle button
├── contexts/               # React contexts
│   └── ThemeContext.tsx   # Theme management context
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration with dark mode
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Dark Mode Features

The website includes comprehensive dark mode support:

- **Theme Toggle**: Click the sun/moon icon in the navbar to switch themes
- **System Preference**: Automatically detects and applies user's system theme preference
- **Persistent Storage**: Remembers user's theme choice across sessions
- **Smooth Transitions**: Elegant color transitions between light and dark modes
- **Complete Coverage**: All components and sections support both themes

### Dark Mode Colors
- **Backgrounds**: Light grays to dark grays and blacks
- **Text**: Dark grays to light grays and whites
- **Accents**: Maintains brand colors while adapting to theme
- **Cards & Sections**: Proper contrast in both themes

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue (#1e40af)
- Secondary: Red (#dc2626)
- Accent: Yellow (#f59e0b)

### Content
All content is easily editable in the component files. The website includes:
- Club information and mission
- Location details for both facilities
- Program descriptions
- Contact information
- Social media links

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `pnpm build`
2. Deploy the `out` folder to Netlify

### Static Hosting
1. Build the project: `pnpm build`
2. Upload the `out` folder to your hosting provider

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is for Bay Area Fencing Club. All rights reserved.

## Contact

For questions about this website, contact Bay Area Fencing Club:
- **Los Gatos**: (408) 384-8408
- **Pleasanton**: (925) 236-0280
- **Website**: [https://bayareafencing.club/](https://bayareafencing.club/)
