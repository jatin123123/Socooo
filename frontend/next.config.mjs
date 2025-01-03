/** @type {import('next').NextConfig} */
const nextConfig = {
 // Ensures strict checks during development.
  
  // Headers configuration for API routes (CORS, etc.)
  async headers() {
    return [
      {
        source: '/api/(.*)', // Apply headers only to API routes.
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: 'https://socooo-jatin123123s-projects.vercel.app/ }, // Replace with your frontend URL.
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,POST,PUT,DELETE' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, Authorization, Content-Type, Accept' },
        ],
      },
    ];
  },

  // Other configurations
  experimental: {
    appDir: true, // Enable experimental app directory if you're using it.
  },
};

export default nextConfig;
