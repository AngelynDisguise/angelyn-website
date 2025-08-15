'use client'
import { useEffect } from 'react'
import { siteConfig } from '@/lib/site-config'

// Loads fonts correctly in prod (i.e. GitHub Pages)
export default function FontLoader() {
    useEffect(() => {
        const fontPath = siteConfig.getAssetPath('/fonts/Monocraft.otf')
        const existingStyle = document.getElementById('dynamic-monocraft-font')
        if (existingStyle) {
            existingStyle.remove()
        }
        
        const style = document.createElement('style')
        style.id = 'dynamic-monocraft-font'
        style.innerHTML = `
            @font-face {
                font-family: 'Monocraft'
                src: url('${fontPath}') format('opentype')
                font-weight: normal
                font-style: normal
                font-display: swap
            }
        `
        
        document.head.appendChild(style)
    }, [])

    return null
}