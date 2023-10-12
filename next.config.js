/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

// module.exports = {
//   webpack: (config, options) => {
//     if (!options.isServer) {
//       config.resolve.fallback.fs = false;
//     }

//     config.module.rules.push({
//       test: /@chakra-ui\/icons/,
//       use: options.defaultLoaders.babel,
//     });

//     return config;
//   },
// };

// module.exports = {
//   webpack: (config) => {
//     config.resolve.extensions.push(".mjs");
//     config.module.rules.push({
//       test: /\.mjs$/,
//       include: /node_modules/,
//       type: "javascript/auto",
//     });
//     return config;
//   },
// };
