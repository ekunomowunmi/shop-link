# Deploying to Vercel

## Quick Deploy

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No**
   - Project name? (Press Enter for default: shop-link)
   - Directory? (Press Enter for default: ./)
   - Override settings? **No**

5. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

## Environment Variables (Optional)

If you want to set a custom JWT secret, add it in Vercel:

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add:
   - Name: `JWT_SECRET`
   - Value: (your secure random string)
   - Environment: Production, Preview, Development

## Important Notes

⚠️ **Data Storage**: This app currently uses in-memory storage. Data will be lost when:
- The server restarts
- A new deployment happens
- The serverless function times out

For production, you should:
- Connect to a database (PostgreSQL, MongoDB, etc.)
- Replace the in-memory storage in `lib/db.ts` with API calls to your backend

## Build Settings

Vercel will automatically:
- Detect Next.js framework
- Run `npm run build`
- Deploy to edge network

No additional configuration needed!

