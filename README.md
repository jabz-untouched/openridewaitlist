# Openride Waitlist

**Nigeria's Most Secure Commuter Network** - A modern, professional ride-sharing platform built with Next.js 15, React 19, and TypeScript.

<div align="center">
  <strong>Secured by Identity. Cheaper by Design. Professional by Default.</strong>
</div>

---

## Overview

Openride is a revolutionary ride-sharing platform designed specifically for Nigerian professionals. Unlike traditional ride-hailing services, Openride connects verified workplace professionals with car-owning office workers on the same commute routes.

### Key Benefits
- **40% Lower Costs** - Professional drivers share rides to offset fuel costs, not for profit
- **Maximum Security** - All users verified through workplace IDs and business registration
- **Zero Violence** - Identity verification eliminates anonymous threats
- **Real-Time Tracking** - Route sharing with employers and emergency contacts

---

## Features

### For Riders
- Secure ride booking with verified drivers
- Real-time route tracking shared with employer
- Emergency contact notifications
- Cost-efficient pricing (40% cheaper than traditional ride-hailing)
- Professional driver community

### For Drivers
- Extra income sharing existing routes
- Verified passenger community
- Real-time ride matching
- Route optimization

### Platform Features
- **Waitlist Management** - Early access signup with role selection
- **Form Validation** - Zod schema validation for data integrity
- **AI Integration** - Google Gemini API for predictive features
- **3D Visualization** - Interactive Three.js scene in hero section
- **Responsive Design** - Mobile-first Tailwind CSS styling
- **State Management** - Zustand for lightweight state management
- **API Integration** - Axios with request/response interceptors
- **Authentication Ready** - Infrastructure for auth token management

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5.8.2 |
| **React** | React 19 |
| **Styling** | Tailwind CSS v4, Radix UI, clsx |
| **Forms** | react-hook-form v7.69, zod v4.2, @hookform/resolvers |
| **State** | Zustand v5.0 |
| **HTTP Client** | Axios v1.13 with interceptors |
| **Animations** | motion (Framer Motion) v11.15 |
| **3D Graphics** | three v0.182, @react-three/fiber v9.4 |
| **Icons** | lucide-react v0.562 |
| **AI** | @google/genai v1.34 |
| **Database** | Supabase |
| **Linting** | ESLint 9 + eslint-config-next |
| **Package Manager** | pnpm 10.16.0 |

---

## Prerequisites

- **Node.js**: 18.18+ or 20+ (LTS recommended)
- **pnpm**: 10.x
- **Git**: For version control

### Install pnpm
```bash
corepack enable
```

