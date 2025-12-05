// API configuration for external backend
// If you have a separate backend, uncomment and set your backend URL

// Option 1: Environment variable (recommended)
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// Option 2: Hardcoded (for development)
const API_BASE_URL = 'http://localhost:8000'; // Your backend URL

// Option 3: Use relative URLs (current setup - no base URL needed)
// This works when your API is in the same Next.js app

// Example usage if you had an external backend:
// export const apiClient = {
//   post: async (endpoint: string, data: any) => {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });
//     return response.json();
//   },
// };

// For now, we're using relative URLs directly in components
// Example: fetch('/api/auth/register', ...)

