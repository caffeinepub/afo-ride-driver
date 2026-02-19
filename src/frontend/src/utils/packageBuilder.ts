export const buildDownloadPackage = () => {
  const packageInfo = {
    name: 'AFO Ride Driver',
    version: '1.0.0',
    description: 'Complete driver application package for AFO Ride India',
    contents: [
      'Frontend source code (React + TypeScript)',
      'Backend source code (Motoko)',
      'Generated assets (logo)',
      'Build configuration files',
      'Deployment instructions',
    ],
    files: {
      frontend: [
        'src/App.tsx',
        'src/components/*',
        'src/hooks/*',
        'src/utils/*',
        'public/assets/*',
        'index.html',
        'package.json',
        'tailwind.config.js',
        'tsconfig.json',
      ],
      backend: [
        'main.mo',
      ],
      documentation: [
        'DEPLOYMENT_INSTRUCTIONS.md',
      ],
    },
    deploymentOptions: [
      'Internet Computer (IC)',
      'Vercel',
      'Netlify',
      'Traditional Web Hosting',
    ],
  };

  return packageInfo;
};

export const generatePackageReadme = () => {
  return `
# AFO Ride Driver - Application Package

## Quick Start

1. Extract the package contents
2. Navigate to the frontend directory
3. Install dependencies: \`npm install\`
4. Start development server: \`npm run start\`

## Deployment

See DEPLOYMENT_INSTRUCTIONS.md for detailed deployment steps.

## Features

- Driver Dashboard with earnings tracking
- Real-time ride request system
- Wallet and payment management
- Safety features (SOS, security requests)
- Profile and document management
- 24/7 support integration

## Technology Stack

- Frontend: React 19, TypeScript, Tailwind CSS
- Backend: Motoko (Internet Computer)
- UI Components: shadcn/ui
- State Management: React Query

## Support

For questions or issues, refer to the documentation or contact support.

---

Built with ❤️ using caffeine.ai
  `.trim();
};
