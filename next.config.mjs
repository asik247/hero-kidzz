/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  //? Remote image
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        // port: '',
        // pathname: '/my-bucket/**',
        // search: '',
      },
    ],
  },
};

export default nextConfig;
