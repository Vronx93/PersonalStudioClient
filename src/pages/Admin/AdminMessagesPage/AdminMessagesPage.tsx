import { QueryClient, useQuery } from "@tanstack/react-query";
import { getCoaches, getMessages } from "../../../api/api";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
import AdminMessageList from "../../../components/AdminMessageList/AdminMessageList";
import { Await, defer, useLoaderData } from "react-router-dom";
import { CoachInterface, MessageInterface } from "../../../interfaces";
import { Suspense } from "react";

function messagesQuery() {
  return {
    queryKey: ["messages"],
    queryFn: async () => await getMessages(),
  };
}

function coachesQuery() {
  return {
    queryKey: ["coachesList"],
    queryFn: async () => await getCoaches(),
  };
}

async function loader({ queryClient }: { queryClient: QueryClient }) {
  const msgListQuery = messagesQuery();
  const messagesData =
    queryClient.getQueryData(msgListQuery.queryKey) ??
    (await queryClient.fetchQuery(messagesQuery()));
  const coachListQuery = coachesQuery();
  const coachesData =
    queryClient.getQueryData(coachListQuery.queryKey) ??
    (await queryClient.fetchQuery(coachesQuery()));
  return defer({ messagesData, coachesData });
}

export default function AdminMessagesPage() {
  const loaderDataPromise = useLoaderData() as Awaited<{
    messagesData: MessageInterface[];
    coachesData: CoachInterface[];
  }>;
  const { data: messages } = useQuery({
    ...messagesQuery(),
    initialData: loaderDataPromise.messagesData,
  });

  const { data: coaches } = useQuery({
    ...coachesQuery(),
    initialData: loaderDataPromise.coachesData,
  });

  return (
    <>
      <AdminHeader title={"Wiadomości"} />
      <Suspense fallback={<p>Ładowanie wiadomości..</p>}>
        <Await resolve={{ messages, coaches }}>
          {({ messages, coaches }) => (
            <AdminMessageList messages={messages} coaches={coaches} />
          )}
        </Await>
      </Suspense>
    </>
  );
}

AdminMessagesPage.loader = loader;
