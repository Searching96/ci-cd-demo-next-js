/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    images: {
       unoptimized: true
    },
    
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        outputFileTracingRoot: __dirname, // force root to this project
    },

    typescript: {
        ignoreBuildErrors: true,
    },

    eslint: {
        ignoreDuringBuilds: true,
    }
}

module.exports = nextConfig
