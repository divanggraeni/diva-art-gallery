"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ImageWithErrorHandlingProps } from "@/types"

export default function ImageWithErrorHandling({ src, alt, className = "", loadingClassName = "", lazy = true, threshold = 0.1, ...props }: ImageWithErrorHandlingProps) {
	const [isLoading, setIsLoading] = useState(true)
	const [imageExists, setImageExists] = useState(false)
	const [imageError, setImageError] = useState(false)
	const [shouldLoad, setShouldLoad] = useState(!lazy)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!lazy || shouldLoad) return

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries
				if (entry.isIntersecting) {
					setShouldLoad(true)
					observer.disconnect()
				}
			},
			{
				threshold,
				rootMargin: "50px",
			}
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [lazy, shouldLoad, threshold])

	// Image loading logic
	useEffect(() => {
		if (!shouldLoad) return

		setIsLoading(true)
		const imgElement = new window.Image()
		imgElement.src = src

		imgElement.onload = () => {
			setImageExists(true)
			setImageError(false)
			setIsLoading(false)
		}

		imgElement.onerror = () => {
			setImageExists(false)
			setImageError(true)
			setIsLoading(false)
		}

		return () => {
			imgElement.onload = null
			imgElement.onerror = null
		}
	}, [src, shouldLoad])

	return (
		<div ref={containerRef} className={`relative ${className}`}>
			{(isLoading || !shouldLoad) && (
				<div className={`absolute inset-0 bg-gray-200 animate-pulse ${loadingClassName}`}>
					{!shouldLoad && (
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
						</div>
					)}
				</div>
			)}
			{shouldLoad && <Image src={imageExists && !imageError ? src : "/images/placeholder-image.webp"} alt={alt} className={`object-cover ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`} {...props} />}
		</div>
	)
}
