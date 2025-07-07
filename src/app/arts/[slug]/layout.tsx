import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeftCircle } from "lucide-react"
import Button from "@/components/ui/Button"
import { getArts } from "@/hooks/useArts"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	try {
		const arts = await getArts()
		const art = arts.find((a) => a.slug === params.slug)

		return {
			title: art ? `${art.title} | Diva Nur Anggraeni` : "Diva Nur Anggraeni",
			description: art ? art.description : "Webnya diva",
		}
	} catch (error) {
		console.error("Error generating metadata:", error)
		return {
			title: "Diva Nur Anggraeni",
			description: "Webnya diva",
		}
	}
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: { slug: string }
}>) {
	let art = null

	try {
		const arts = await getArts()
		art = arts.find((a) => a.slug === params.slug)
	} catch (error) {
		console.error("Error fetching arts:", error)
	}

	return (
		<>
			{art && (
				<div className="w-full max-w-5xl mx-auto">
					<Link href="/arts" className="inline-block">
						<Button variant="ghost" className="flex items-center gap-2 text-2xl text-gray-500 hover:text-gray-700 transition-colors">
							<ArrowLeftCircle className="w-8 h-8" />
							Back to Gallery
						</Button>
					</Link>
				</div>
			)}
			{children}
		</>
	)
}
