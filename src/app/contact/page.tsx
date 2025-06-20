import Page from "@/components/Page"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import Link from "next/link"
import { contactItems } from "@/data/contacts"

export default function Contact() {
	return (
		<Page title="Connect" description="Saya selalu terbuka terhadap peluang dan kolaborasi baru. Baik Anda ingin memulai proyek atau sekadar ingin mengobrol, jangan ragu untuk menghubungi saya.">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{contactItems.map((item, index) => (
					<Link key={index} href={item.href} target="_blank" rel="noopener noreferrer">
						<Button variant="outline" className="flex flex-row items-center justify-center gap-3 p-4 w-full hover:bg-white transition-colors hover:text-black">
							{item.icon}
							<p className="text-2xl">{item.label}</p>
						</Button>
					</Link>
				))}
			</div>
		</Page>
	)
}
