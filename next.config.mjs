import path from "path";
import { fileURLToPath } from "url";

/** Force Next to use this folder as the project root (fixes wrong root when another lockfile exists higher up, e.g. C:\Users\You\). */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const githubRepository = process.env.GITHUB_REPOSITORY || "";
const [repoOwner = "", repoName = ""] = githubRepository.split("/");
const isUserSiteRepo = repoName.toLowerCase() === `${repoOwner.toLowerCase()}.github.io`;
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubPagesBuild && !isUserSiteRepo && repoName ? `/${repoName}` : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
