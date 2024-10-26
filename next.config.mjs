/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
    unoptimized: true, // Disable image optimization for static export
  },
  experimental: {
    mdxRs: true,
  },
  basePath: isProd ? '/next-portfolio' : '',
  assetPrefix: isProd ? '/next-portfolio/' : '',
  output: 'export', // Enable static export
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);