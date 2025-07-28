# Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, React, and Tailwind CSS. Features include project showcases, work experience, skills, and interactive modals.

## Features

- **Modern Design**: Clean, minimalist design with dark theme
- **Responsive**: Works perfectly on all devices
- **Interactive Modals**: Project and work experience details in modal dialogs
- **Static Content**: No backend required - perfect for GitHub Pages
- **Fast Performance**: Optimized for speed and SEO

## Tech Stack

- **Next.js 15**: React framework with static export
- **React 19**: Latest React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type safety throughout
- **GitHub Pages**: Static hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Homepage
│   └── layout.tsx      # Root layout
├── components/         # React components
│   ├── ProjectCard.tsx
│   ├── ProjectModal.tsx
│   ├── WorkCard.tsx
│   ├── WorkModal.tsx
│   ├── SkillsSection.tsx
│   └── Navbar.tsx
├── data/              # Static data
│   └── sampleProjects.ts
└── utils/             # Utility functions
    └── pastel.ts
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://yourusername.github.io/portfolio`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be in the `out/` directory
3. Upload the contents to your hosting provider

## Customization

### Adding Projects

Edit `src/data/sampleProjects.ts` to add your projects:

```typescript
export const sampleProjects = [
  {
    _id: "project-1",
    title: "Your Project Title",
    slug: { current: "project-slug" },
    thumbnail: "/path/to/image.jpg",
    description: "Project description...",
    technologies: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://your-project.com",
    sourceUrl: "https://github.com/yourusername/project",
    video: null
  }
];
```

### Adding Work Experience

Edit the work data in `src/app/page.tsx`:

```typescript
<WorkCard 
  work={{
    _id: "work-1",
    company: "Company Name",
    role: "Your Role",
    duration: "Duration",
    description: "Description...",
    technologies: ["Tech1", "Tech2"]
  }}
  onWorkClick={handleWorkClick}
/>
```

### Styling

The project uses Tailwind CSS. You can customize colors, fonts, and layout by modifying the Tailwind classes in the components.

## License

This project is open source and available under the [MIT License](LICENSE).
