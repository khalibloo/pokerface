import { useQuery, UseQueryOptions } from "react-query";
import axios from "@/utils/request";

export function useRooms(queryOptions?: UseQueryOptions<Room[], Error>) {
  return useQuery<Room[], Error>(
    "rooms",
    async () => {
      const { data } = await axios.get("/rooms");
      return data;
    },
    queryOptions,
  );
}
