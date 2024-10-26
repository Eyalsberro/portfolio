/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'snapback-hat.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
