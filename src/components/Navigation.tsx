"use client"

import { X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About Me",
		href: "/about-me",
	},
	{
		name: "Gallery",
		href: "/arts",
	},
	{
		name: "Contact",
		href: "/contact",
	},
]

export function DesktopNavigation() {
	const pathname = usePathname()

	return (
		<nav className="hidden gap-4 text-lg lg:flex">
			{navigation.map((item, index) => {
				const isActive = pathname === item.href
				return (
					<Link key={index} href={item.href} className={`transition-all duration-100 hover:border-b-2 hover:border-gray-600 hover:pb-1 ${isActive ? "font-semibold border-b-2 border-gray-600 pb-1" : "text-gray-700"}`}>
						{item.name}
					</Link>
				)
			})}
		</nav>
	)
}

export function MobileNavigation({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
	const pathname = usePathname()

	const handleMenuClick = () => {
		setIsOpen(false)
	}

	if (!isOpen) return null

	return (
		<div className="fixed h-svh w-full top-0 left-0 bg-white z-50 lg:hidden">
			<button onClick={() => setIsOpen(false)} className="absolute top-2 right-4" aria-label="Close mobile menu">
				<X className="w-8 h-8" />
			</button>

			<nav className="flex flex-col items-center justify-center gap-10 h-full">
				{navigation.map((item, index) => {
					const isActive = pathname === item.href
					return (
						<Link key={index} href={item.href} className={`text-3xl font-medium transition-all ${isActive ? "font-bold border-b-2 border-gray-600 pb-1" : "text-gray-700"}`} onClick={handleMenuClick}>
							{item.name}
						</Link>
					)
				})}
			</nav>
		</div>
	)
}
