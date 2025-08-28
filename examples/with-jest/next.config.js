/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        outputFileTracingRoot: __dirname, // force root to this project
    },

    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig