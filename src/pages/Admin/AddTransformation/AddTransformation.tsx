import { redirect } from "react-router-dom";
import AddTransformationForm from "../../../components/AddTransformationForm/AddTransforomationForm";
import {
  addImgAfterTransformation,
  addImgBeforeTransformation,
  addTransformation,
} from "../../../api/api";
import { QueryClient } from "@tanstack/react-query";

export async function action({
  request,
  queryClient,
}: {
  request: Request;
  queryClient: QueryClient;
}) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const lostWeight = formData.get("lostWeight") as unknown as number;
  const yearsOld = formData.get("yearsOld") as unknown as number;
  const imageBeforeContent = formData.get("imgBefore") as string;
  const imageAfterContent = formData.get("imgAfter") as string;
  const transformationId = await addTransformation({
    name,
    lostWeight,
    yearsOld,
  });
  if (!transformationId) {
    throw new Error("Podczas dodawania transformacji wystąpił błąd.");
  }
  await addImgBeforeTransformation({ transformationId, imageBeforeContent });
  await addImgAfterTransformation({ transformationId, imageAfterContent });
  queryClient.invalidateQueries({
    queryKey: ["transformationList"],
  });
  return redirect("/admin/transformations");
}

export default function AddTransformation() {
  return <AddTransformationForm />;
}
