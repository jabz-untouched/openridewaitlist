# Openride Waitlist - Next.js 15

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

Nigeria's most secure commuter network - built with Next.js 15.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript + React 19
- **Styling**: Tailwind CSS v4, Radix UI, clsx, tailwind-merge
- **HTTP**: Axios with request/response interceptors
- **Forms & Validation**: react-hook-form, zod, @hookform/resolvers
- **State**: Zustand (selective usage)
- **Animations**: motion (Framer Motion)
- **3D**: three, @react-three/fiber
- **Linting**: ESLint 9 + eslint-config-next
- **Package Manager**: pnpm 10.16.0

## Prerequisites

- **Node.js**: 18.18+ or 20+ (LTS recommended)
- **pnpm**: 10.x

Install pnpm via:
```bash
corepack enable
```
Or visit: https://pnpm.io/installation

## Run Locally

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set environment variables:**
   Create a `.env.local` file:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
openride-waitlist/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── AIPrediction.tsx
│   ├── Features.tsx
│   ├── ThreeScene.tsx
│   └── WaitlistForm.tsx
├── lib/                   # Utility functions
│   └── utils.ts          # cn() helper
├── services/             # API services
│   └── api.ts           # Axios with interceptors
├── store/               # Zustand state
│   └── useStore.ts
└── types.ts            # TypeScript types
```

## Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Deployment

Ready to deploy on Vercel or any Node.js hosting platform.

```bash
pnpm build
pnpm start
```

