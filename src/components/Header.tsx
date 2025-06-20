"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { DesktopNavigation, MobileNavigation } from "./Navigation"

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	return (
		<header className="w-full sticky top-0 left-0 bg-gray-100 h-12 z-50">
			<div className="px-4 max-w-5xl mx-auto w-full flex justify-between items-center h-full">
				<Link href={"/"}>
					<h1 className="text-2xl font-semibold">Diva Nur Anggraeni</h1>
				</Link>

				<DesktopNavigation />

				<MobileNavigation isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

				<button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden" aria-label="Open mobile menu">
					<Menu className="w-8 h-8" />
				</button>
			</div>
		</header>
	)
}
