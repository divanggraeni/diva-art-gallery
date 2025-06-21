"use client"

import { useParams } from "next/navigation"
import { Arts } from "@/data/arts"
import Page from "@/components/Page"
import ImageWithErrorHandling from "@/components/ui/ImageWithErrorHandling"
import SpotifyMusicPlayer from "@/components/SpotifyMusicPlayer"
import Link from "next/link"
import { ArrowLeftCircle, Music } from "lucide-react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"

export default function ArtDetail() {
	const params = useParams()
	const slug = params.slug as string

	const art = Arts.find((art) => art.slug === slug)

	if (!art) {
		return (
			<div className="h-svh w-full flex flex-col items-center justify-center gap-6">
				<h1 className="text-2xl font-bold text-gray-600">Karya tidak ditemukan</h1>
				<Link href="/arts">
					<Button variant="ghost" className="flex items-center gap-2 text-2xl text-gray-500 hover:text-gray-700">
						<ArrowLeftCircle className="w-8 h-8" />
						Back to Gallery
					</Button>
				</Link>
			</div>
		)
	}

	return (
		<>
			<div className="w-full max-w-5xl mx-auto">
				<Link href="/arts">
					<Button variant="ghost" className="flex items-center gap-2 text-2xl text-gray-500 hover:text-gray-700">
						<ArrowLeftCircle className="w-8 h-8" />
						Back to Gallery
					</Button>
				</Link>
			</div>

			<Page title={art.title} description={art.description} className="pt-4 lg:pt-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
					<div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
						<ImageWithErrorHandling src={art.image} alt={art.title} fill className="w-full h-full object-cover" loadingClassName="rounded-2xl" lazy={false} priority={true} />
					</div>

					<div className="space-y-6">
						{art.music ? (
							<>
								<div className="flex items-center gap-3 mb-4">
									<Music className="w-6 h-6 text-green-600" />
									<h2 className="text-2xl font-bold text-gray-800">Music</h2>
								</div>

								<Card variant="default">
									<p className="text-gray-500 tracking-wide text-lg">Karya seni ini terinspirasi dari melodi dan emosi lagu di bawah ini. Biarkan musik membimbing Anda menikmati perjalanan visualnya.</p>
								</Card>

								<SpotifyMusicPlayer music={art.music} />
							</>
						) : (
							<div className="bg-gray-100 p-8 rounded-2xl text-center">
								<Music className="w-12 h-12 text-gray-400 mx-auto mb-4" />
								<p className="text-gray-600">No musical inspiration available for this artwork.</p>
							</div>
						)}
					</div>
				</div>
			</Page>
		</>
	)
}
