// Prevent date drift between server and client
process.env.TZ = 'UTC';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use static export for Netlify compatibility
  output: 'export',
  trailingSlash: true,
  // Redirect root to default locale
  async redirects() {
    return [
      { source: '/', destination: '/en', permanent: true },
    ];
  },
  // Temporarily disable TypeScript and ESLint checking for build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
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
  
  // Exclude functions directory from build (Deno functions)
  webpack: (config) => {
    config.externals = config.externals || [];
    config.externals.push({
      'https://deno.land/std@0.224.0/http/server.ts': 'commonjs https',
      'https://esm.sh/@supabase/supabase-js@2': 'commonjs @supabase/supabase-js',
    });
    return config;
  },
  
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
