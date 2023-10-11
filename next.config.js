/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  webpack: (config, options) => {
    if (!options.isServer) {
      config.resolve.fallback.fs = false;
    }

    config.module.rules.push({
      test: /@chakra-ui\/icons/,
      use: options.defaultLoaders.babel,
    });

    return config;
  },
};
