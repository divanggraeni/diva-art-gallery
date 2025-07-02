"use client"

import { useRef } from "react"
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

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function TestimonialsSwiper() {
	const swiperRef = useRef<SwiperType>(null)
	const { testimonials, loading, error } = useTestimonials()

	return (
		<div className="w-full">
			<div className="flex items-center justify-between mb-8">
				<h2 className="text-4xl font-semibold">Testimonials</h2>

				<div className="flex gap-2">
					<Button variant="default" size="sm" onClick={() => swiperRef.current?.slidePrev()} className="p-2">
						<ChevronLeft className="w-4 h-4" />
					</Button>
					<Button variant="default" size="sm" onClick={() => swiperRef.current?.slideNext()} className="p-2">
						<ChevronRight className="w-4 h-4" />
					</Button>
				</div>
			</div>

			{loading && (
				<div className="flex justify-center">
					<p className="text-2xl">Loading...</p>
				</div>
			)}

			{error && (
				<div className="flex justify-center">
					<p className="text-2xl">Error: {error}</p>
				</div>
			)}

			{!loading && !error && testimonials.length === 0 && (
				<div className="flex justify-center">
					<p className="text-2xl">No testimonials found</p>
				</div>
			)}

			{!loading && !error && testimonials.length > 0 && (
				<div className="relative">
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={24}
						loop={true}
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
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
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
												<p className="text-gray-500 text-sm">@{testimonial.instagram}</p>
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
