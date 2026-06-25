/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      ...(config.watchOptions || {}),
      ignored: ["**/node_modules/**", "**/.next/**", "**/outputs/**", "**/miniprogram/**"]
    };

    return config;
  }
};

export default nextConfig;
