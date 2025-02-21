import { redirect } from "react-router-dom";
import { addOnlinePlanOption } from "../../../api/api";
import AddPlanOptionForm from "../../../components/AddPlanOptionForm/AddPlanOptionForm";
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
  const price = formData.get("price") as unknown as number;
  const taxInPercent = formData.get("taxInPercent") as unknown as number;
  const monthCount = formData.get("monthCount") as unknown as number;
  await addOnlinePlanOption({ name, price, taxInPercent, monthCount });
  queryClient.invalidateQueries({
    queryKey: ["onlineOptions"],
  });
  return redirect("/admin/online-options");
}

export default function AddOnlinePlanOption() {
  return <AddPlanOptionForm />;
}
