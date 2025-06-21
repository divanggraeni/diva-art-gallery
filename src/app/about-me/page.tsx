import Page from "@/components/Page"
import Card from "@/components/ui/Card"
import ImageWithErrorHandling from "@/components/ui/ImageWithErrorHandling"

export default function About() {
	return (
		<Page
			title={
				<>
					About <span className="font-bold">Diva</span>
				</>
			}
			description="Saya adalah seorang remaja asal Purwokerto yang memiliki hobi menggambar sejak kecil. Seiring waktu, saya mulai menekuni seni menggambar, khususnya dengan media pensil, karena saya tertarik pada detail, tekstur, dan ekspresi yang bisa disampaikan lewat garis hitam-putih."
		>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				{/* Card 1 */}
				<Card variant="outline" className="md:col-span-2">
					<h3 className="text-4xl font-semibold">My Journey</h3>
					<p className="text-gray-500 tracking-wide text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet orci finibus, egestas mi molestie, commodo nunc. Quisque eleifend in massa a tempor. Duis egestas mauris nec risus varius aliquam. Donec bibendum diam ut metus rhoncus hendrerit. Quisque placerat varius imperdiet.</p>
					<p className="text-gray-500 tracking-wide text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris justo arcu, cursus id eleifend in, aliquet at ligula. Phasellus efficitur vestibulum justo, eu molestie metus vulputate ac. Praesent a magna sit amet diam consectetur hendrerit.</p>
				</Card>

				{/* Image 2 */}
				<div className="aspect-[9/16] md:aspect-auto rounded-2xl overflow-hidden md:col-span-2 md:row-span-2 md:h-full">
					<ImageWithErrorHandling src="/images/about/diva.jpg" alt="Diva" fill className="w-full h-full object-cover" lazy={true} />
				</div>

				{/* Image 1 */}
				<div className="aspect-[4/3] rounded-2xl overflow-hidden md:col-span-2">
					<ImageWithErrorHandling src="/images/about/diva-rifqi.jpg" alt="Diva and Rifqi" fill className="w-full h-full" lazy={true} />
				</div>

				{/* Image 3 */}
				<div className="aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden md:col-span-2 md:row-span-2 md:h-full">
					<ImageWithErrorHandling src="/images/about/coding.jpg" alt="Coding" fill className="w-full h-full object-cover" lazy={true} />
				</div>

				{/* Card 2 */}
				<Card variant="outline" className="md:col-span-2">
					<h3 className="text-4xl font-semibold">Experience</h3>
					<p className="text-gray-500 tracking-wide text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae congue lorem. Pellentesque lectus lectus, sodales sit amet sem in, tempus porttitor tellus. Quisque facilisis ultricies euismod. Fusce non libero turpis. Praesent sodales hendrerit massa. Sed egestas eros sit amet ligula rhoncus aliquam. Vivamus quis magna vulputate, hendrerit lectus sit amet, euismod eros. Aenean at bibendum nibh.</p>
				</Card>

				{/* Image 4 */}
				<div className="aspect-[4/3] rounded-2xl overflow-hidden md:col-span-2">
					<ImageWithErrorHandling src="/images/about/diva-rifqi-2.jpg" alt="Diva Rifqi" fill className="w-full h-full" lazy={true} />
				</div>
			</div>
		</Page>
	)
}
