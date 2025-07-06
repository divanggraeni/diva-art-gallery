"use client"

import { useState } from "react"
import Page from "@/components/Page"
import ImageWithErrorHandling from "@/components/ui/ImageWithErrorHandling"
import Card from "@/components/ui/Card"
import Link from "next/link"
import Button from "@/components/ui/Button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { useArts } from "@/hooks/useArts"
import { Skeleton } from "@/components/ui/Skeleton"

export default function About() {
	const { arts, loading, error } = useArts()
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 10

	// Hitung total halaman
	const totalPages = Math.ceil(arts.length / itemsPerPage)

	// Hitung index start dan end untuk slice
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage

	// Data yang akan ditampilkan pada halaman saat ini
	const currentArts = arts.slice(startIndex, endIndex)

	// Fungsi untuk berpindah halaman
	const goToPage = (page: number) => {
		setCurrentPage(page)
		// Scroll ke atas saat berpindah halaman
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	// Generate array nomor halaman untuk pagination
	const getPageNumbers = () => {
		const pages = []
		const maxVisiblePages = 5

		if (totalPages <= maxVisiblePages) {
			// Jika total halaman <= 5, tampilkan semua
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i)
			}
		} else {
			// Jika total halaman > 5, tampilkan dengan logic
			if (currentPage <= 3) {
				// Jika di halaman 1-3, tampilkan 1,2,3,4,5
				for (let i = 1; i <= 5; i++) {
					pages.push(i)
				}
			} else if (currentPage >= totalPages - 2) {
				// Jika di 3 halaman terakhir
				for (let i = totalPages - 4; i <= totalPages; i++) {
					pages.push(i)
				}
			} else {
				// Jika di tengah
				for (let i = currentPage - 2; i <= currentPage + 2; i++) {
					pages.push(i)
				}
			}
		}

		return pages
	}

	return (
		<Page
			title={
				<>
					Gallery <span className="font-bold">Diva</span>
				</>
			}
			description="Kumpulan karya seni yang saya hasilkan dengan penuh ketelitian dan ekspresi melalui media pensil. Setiap gambar menyimpan cerita, suasana, dan pesan visual yang ingin saya bagikan."
		>
			{/* Grid Gambar */}
			<div className="grid grid-cols-1 w-full md:grid-cols-3 gap-4 mb-8">
				{loading && [...Array(3)].map((_, index) => <Skeleton key={index} className="h-96" />)}

				{error && (
					<div className="flex justify-center">
						<p className="text-2xl">Error: {error}</p>
					</div>
				)}

				{!loading &&
					!error &&
					currentArts.map((art, index) => (
						<Card key={art.id} className="p-0 gap-0">
							<div className="relative w-full aspect-square rounded-2xl overflow-hidden">
								<ImageWithErrorHandling src={art.image} alt={art.title} fill className="w-full h-full object-cover" loadingClassName="rounded-2xl" priority={index === 0 && currentPage === 1} />
							</div>
							<div className="p-4">
								<h4 className="text-2xl font-semibold">{art.title}</h4>
								<p className="text-gray-500 tracking-wide text-xl mb-4" dangerouslySetInnerHTML={{ __html: art.description.slice(0, 50) + "..." }}></p>
								<Link href={`arts/${art.slug}`}>
									<Button variant="outline" size="sm" className="flex items-center self-start">
										Detail <ChevronRight />
									</Button>
								</Link>
							</div>
						</Card>
					))}
			</div>

			{/* Pagination */}
			{!loading && !error && totalPages > 1 && (
				<div className="flex flex-col items-center gap-4">
					{/* Info halaman */}
					<p className="text-gray-600">
						Menampilkan {startIndex + 1}-{Math.min(endIndex, arts.length)} dari {arts.length} karya seni
					</p>

					{/* Navigasi pagination */}
					<div className="flex items-center gap-2 flex-wrap justify-center">
						{/* Tombol Previous */}
						<Button variant="outline" size="sm" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="flex items-center gap-1">
							<ChevronLeft size={16} />
							Previous
						</Button>

						{/* Nomor halaman */}
						{getPageNumbers().map((pageNum) => (
							<Button key={pageNum} variant={currentPage === pageNum ? "default" : "outline"} size="sm" onClick={() => goToPage(pageNum)} className="min-w-[40px]">
								{pageNum}
							</Button>
						))}

						{/* Dots jika ada gap */}
						{totalPages > 5 && currentPage < totalPages - 2 && <span className="px-2 text-gray-500">...</span>}

						{/* Tombol ke halaman terakhir jika tidak terlihat */}
						{totalPages > 5 && currentPage < totalPages - 2 && (
							<Button variant="outline" size="sm" onClick={() => goToPage(totalPages)} className="min-w-[40px]">
								{totalPages}
							</Button>
						)}

						{/* Tombol Next */}
						<Button variant="outline" size="sm" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="flex items-center gap-1">
							Next
							<ChevronRight size={16} />
						</Button>
					</div>
				</div>
			)}
		</Page>
	)
}
