const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  distDir: "out",
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        maxSize: 250000,
      };
    }
    return config;
  },
});
