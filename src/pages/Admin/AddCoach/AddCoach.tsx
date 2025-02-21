import AddCoachForm from "../../../components/AddCoachForm/AddCoachForm";
import { addCoachApi, addImage } from "../../../api/api";
import { redirect } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({
  request,
  queryClient,
}: {
  request: Request;
  queryClient: QueryClient;
}) {
  // get name and description
  const formData = await request.formData();
  const name = formData.get("name") as unknown as string;
  const description = formData.get("description") as unknown as string;
  // add coach to get his id
  const coachId = await addCoachApi({ name, description });
  // get and add coach images
  const images = (formData.getAll("image") as unknown as string[] | []) || [];
  if (images) {
    for (const image of images) {
      await addImage({
        productId: coachId,
        imageContent: image,
        isPrimary: false,
      });
    }
  }
  queryClient.invalidateQueries({
    queryKey: ["coachesList"],
  });
  return redirect("/admin/coaches");
}

export default function AddCoach() {
  return (
    <>
      <AddCoachForm />
    </>
  );
}
