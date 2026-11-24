/** @type {import('next').NextConfig} */
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true'
const githubPagesPath = '/Sagar_Portfolio_Webiste'

const nextConfig = {
  output: "export",
  // GitHub Pages serves this repository under its name. Keep local development
  // at http://localhost:3000/ instead of requiring the deployment subpath.
  ...(isGitHubPagesBuild
    ? {
        basePath: githubPagesPath,
        assetPrefix: `${githubPagesPath}/`,
      }
    : {}),
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
