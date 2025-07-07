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
					<Link key={index} href={item.href} className={`relative transition-all duration-100 text-gray-700 hover:text-gray-900 group ${isActive ? "text-gray-900" : ""}`}>
						{item.name}
						<span className={`h-[2px] bg-gray-900 block absolute bottom-0 left-0 transition-all duration-200 ease group-hover:w-full ${isActive ? "w-full" : "w-0"}`}></span>
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
						<Link key={index} href={item.href} className={`relative text-3xl transition-all duration-100 text-gray-700 hover:text-gray-900 group ${isActive ? "text-gray-900" : ""}`} onClick={handleMenuClick}>
							{item.name}
							<span className={`h-[2px] bg-gray-900 block absolute -bottom-2 left-0 transition-all duration-200 ease group-hover:w-full ${isActive ? "w-full" : "w-0"}`}></span>
						</Link>
					)
				})}
			</nav>
		</div>
	)
}
