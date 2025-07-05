"use client"

import { useRef, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import ImageWithErrorHandling from "@/components/ui/ImageWithErrorHandling"
import type { Swiper as SwiperType } from "swiper"
import { TestimonialProps } from "@/types"
import Link from "next/link"
import { useTestimonials } from "@/hooks/useTestimonials"
import { Skeleton } from "./ui/Skeleton"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function TestimonialsSwiper() {
	const swiperRef = useRef<SwiperType>(null)
	const { testimonials, loading, error } = useTestimonials()

	const skeletonSlides = [
		{ minWidth: 1024, count: 3 }, // lg
		{ minWidth: 640, count: 2 }, // md
		{ minWidth: 0, count: 1 }, // base
	]

	const getSkeletonCount = () => {
		if (typeof window === "undefined") return 1
		const width = window.innerWidth
		for (const bp of skeletonSlides) {
			if (width >= bp.minWidth) return bp.count
		}
		return 1
	}

	const [skeletonCount, setSkeletonCount] = useState(1)

	useEffect(() => {
		const updateCount = () => setSkeletonCount(getSkeletonCount())
		updateCount()
		window.addEventListener("resize", updateCount)
		return () => window.removeEventListener("resize", updateCount)
	}, [])

	return (
		<div className="w-full">
			<div className="flex items-center justify-between mb-8">
				<h2 className="text-4xl font-semibold">Testimonials</h2>

				{/* Disable navigation buttons saat loading */}
				<div className="flex gap-2">
					<Button variant="default" size="sm" onClick={() => swiperRef.current?.slidePrev()} className="p-2" disabled={loading}>
						<ChevronLeft className="w-4 h-4" />
					</Button>
					<Button variant="default" size="sm" onClick={() => swiperRef.current?.slideNext()} className="p-2" disabled={loading}>
						<ChevronRight className="w-4 h-4" />
					</Button>
				</div>
			</div>

			{loading && (
				<div className="relative">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{Array.from({ length: skeletonCount }).map((_, idx) => (
							<Card key={idx} variant="outline" className="h-full flex flex-col gap-4 p-6">
								<div className="flex items-center gap-4">
									<Skeleton className="w-12 h-12 rounded-full flex-shrink-0" />
									<div className="flex flex-col gap-2 flex-1">
										<Skeleton className="w-24 h-4 rounded" />
										<Skeleton className="w-16 h-3 rounded" />
									</div>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<Skeleton className="w-full h-4 rounded" />
									<Skeleton className="w-3/4 h-4 rounded" />
									<Skeleton className="w-1/2 h-4 rounded" />
								</div>
							</Card>
						))}
					</div>
					{/* Custom Pagination Skeleton */}
					<div className="flex justify-center gap-2 mt-8">
						{Array.from({ length: Math.ceil(skeletonCount / 2) }).map((_, idx) => (
							<Skeleton key={idx} className="w-3 h-3 rounded-full" />
						))}
					</div>
				</div>
			)}

			{error && (
				<div className="flex justify-center">
					<p className="text-2xl text-red-500">Error: {error}</p>
				</div>
			)}

			{!loading && !error && testimonials && testimonials.length === 0 && (
				<div className="flex justify-center">
					<p className="text-2xl text-gray-500">No testimonials found</p>
				</div>
			)}

			{!loading && !error && testimonials && testimonials.length > 0 && (
				<div className="relative">
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={24}
						loop={testimonials.length > 1}
						slidesPerView={1}
						pagination={{
							el: ".custom-pagination",
							clickable: true,
							renderBullet: function (index, className) {
								return `<span class="${className} custom-bullet"></span>`
							},
						}}
						breakpoints={{
							640: {
								slidesPerView: Math.min(2, testimonials.length),
							},
							1024: {
								slidesPerView: Math.min(3, testimonials.length),
							},
						}}
						onBeforeInit={(swiper) => {
							swiperRef.current = swiper
						}}
						className="testimonials-swiper"
					>
						{testimonials.map((testimonial: TestimonialProps) => (
							<SwiperSlide key={testimonial.id}>
								<Card variant="outline" className="h-full">
									<div className="flex items-center gap-4">
										<div className="relative w-12 h-12 rounded-full aspect-square overflow-hidden flex-shrink-0">
											<ImageWithErrorHandling src={testimonial.image} alt={testimonial.name} fill className="w-full h-full" loadingClassName="rounded-full" lazy={true} threshold={0.2} />
										</div>
										<div>
											<h4 className="font-semibold text-lg">{testimonial.name}</h4>
											<Link href={`https://instagram.com/${testimonial.instagram}`}>
												<p className="text-gray-500 text-sm hover:text-blue-500 transition-colors">@{testimonial.instagram}</p>
											</Link>
										</div>
									</div>
									<p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
								</Card>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Custom Pagination */}
					<div className="custom-pagination flex justify-center gap-2 mt-8"></div>
				</div>
			)}
		</div>
	)
}
