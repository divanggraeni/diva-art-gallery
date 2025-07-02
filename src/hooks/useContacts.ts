import { ContactItem } from "@/types"
import { useSupabase } from "./useSupabase"

export function useContacts() {
	const { data: contacts, loading, error } = useSupabase<ContactItem>("contacts")
	return { contacts, loading, error }
}
