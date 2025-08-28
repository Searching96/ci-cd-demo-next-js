/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    images: {
       unoptimized: true
    },
    
    outputFileTracingRoot: __dirname, // force root to this project

    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
