/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["files.stripe.com"],
  },
  experimental: {
    newNextLinkBehavior: true,
    appDir: true,
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
