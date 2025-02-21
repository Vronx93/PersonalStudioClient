import { QueryClient } from "@tanstack/react-query";
import { getImage } from "../api/api";

export default async function usePrefetchImagesFromItemsList({
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

  if (queryData && queryData?.length > 0) {
    queryData.forEach(async (coach) => {
      coach?.imageDetails?.forEach((image) => {
        queryClient.ensureQueryData({
          queryKey: ["image", image.imageId],
          queryFn: async () => await getImage(image.imageId),
        });
      });
    });
  }
}
