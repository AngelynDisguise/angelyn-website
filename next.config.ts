import type { NextConfig } from "next"
import { siteConfig } from "@/lib/site-config"

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: siteConfig.basePath,
    images: {
      unoptimized: true
    }
}

export default nextConfig
