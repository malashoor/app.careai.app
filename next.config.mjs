// Prevent date drift between server and client
process.env.TZ = 'UTC';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable image optimization for static export compatibility
    unoptimized: true,
    // Let Next serve modern formats automatically
    formats: ['image/avif', 'image/webp'],
    // Optional: add your domain(s) here if you load remote images later
    // remotePatterns: [],
  },
  // Exclude Flutter directory from build to prevent env var conflicts
  // Removed invalid experimental option for Next.js 14.2.31
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
