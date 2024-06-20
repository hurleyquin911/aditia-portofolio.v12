/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/aditia-portofolio.v12" : "",
  assetPrefix: isProd ? "/aditia-portofolio.v12/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
