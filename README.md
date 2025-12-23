# Openride Waitlist - Next.js 15

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

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Gemini API (optional, for AI features)
GEMINI_API_KEY=your_gemini_api_key

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
DATABASE_URL=postgresql://user:password@host:port/database
```

**For Vercel Deployment:**
Add these environment variables in your Vercel project settings under **Settings > Environment Variables**.

### Database Setup

The project uses Supabase PostgreSQL. Create the `waitlist` table using this SQL:

```sql
CREATE TABLE public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT NOT NULL,
  role TEXT DEFAULT 'rider',
  commute_route TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Public insert policy
CREATE POLICY "Allow public insert" 
  ON public.waitlist 
  FOR INSERT 
  WITH CHECK (true);

-- Public select policy
CREATE POLICY "Allow public select" 
  ON public.waitlist 
  FOR SELECT 
  USING (true);
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

### Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js and configure build settings

3. **Add Environment Variables:**
   - In Vercel project settings, go to **Settings > Environment Variables**
   - Add all variables from your `.env.local`:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `GEMINI_API_KEY` (if using AI features)

4. **Deploy:**
   ```bash
   git push origin main
   ```
   Vercel will automatically build and deploy on every push.

### Local Production Build

Test the production build locally:

```bash
pnpm run build
pnpm start
```

Visit [http://localhost:3000](http://localhost:3000)

