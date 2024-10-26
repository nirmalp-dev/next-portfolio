/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
    unoptimized: true,
  },
  basePath: isProd ? '/next-portfolio' : '',
  assetPrefix: isProd ? '/next-portfolio/' : '',
  output: 'export',
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);