Or visit: [pnpm.io/installation](https://pnpm.io/installation)

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/jabz-untouched/openridewaitlist.git
cd openride-waitlist
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Environment Configuration
Create a `.env.local` file in the project root:

```env
# Google Generative AI
GEMINI_API_KEY=your_gemini_api_key_here

# Supabase (Optional - for future database integration)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# API Configuration (Optional)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

**Note:** Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey)

### 4. Run Development Server
```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
openride-waitlist/
├── app/                           # Next.js 15 App Router
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # POST endpoint for waitlist submission
│   ├── layout.tsx                # Root layout with metadata & globals
│   ├── page.tsx                  # Homepage (hero, features, CTA)
│   ├── globals.css               # Global styles
│   └── test-style/
│       └── page.tsx              # Test/demo page
│
├── components/                    # Reusable React components
│   ├── WaitlistForm.tsx          # Form component with validation
│   ├── Features.tsx              # Feature showcase section
│   ├── AIPrediction.tsx          # AI-powered prediction display
│   └── ThreeScene.tsx            # 3D scene component (Three.js)
│
├── lib/                          # Utility functions
│   ├── utils.ts                  # Helper functions (cn() for class merging)
│   └── supabase.ts               # Supabase client setup
│
├── services/                     # API service layer
│   └── api.ts                    # Axios instance with interceptors
│
├── store/                        # State management
│   └── useStore.ts               # Zustand store for form/waitlist state
│
├── public/                       # Static assets
│   ├── openride-logo.png
│   └── Openride transparent background emblem.png
│
├── types.ts                      # TypeScript type definitions
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.js            # Tailwind CSS theme
├── postcss.config.js             # PostCSS configuration
├── next.config.ts                # Next.js configuration
└── README.md                     # This file
```

---

## Available Scripts

### Development
```bash
pnpm dev        # Start development server (hot reload)
```

### Production
```bash
pnpm build      # Build for production
pnpm start      # Start production server
```

### Code Quality
```bash
pnpm lint       # Run ESLint to check code style
```

---

## API Endpoints

### Waitlist Submission
**POST** `/api/waitlist`

**Request Body:**
```json
{
  "name": "string (min 2 chars)",
  "email": "string (valid email)",
  "city": "string (min 2 chars)",
  "role": "rider | driver | both",
  "commuteRoute": "string (min 5 chars)"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Added to waitlist successfully"
}
```

**Error Response (400):**
```json
{
  "error": "Validation error or duplicate entry"
}
```

---

## Components Guide

### WaitlistForm Component
Main form for collecting waitlist signups. Features:
- Real-time form validation using Zod
- React Hook Form integration
- Success state with animated confirmation
- Error handling and display
- Role selection (Rider/Driver/Both)
- Loading state with spinner

### Features Component
Showcases platform benefits with:
- Security features section
- Cost-efficiency details
- Visual feature cards
- Interactive layout

### AIPrediction Component
Displays AI-powered insights using Google Gemini API

### ThreeScene Component
Interactive 3D background using Three.js and @react-three/fiber
- Dynamically loaded (no SSR)
- Responsive to screen size
- Performance optimized

---

## Form Validation Schema

Using Zod for runtime type safety:

```typescript
const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid work email'),
  city: z.string().min(2, 'Please enter your city'),
  role: z.enum(['rider', 'driver', 'both']),
  commuteRoute: z.string().min(5, 'Please describe your general route'),
});
```

---

## State Management

### Zustand Store (`useStore`)
Manages:
- Form submission state (`isSubmitting`)
- Success state (`isSuccess`)
- Error messages (`error`)
- Async form submission (`submitWaitlist`)
- State reset capability

Usage:
```typescript
const { isSubmitting, isSuccess, error, submitWaitlist } = useStore();
```

---

## Styling & Design System

### Tailwind Configuration
- Custom color scheme with brand colors:
  - `brand-orange`: Primary action color
  - `brand-black`: Secondary/background
  - `brand-light`: Light backgrounds
  - `brand-gray`: Neutral gray

### Design Patterns
- Mobile-first responsive design
- Smooth animations with motion (Framer Motion)
- Consistent spacing and typography
- Accessible color contrasts
- Interactive hover states

---

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy

### Manual Build & Deploy

```bash
pnpm install
pnpm build
pnpm start
```

### Environment Variables for Production
Ensure these are set in your deployment platform:
- `GEMINI_API_KEY`
- `NEXT_PUBLIC_SUPABASE_URL` (if using Supabase)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (if using Supabase)

---

## API Integration

### Axios Interceptors
The `api.ts` service includes:
- **Request Interceptor**: Adds auth tokens, logs requests
- **Response Interceptor**: Handles errors, logs responses
- **Error Handling**: Graceful handling of 401, 403, 404, 500 errors

### Using the API Client
```typescript
import { api } from '@/services/api';

// POST request with data
const response = await api.post('/waitlist', formData);

// GET request
const data = await api.get('/users');
```

---

## Performance Optimizations

- Dynamic component loading (ThreeScene)
- Next.js Image optimization
- Tailwind CSS tree-shaking
- React 19 optimizations
- Zustand for minimal re-renders
- Request debouncing and caching ready

---

## Best Practices

### Code Style
- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Configured with Next.js best practices
- **Formatting**: Consistent spacing and naming conventions

### Component Development
- Functional components with hooks
- Custom hooks for reusable logic
- Proper prop typing with TypeScript
- Server vs Client component distinction

### Form Handling
- Zod schema validation first
- React Hook Form for performance
- Client-side validation feedback
- Server-side validation on API

---

## Troubleshooting

### Port 3000 Already in Use
```bash
pnpm dev -- -p 3001
```

### Dependencies Issues
```bash
pnpm install --force
```

### TypeScript Errors
```bash
npx tsc --noEmit
```

### Build Issues
```bash
pnpm clean  # If available
pnpm install
pnpm build
```

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Security

### Data Protection
- Workplace ID verification required
- All user data validated server-side
- Environment variables for sensitive data
- HTTPS-only in production

### Best Practices
- No API keys in client code
- Token-based authentication ready
- Error messages don't expose sensitive info
- Rate limiting ready to implement

---

## Future Enhancements

- [ ] User authentication & profiles
- [ ] Real-time ride matching algorithm
- [ ] Payment integration
- [ ] In-app messaging
- [ ] Route optimization
- [ ] Emergency response system
- [ ] Driver rating system
- [ ] Mobile app

---

## Support & Contact

- **GitHub Issues**: [Report bugs or request features](https://github.com/jabz-untouched/openridewaitlist/issues)
- **Email**: contact@openride.ng
- **Twitter**: [@openride](https://twitter.com)
- **LinkedIn**: [Openride Technologies](https://linkedin.com)

---

## License

This project is proprietary software developed by Openride Technologies Nigeria.

---

## Acknowledgments

- Built with Next.js 15 and React 19
- Designed with Tailwind CSS and Radix UI
- Powered by Google Generative AI
- 3D visualizations with Three.js
- Form validation with Zod

---

<div align="center">
  <p><strong>Openride Technologies Nigeria</strong></p>
  <p>© 2025 All rights reserved</p>
  <p><em>Connecting Nigerian professionals for a safer, cheaper, and faster commute.</em></p>
</div>
