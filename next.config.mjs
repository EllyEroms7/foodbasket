/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: false, // Disables SWC minification
    webpack: (config) => {
      config.optimization.minimize = false; // Disables Webpack minification
      return config;
    },
};

export default nextConfig;
