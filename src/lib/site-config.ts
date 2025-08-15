/* Config constants */
const GITHUB_REPO_CONFIG = {
    username: 'angelyndisguise',
    name: 'angelyn-website'
} as const

const ENV_CONFIG = {
    isProduction: process.env.NODE_ENV === 'production',
    devPort: 3000
} as const

const URL_CONFIG = {
    dev: `http://localhost:${ENV_CONFIG.devPort}`,
    prod: `https://${GITHUB_REPO_CONFIG.username}.github.io/${GITHUB_REPO_CONFIG.name}` // GitHub Pages
} as const

interface SiteConfig {
    repo: typeof GITHUB_REPO_CONFIG
    env: typeof ENV_CONFIG
    urls: typeof URL_CONFIG
    
    basePath: string
    baseUrl: string
    
    getAssetPath(path: string): string
}

export const siteConfig: SiteConfig = {
    repo: GITHUB_REPO_CONFIG,
    env: ENV_CONFIG,
    urls: URL_CONFIG,

    get basePath() {
        return this.env.isProduction ? `/${this.repo.name}` : ''
    },

    get baseUrl() {
        return this.env.isProduction ? this.urls.prod : this.urls.dev
    },

    // For loading runtime assets (e.g., images)
    getAssetPath(path: string) {
        return this.env.isProduction ? `/${this.repo.name}${path}` : path
    }
}
