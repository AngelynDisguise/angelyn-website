'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const navItems = [
    { name: 'About Me', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resume/CV', href: '/resume' },
    { name: 'Blog', href: '/blog' },
    { name: 'Second Brain', href: 'https://angelyndisguise.github.io/mind-mosaic/' },
]

export default function Navigation() {
    const pathname = usePathname()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen)
    const closeDrawer = () => setIsDrawerOpen(false)

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-wrap gap-3 mb-8 justify-center fade-in-drop px-4">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={cn(
                            "px-6 py-2 rounded-full border-2 transition-all duration-300 font-medium text-base",
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

            {/* Mobile Header with Hamburger */}
            <div className="md:hidden flex justify-between items-center mb-8 px-4 fade-in-drop">
                <div className="text-xl font-bold text-slate-300">Menu</div>
                <button
                    onClick={toggleDrawer}
                    className="p-2 rounded-lg border-2 border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors duration-300"
                    aria-label="Toggle navigation menu"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Drawer Overlay */}
            {isDrawerOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={closeDrawer}
                />
            )}

            {/* Mobile Drawer */}
            <div className={cn(
                "md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900 border-l border-slate-700 z-50 transition-transform duration-300 ease-in-out",
                isDrawerOpen ? "translate-x-0" : "translate-x-full"
            )}>
                {/* Drawer Header */}
                <div className="flex justify-between items-center p-6 border-b border-slate-700">
                    <h2 className="text-xl font-bold text-slate-300">Navigation</h2>
                    <button
                        onClick={closeDrawer}
                        className="p-2 rounded-lg border-2 border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors duration-300"
                        aria-label="Close navigation menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Drawer Content */}
                <nav className="p-6">
                    <ul className="space-y-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    onClick={closeDrawer}
                                    className={cn(
                                        "block w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 font-medium text-left",
                                        pathname === item.href
                                        ? "bg-blue-600 border-blue-600 text-white shadow-blue-600/25"
                                        : "border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-950/30"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}