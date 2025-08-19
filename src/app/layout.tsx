import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Diva Nur Anggraeni",
	description: "Saya adalah seorang remaja asal Purwokerto yang memiliki hobi menggambar sejak kecil. Seiring waktu, saya mulai menekuni seni menggambar, khususnya dengan media pensil, karena saya tertarik pada detail, tekstur, dan ekspresi yang bisa disampaikan lewat garis hitam-putih.",
	keywords: ["Diva Nur Anggraeni", "Diva", "Artist", "High School Artist", "Portfolio"],
	authors: [{ name: "Diva Nur Anggraeni" }],
	creator: "Diva Nur Anggraeni",
	openGraph: {
		title: "Diva Nur Anggraeni - Web Developer Portfolio",
		description: "Explore the personal portfolio of Diva Nur Anggraeni, a high school student passionate about drawing.",
		url: "",
		siteName: "Diva Nur Anggraeni Portfolio",
		type: "website",
		images: [
			{
				url: "",
				width: 1200,
				height: 630,
				alt: "Diva Nur Anggraeni Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Diva Nur Anggraeni - Web Developer Portfolio",
		description: "Discover Diva's projects and skills in pencil drawing.",
		images: [""],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} antialiased bg-gray-100 flex flex-col min-h-svh`}>
				<Header />

                {children}
                
                <Footer />
			</body>
		</html>
	)
}
