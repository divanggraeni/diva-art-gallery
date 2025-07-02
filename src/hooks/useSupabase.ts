import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase/client"

export function useSupabase<T>(table: string) {
	const [data, setData] = useState<T[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true)
				const { data, error } = await supabase.from(table).select("*").order("id", { ascending: true })
				if (error) throw error
				setData(data || [])
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred")
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [table])

	return { data, loading, error }
}
