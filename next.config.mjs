/** @type {import('next').NextConfig} */
const nextConfig = {images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '2.bp.blogspot.com',
            },  {
                protocol: 'https',
                hostname: 'readcomiconline.li',
            },{
                protocol: 'https',
                hostname: 'readcomicsonline.ru',
            },
        ],
    },};

export default nextConfig;
