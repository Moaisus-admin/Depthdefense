/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,

  // i18n: {
  //   locales: ["en", "ar"], // List of supported languages (English and Arabic)
  //   defaultLocale: "en", // Default language to use if no locale is specified
  // },
};

export default nextConfig;
