import React, { useState, useEffect } from "react"
import { Music, ExternalLink } from "lucide-react"
import { MusicPlayerProps } from "@/types"
import Button from "./ui/Button"

export default function SpotifyMusicPlayer({ music }: MusicPlayerProps) {
	const [isLoaded, setIsLoaded] = useState(false)

	const spotifyEmbedUrl = `https://open.spotify.com/embed/track/${music.spotifyId}?utm_source=generator&theme=0&hide_cover=0`

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoaded(true)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	const openSpotifyFullTrack = () => {
		window.open(`https://open.spotify.com/track/${music.spotifyId}`, "_blank")
	}

	return (
		<div className="bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white p-6 rounded-2xl shadow-xl">
			<div className="flex items-center gap-4 mb-6">
				<div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
					<Music className="w-7 h-7" />
				</div>
				<div className="flex-1">
					<h3 className="font-bold text-xl mb-1">{music.title}</h3>
					<p className="text-green-100 text-base">{music.artist}</p>
				</div>
			</div>

			{!isLoaded && (
				<div className="mb-4 text-center">
					<div className="inline-flex items-center gap-2 text-green-100">
						<div className="w-4 h-4 border-2 border-green-100 border-t-transparent rounded-full animate-spin"></div>
						<span className="text-sm">Loading music...</span>
					</div>
				</div>
			)}

			<div className="mb-6 rounded-xl overflow-hidden shadow-lg">
				<iframe src={spotifyEmbedUrl} width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className="rounded-xl bg-black/20" onLoad={() => setIsLoaded(true)}></iframe>
			</div>

			<div className="flex gap-3">
				<Button variant="default" onClick={openSpotifyFullTrack} className="flex-1 bg-black/20 hover:bg-black/30 border-none backdrop-blur-sm text-white font-semibold transition-all duration-200 flex items-center justify-center gap-2">
					<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
					</svg>
					Open in Spotify
				</Button>

				<Button onClick={() => window.open(`https://open.spotify.com/artist/${music.artist}`, "_blank")} className="bg-white/10 border-none hover:bg-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-105" title={`More from ${music.artist}`}>
					<ExternalLink className="w-5 h-5" />
				</Button>
			</div>
		</div>
	)
}
