/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*'
                    }
                ]
            }
        ]
    }
};

export default nextConfig;
