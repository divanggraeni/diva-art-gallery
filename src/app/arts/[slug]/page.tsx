"use client"

import { notFound, useParams } from "next/navigation"
import Page from "@/components/Page"
import ImageWithErrorHandling from "@/components/ui/ImageWithErrorHandling"
import SpotifyMusicPlayer from "@/components/SpotifyMusicPlayer"
import { Music } from "lucide-react"
import Card from "@/components/ui/Card"
import { useArts } from "@/hooks/useArts"
import { Skeleton } from "@/components/ui/Skeleton"

export default function ArtDetail() {
	const { arts, loading, error } = useArts()
	const params = useParams()
	const slug = params.slug as string

	const art = arts.find((art) => art.slug === slug)

    if (loading) {
        return (
            <Page title="Loading..." description="Please wait a moment.">
                <Skeleton className="w-full aspect-[3/4] rounded-2xl" />
            </Page>
        )
    }

	if (!art) {
		return notFound()
	}

	return (
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
	)
}
