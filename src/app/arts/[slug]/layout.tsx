import type { Metadata } from "next"
import { Arts } from "@/data/arts"
import Link from "next/link"
import { ArrowLeftCircle } from "lucide-react"
import Button from "@/components/ui/Button"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const art = Arts.find((a) => a.slug === params.slug)

	return {
		title: art ? art.title + " | Diva Nur Anggraeni" : "Diva Nur Anggraeni",
		description: art ? art.description : "Webnya diva",
	}
}

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: { slug: string }
}>) {
	const art = Arts.find((a) => a.slug === params.slug)

	return (
		<>
			{art && (
				<div className="w-full max-w-5xl mx-auto">
					<Link href="/arts" className="inline-block">
						<Button variant="ghost" className="flex items-center gap-2 text-2xl text-gray-500 hover:text-gray-700">
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
