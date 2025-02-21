import { Await, defer, useLoaderData } from "react-router-dom";
import { getCoaches } from "../../api/api";
import { Suspense, useLayoutEffect } from "react";
import CoachesList from "../../components/CoachesList/CoachesList";
import { CoachInterface } from "../../interfaces";
import CoachesHero from "../../components/CoachesHero/CoachesHero";
import CallOrTextUs from "../../components/CallOrTextUs/CallOrTextUs";
import styles from "./CoachesPage.module.css";
import SocialsList from "../../components/SocialsList/SocialsList";
import { QueryClient, useQuery } from "@tanstack/react-query";

const coachesDataQuery = () => {
  return {
    queryKey: ["coachesList"],
    queryFn: async () => await getCoaches(),
    staleTime: 1000 * 60 * 10,
  };
};

export async function loader(queryClient: QueryClient) {
  const query = coachesDataQuery();
  const data =
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(coachesDataQuery()));
  return defer({ coachesPromise: data });
}

export default function CoachesPage() {
  const loaderData = useLoaderData() as unknown as {
    coachesPromise: CoachInterface;
  };

  const { data: coaches } = useQuery({
    ...coachesDataQuery(),
    initialData: loaderData.coachesPromise,
  });

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <CoachesHero />
      <Suspense fallback={<p>Pobieranie danych o trenerach..</p>}>
        <Await resolve={coaches}>
          {(coachesData) => <CoachesList listData={coachesData} />}
        </Await>
      </Suspense>
      <CallOrTextUs addClass={styles.callOrText} />
      <SocialsList />
    </>
  );
}
