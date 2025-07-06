import { ArtProps } from "@/types"
import { useSupabase } from "./useSupabase"
import { useSupabaseServer } from "./useSupabaseServer"

// Client hook
export function useArts() {
	const { data: arts, loading, error } = useSupabase<ArtProps>("art")
	return { arts, loading, error }
}

// Server hook
export async function getArts(): Promise<ArtProps[]> {
	try {
		const arts = await useSupabaseServer<ArtProps>("art")
		return arts
	} catch (error) {
		console.error("Error fetching arts:", error)
		throw error
	}
}
