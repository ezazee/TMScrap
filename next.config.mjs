/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gravatar.com",
        port: "",
        pathname: "/avatar/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://10.20.20.99:8960/api/:path*",
      },
    ];
  },
  webpack: (config) => {
    config.devServer = {
      proxy: {
        "/api": {
          target: "http://10.20.20.99:8960",
          changeOrigin: true,
        },
      },
    };
    return config;
  },
};

export default nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "gravatar.com",
//         port: "",
//         pathname: "/avatar/**",
//       },
//     ],
//   },
// };
