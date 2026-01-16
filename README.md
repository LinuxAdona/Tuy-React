# Tuy Municipality Website Prototype

A modern, responsive website prototype for the Municipality of Tuy built with React, TypeScript, and Vite.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js)

To check your current versions:

```bash
node --version
npm --version
```

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository** (if applicable):

```bash
git clone <repository-url>
cd tuy-react-prototype
```

2. **Install dependencies**:

```bash
npm install
```

This will install all required packages listed in `package.json`.

## Available Scripts

### Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This command:
1. Runs TypeScript compilation (`tsc -b`)
2. Builds the project using Vite
3. Outputs files to the `dist/` directory

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

This serves the built application from the `dist/` directory.

### Lint Code

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## Technology Stack

- **React** (v19.2.0) - UI library
- **TypeScript** (v5.9.3) - Type-safe JavaScript
- **Vite** (v7.2.4) - Build tool and dev server
- **Tailwind CSS** (v4.1.18) - Utility-first CSS framework
- **React Router DOM** (v7.12.0) - Client-side routing
- **ESLint** - Code linting and quality

## Project Structure

```
tuy-react-prototype/
├── public/              # Static assets (images, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── data/           # Static data and content
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   │   ├── downloadables/    # Downloadable documents pages
│   │   ├── government/       # Government officials pages
│   │   ├── profile/          # Municipality profile pages
│   │   └── transparencies/   # Transparency-related pages
│   └── main.tsx        # Application entry point
├── dist/               # Production build output (generated)
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## Key Features

- **Home Page**: Landing page with hero section and key information
- **About Page**: Information about the municipality
- **Gallery**: Photo gallery of the municipality
- **Contact**: Contact information and form
- **Government**: Officials, department heads, and barangay officials
- **Downloadables**: Ordinances, resolutions, and forms
- **Transparencies**: Financial statements, reports, and citizen's charter
- **Profile**: History, demography, socio-economic data, and maps

## Development Workflow

1. Make changes to files in the `src/` directory
2. The dev server will automatically reload with your changes
3. Check the browser console for any errors
4. Run `npm run lint` to check code quality
5. Run `npm run build` to ensure production build works

## Building for Production

When ready to deploy:

1. Run `npm run build` to create an optimized build
2. The `dist/` folder contains all files needed for deployment
3. Upload the contents of `dist/` to your web server or hosting platform

## Browser Support

This project targets modern browsers that support ES modules and modern JavaScript features.

## Contributing

When contributing to this project:

1. Follow the existing code style
2. Run `npm run lint` before committing
3. Ensure `npm run build` completes without errors
4. Test your changes in development mode first

## License

[Add your license information here]
