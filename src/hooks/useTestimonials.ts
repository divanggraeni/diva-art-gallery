import { TestimonialProps } from "@/types"
import { useSupabase } from "./useSupabase"

export function useTestimonials() {
	const { data: testimonials, loading, error } = useSupabase<TestimonialProps>("testimonials")
	return { testimonials, loading, error }
}
