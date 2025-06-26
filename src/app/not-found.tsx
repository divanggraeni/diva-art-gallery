"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ArrowLeftCircle } from "lucide-react"
import Button from "@/components/ui/Button"

export default function NotFound() {
	const pathname = usePathname()
	const isArtsPage = pathname?.startsWith("/arts")

	return (
		<div className="py-16 px-4 w-full max-w-5xl flex flex-col gap-16 mx-auto text-center lg:py-20">
			<h1 className="text-9xl font-semibold">404</h1>
			<p className="text-3xl text-gray-500 tracking-wide">{isArtsPage ? "Karya tidak ditemukan" : "Halaman tidak ditemukan"}</p>

			<div className="flex gap-4 items-center mx-auto">
				{isArtsPage && (
					<Link href="/arts">
						<Button variant="outline">
							Back to Gallery
						</Button>
					</Link>
				)}
				<Link href="/">
					<Button variant="default">
						Back to Home
					</Button>
				</Link>
			</div>
		</div>
	)
}
