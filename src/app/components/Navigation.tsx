'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
    { name: 'About Me', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resume/CV', href: '/resume' },
    { name: 'Blog', href: '/blog' },
    { name: 'Second Brain', href: 'https://angelyndisguise.github.io/mind-mosaic/' },
]

    export default function Navigation() {
    const pathname = usePathname()

    return (
        <nav className="flex flex-wrap gap-2 mb-8 justify-center">
        {navItems.map((item) => (
            <Link
            key={item.name}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={cn(
                "px-6 py-2 rounded-full border-2 transition-all duration-300 font-medium",
                "hover:scale-105 hover:shadow-lg",
                pathname === item.href
                ? "bg-blue-600 border-blue-600 text-white shadow-blue-600/25"
                : "border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-950/30"
            )}
            >
            {item.name}
            </Link>
        ))}
        </nav>
    )
}