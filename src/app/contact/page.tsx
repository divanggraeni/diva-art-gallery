"use client"

import Page from "@/components/Page"
import Button from "@/components/ui/Button"
import Link from "next/link"
import { useContacts } from "@/hooks/useContacts"

export default function Contact() {
	const { contacts, loading, error } = useContacts()

	return (
		<Page
			title={
				<>
					Connect with <span className="font-bold">Diva</span>
				</>
			}
			description="Saya selalu terbuka terhadap peluang dan kolaborasi baru. Baik Anda ingin memulai proyek atau sekadar ingin mengobrol, jangan ragu untuk menghubungi saya."
		>
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

			{!loading && !error && contacts.length === 0 && (
				<div className="flex justify-center">
					<p className="text-2xl">No contact items found</p>
				</div>
			)}

			{!loading && !error && contacts.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{contacts.map((contact, index) => (
						<Link key={index} href={contact.url} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" className="flex flex-row items-center justify-center gap-3 p-4 w-full hover:bg-white transition-colors hover:text-black">
								<p dangerouslySetInnerHTML={{ __html: contact.icon }}></p>
								<p className="text-2xl">{contact.label}</p>
							</Button>
						</Link>
					))}
				</div>
			)}
		</Page>
	)
}
