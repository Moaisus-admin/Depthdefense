import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
