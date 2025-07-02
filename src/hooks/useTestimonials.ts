import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase/client"
import { TestimonialProps } from "@/types"

export function useTestimonials() {
	const [testimonials, setTestimonials] = useState<TestimonialProps[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>()

	useEffect(() => {
		async function fetchTestimonials() {
			try {
				setLoading(true)
				const { data, error } = await supabase.from("testimonials").select("*").order("id", { ascending: true })

				if (error) {
					throw error
				}

				setTestimonials(data || [])
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred")
			} finally {
				setLoading(false)
			}
		}

		fetchTestimonials()
	}, [])

	return { testimonials, loading, error }
}
