/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Sagar_Portfolio_Webiste",
  assetPrefix: "/Sagar_Portfolio_Webiste/",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
