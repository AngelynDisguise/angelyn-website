const GITHUB_USERNAME = 'angelyndisguise'
const GITHUB_REPO = 'angelyn-website'

interface SiteConfig {
    basePath: string
    githubPagesHost: string
    siteUrl: string
    devUrl: string
    baseUrl: string
    isProduction: boolean
    
    getAssetPath(path: string): string
}

// Sets proper path names if deployed to prod (i.e. GitHub Pages)
export const siteConfig: SiteConfig = {
    basePath: `/${GITHUB_REPO}`,
    githubPagesHost: `${GITHUB_USERNAME}.github.io`,
    siteUrl: `https://${GITHUB_USERNAME}.github.io/${GITHUB_REPO}`,

    devUrl: 'http://localhost:3000',
    
    isProduction: process.env.NODE_ENV === 'production',
    
    get baseUrl() {
        return this.isProduction ? this.siteUrl : this.devUrl
    },
    
    getAssetPath(path: string) {
        if (this.isProduction) {
            return `${this.basePath}${path}`
        }
        return path
    }
}

