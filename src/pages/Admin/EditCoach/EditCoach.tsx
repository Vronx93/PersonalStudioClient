import { QueryClient, useQuery } from "@tanstack/react-query";
import { addImage, getCoach, removeImage, updateCoach } from "../../../api/api";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
import {
  Await,
  defer,
  redirect,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { CoachInterface } from "../../../interfaces";
import { Suspense } from "react";
import EditCoachForm from "../../../components/EditCoachForm/EditCoachForm";

function coachQuery(coachId: string) {
  return {
    queryKey: ["coachesList", coachId],
    queryFn: async () => await getCoach(coachId),
    staleTime: 1000 * 60 * 10,
  };
}

async function loader({
  coachId,
  queryClient,
}: {
  coachId: string;
  queryClient: QueryClient;
}) {
  const data = await queryClient.ensureQueryData(coachQuery(coachId));
  return defer({ data });
}

async function action({
  request,
  queryClient,
  coachId,
}: {
  request: Request;
  queryClient: QueryClient;
  coachId: string;
}) {
  const formData = await request.formData();
  const newImages = formData.getAll("image") as string[] | null;
  const deletedImages = formData.getAll("deletedImg") as string[] | null;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  if (deletedImages && deletedImages.length > 0) {
    for (const imageId of deletedImages) {
      await removeImage(imageId);
    }
  }
  if (newImages && newImages.length > 0) {
    for (const imageString of newImages) {
      await addImage({
        productId: coachId,
        imageContent: imageString,
        isPrimary: false,
      });
    }
  }
  await updateCoach({ coachId, name, description });
  queryClient.invalidateQueries({ queryKey: ["coachesList"] });
  return redirect("/admin/coaches");
}

export default function EditCoach() {
  const loaderData = useLoaderData() as Awaited<{ data: CoachInterface }>;
  const params = useParams() as { id: string };
  const { data: coachData } = useQuery({
    ...coachQuery(params.id),
    initialData: loaderData.data,
  });
  return (
    <>
      <AdminHeader title={"Trener"} />
      <Suspense fallback={<p>Wczytywanie informacji o trenerze..</p>}>
        <Await resolve={coachData}>
          {(coach: CoachInterface) => <EditCoachForm coach={coach} />}
        </Await>
      </Suspense>
    </>
  );
}

EditCoach.loader = loader;
EditCoach.action = action;
