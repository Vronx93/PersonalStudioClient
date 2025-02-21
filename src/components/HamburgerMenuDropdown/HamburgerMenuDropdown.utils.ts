import { QueryClient } from "@tanstack/react-query";
import { getImage } from "../../api/api";

export async function handleHover({
  queryClient,
  queryKey,
  queryFn,
  staleTimeInMinutes,
}: {
  queryClient: QueryClient;
  queryKey: any[];
  queryFn: () => void;
  staleTimeInMinutes: number;
}) {
  await queryClient.prefetchQuery({
    queryKey: queryKey,
    queryFn: queryFn,
    staleTime: 1000 * 60 * staleTimeInMinutes,
  });

  const queryData = queryClient.getQueryData(queryKey) as
    | { imageDetails: { imageId: string }[] }[]
    | undefined;

  if (queryData) {
    queryData.map(async (coach) => {
      for (const image of coach.imageDetails) {
        queryClient.ensureQueryData({
          queryKey: ["image", image.imageId],
          queryFn: async () => await getImage(image.imageId),
        });
      }
    });
  }
}
