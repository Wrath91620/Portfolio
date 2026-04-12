import path from "path";
import { fileURLToPath } from "url";

/** Force Next to use this folder as the project root (fixes wrong root when another lockfile exists higher up, e.g. C:\Users\You\). */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
