module.exports = {
  distDir: "out", // Custom output directory
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        maxSize: 250000,
      };
    }
    return config;
  },
};
