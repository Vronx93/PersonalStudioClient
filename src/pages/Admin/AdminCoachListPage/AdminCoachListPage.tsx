import { Await, defer, useLoaderData } from "react-router-dom";
import { getCoaches } from "../../../api/api";
import AdminActionBar from "../../../components/AdminActionBar/AdminActionBar";
import AdminCoachList from "../../../components/AdminCoachList/AdminCoachList";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
import Button from "../../../components/Button/Button";
import { Suspense } from "react";
import { CoachInterface } from "../../../interfaces";
import { QueryClient, useQuery } from "@tanstack/react-query";

function coachesQuery() {
  return {
    queryKey: ["coachesList"],
    queryFn: async () => await getCoaches(),
    staleTime: 1000 * 60 * 5,
  };
}

async function loader(queryClient: QueryClient) {
  const query = coachesQuery();
  const data =
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(coachesQuery()));
  return defer({ coaches: data });
}

export default function AdminCoachListPage() {
  const coachesPromise = useLoaderData() as Awaited<{
    coaches: CoachInterface[];
  }>;

  const { data: coachesList } = useQuery({
    ...coachesQuery(),
    initialData: coachesPromise.coaches,
  });

  return (
    <>
      <AdminHeader title={"Trenerzy"} />
      <AdminActionBar>
        <Button link={"/admin/add-coach"} text={"Dodaj +"} />
      </AdminActionBar>
      <Suspense fallback={<p>Ładowanie listy trenerów..</p>}>
        <Await resolve={coachesList}>
          {(coaches) => <AdminCoachList coaches={coaches} />}
        </Await>
      </Suspense>
    </>
  );
}

AdminCoachListPage.loader = loader;
