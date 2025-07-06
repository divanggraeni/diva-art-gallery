import { supabaseServer } from "@/lib/supabase/server"

export async function useSupabaseServer<T>(table: string): Promise<T[]> {
	const supabase = await supabaseServer()
	const { data, error } = await supabase.from(table).select("*").order("id", { ascending: true })

	if (error) throw error
	return data as T[]
}
