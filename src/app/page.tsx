"use client"

import Page from "@/components/Page"
import ImageWithErrorHandling from "@/components/ui/ImageWithErrorHandling"
import Button from "@/components/ui/Button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Card from "@/components/ui/Card"
import TestimonialsSwiper from "@/components/TestimonialsSwiper"
import { Arts } from "@/data/arts"

export default function Home() {
	return (
		<Page
			title={
				<>
					Hi, I'm <span className="font-bold">Diva Nur Anggraeni</span>
				</>
			}
			description="Saya adalah remaja asal Purwokerto yang suka menggambar sejak kecil. Menggambar dengan pensil menjadi kebiasaan yang membuat saya nyaman. Website ini saya buat bersama Rifqi Banu Safingi untuk membagikan beberapa karya saya."
		>
			{/* About section */}
			<div className="w-full flex flex-col gap-6 md:flex-row-reverse">
				<div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden md:aspect-square">
					<ImageWithErrorHandling src="/images/diva.jpg" alt="Foto Diva" fill className="w-full h-full" loadingClassName="rounded-2xl" lazy={false} priority={true} />
				</div>

				<Card variant="outline">
					<h3 className="text-4xl font-semibold">About Me</h3>
					<p className="text-gray-500 tracking-wide text-xl">Saya adalah seorang remaja asal Purwokerto yang memiliki hobi menggambar sejak kecil. Seiring waktu, saya mulai menekuni seni menggambar, khususnya dengan media pensil, karena saya tertarik pada detail, tekstur, dan ekspresi yang bisa disampaikan lewat garis hitam-putih.</p>

					<div className="flex gap-4 flex-wrap">
						<Link href="/about-me">
							<Button variant="outline" className="flex items-center self-start">
								Discover More <ChevronRight />
							</Button>
						</Link>

						<Link href="/contact">
							<Button variant="default" className="flex items-center self-start">
								Contact Me <ChevronRight />
							</Button>
						</Link>
					</div>
				</Card>
			</div>

			{/* Gallery section */}
			<div className="w-full flex flex-col gap-6">
				<div className="flex items-start gap-4 flex-col">
					<div className="flex justify-between w-full">
						<h3 className="text-4xl font-semibold">Gallery</h3>

						<Link href="/gallery">
							<Button variant="outline" size="sm" className="flex items-center self-start">
								See All <ChevronRight />
							</Button>
						</Link>
					</div>
					<p className="text-gray-500 tracking-wide text-xl">Beberapa karya pilihan saya.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
					{[...Arts.slice(0, 3)].map((art, index) => (
						<Card key={index} className="p-0 gap-0">
							<div className="relative w-full aspect-square rounded-2xl overflow-hidden">
								<ImageWithErrorHandling src={art.image} alt={art.title} fill className="w-full h-full object-cover" loadingClassName="rounded-2xl" priority={index === 0} />
							</div>
							<div className="p-4">
								<h4 className="text-2xl font-semibold">{art.title}</h4>
								<p className="text-gray-500 tracking-wide text-xl mb-4">{art.description.slice(0, 50)}...</p>
								<Link href={`art/${art.slug}`}>
									<Button variant="outline" size="sm" className="flex items-center self-start">
										Detail <ChevronRight />
									</Button>
								</Link>
							</div>
						</Card>
					))}
				</div>
			</div>

			{/* Testimonials */}
			<TestimonialsSwiper />
		</Page>
	)
}
