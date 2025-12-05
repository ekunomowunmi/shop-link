# API Base URL Explanation

## Current Setup (No Base URL Needed)

Right now, your API routes are **inside your Next.js app**, so you use **relative URLs**:

```tsx
// In app/register/page.tsx
fetch('/api/auth/register', { ... })
```

**How it works:**
- `/api/auth/register` is a relative URL
- Browser automatically prepends current origin:
  - Dev: `http://localhost:3000` + `/api/auth/register`
  - Prod: `https://yourdomain.com` + `/api/auth/register`
- Next.js routes it to `app/api/auth/register/route.ts`

## If You Want to Use an External Backend

If you're building a separate backend, you'll need to define a base URL:

### Option 1: Environment Variable (Recommended)

1. Create `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

2. Update your fetch calls:
```tsx
const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

fetch(`${API_URL}/api/auth/register`, { ... })
```

### Option 2: Create an API Client

Create `lib/api-client.ts`:
```tsx
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const api = {
  register: async (data: any) => {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },
  // ... other methods
};
```

Then use it:
```tsx
import { api } from '@/lib/api-client';
const data = await api.register(formData);
```

## Current Flow

```
User fills form → fetch('/api/auth/register') 
  → Next.js routes to app/api/auth/register/route.ts 
  → Handler processes request → Returns response
```

No base URL needed because everything is in the same app!

