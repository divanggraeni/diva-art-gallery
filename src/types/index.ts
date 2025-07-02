import { ButtonHTMLAttributes, JSX } from "react"

export interface PageProps {
	title: React.ReactNode | string
	description: string
	className?: string
	children?: React.ReactNode
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline" | "ghost" | "danger"
	size?: "sm" | "md" | "lg"
	isLoading?: boolean
}

export interface CardProps {
	variant?: "default" | "outline"
	children: React.ReactNode
	className?: string
}

export interface TestimonialProps {
	id: number
	name: string
	instagram: string
	image: string
	testimonial: string
}

export interface ImageWithErrorHandlingProps {
	src: string
	alt: string
	className?: string
	loadingClassName?: string
	lazy?: boolean
	threshold?: number
	[key: string]: number | string | boolean | undefined
}

export interface ArtProps {
	id: number
	title: string
	slug: string
	description: string
	image: string
	music?: {
		title: string
		artist: string
		spotifyId: string
	}
}

export interface MusicPlayerProps {
	music: {
		title: string
		artist: string
		spotifyId: string
	}
}

export interface ContactItem {
	url: string
	label: string
	icon: JSX.Element
}
