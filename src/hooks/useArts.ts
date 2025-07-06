import { ArtProps } from "@/types";
import { useSupabase } from "./useSupabase";

export function useArts() {
    const { data: arts, loading, error } = useSupabase<ArtProps>("art")
    return { arts, loading, error }
}