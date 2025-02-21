import TrainingPackageList from "../../../components/TrainingPackageList/TrainingPackageList";
import { StepsToSuccessList } from "../../../components/StepsToSuccessList/StepsToSuccessList";
import ContactInfo from "../../../components/ContactInfo/ContactInfo";
import CallOrTextUs from "../../../components/CallOrTextUs/CallOrTextUs";
import styles from "./TrainingPlanList.module.css";
import orangeShoppingCart from "../../../assets/images/orange-shopping-cart.png";
import orangeContact from "../../../assets/images/orange-contact.png";
import orangeWeight from "../../../assets/images/orange-weight.png";
import orangeShield from "../../../assets/images/orange-shield.png";
import { getOnlinePlanOptions } from "../../../api/api";
import { Await, defer, useLoaderData } from "react-router-dom";
import { OnlinePlanGetOptionInterface } from "../../../interfaces";
import SocialsList from "../../../components/SocialsList/SocialsList";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { Suspense, useLayoutEffect } from "react";

const onlinePlanOptionsQuery = () => {
  return {
    queryKey: ["onlineOptions"],
    queryFn: async () => await getOnlinePlanOptions(),
    staleTime: 1000 * 60 * 5,
  };
};

export async function loader(queryClient: QueryClient) {
  const query = onlinePlanOptionsQuery();
  const data =
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(onlinePlanOptionsQuery()));
  return defer({ onlinePlanOptionsPromise: data });
}

export default function TrainingPlansList() {
  const onlinePlanOptions = useLoaderData() as Awaited<{
    onlinePlanOptionsPromise: OnlinePlanGetOptionInterface[];
  }>;
  const steps = [
    {
      index: 1,
      title: "Zakup",
      imgUrl: orangeShoppingCart,
      textContent:
        "Po wyborze planu i dokonaniu zakupu na stronie, klient otrzymuje e-mail z potwierdzeniem zawierającym szczegóły transakcji oraz wstępne instrukcje dotyczące rozpoczęcia współpracy z trenerem.",
    },
    {
      index: 2,
      title: "Kontakt i wywiad",
      imgUrl: orangeContact,
      textContent:
        "Po zakupie, trener inicjuje kontakt z klientem poprzez WhatsApp, ustalając termin rozmowy-wywiadu. Podczas tej rozmowy, trener dopytuje o cele treningowe, dotychczasową aktywność fizyczną, preferencje i ewentualne ograniczenia zdrowotne klienta.",
    },
    {
      index: 3,
      title: "Stworzenie planu",
      imgUrl: orangeWeight,
      textContent:
        "Na podstawie informacji z wywiadu, trener opracowuje spersonalizowany plan treningowy, który dokładnie odpowiada celom i możliwościom klienta. Plan jest przesyłany przez aplikację WhatsApp wraz z instrukcjami dotyczącymi każdego ćwiczenia.",
    },
    {
      index: 4,
      title: "Praca i wsparcie",
      imgUrl: orangeShield,
      textContent:
        "Klient rozpoczyna treningi według otrzymanego planu, mając możliwość stałego kontaktu z trenerem przez WhatsApp dla uzyskania wsparcia, motywacji oraz odpowiedzi na wszelkie pytania. Trener monitoruje postępy i dostosowuje plan w miarę potrzeb, zapewniając ciągłe wsparcie na drodze do osiągnięcia celów.",
    },
  ];

  const { data: onlineOptions } = useQuery({
    ...onlinePlanOptionsQuery(),
    initialData: onlinePlanOptions.onlinePlanOptionsPromise,
  });

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <Suspense fallback={<p>Pobieranie dostępnych opcji..</p>}>
        <Await resolve={onlineOptions}>
          {(onlinePlanOptions) => (
            <TrainingPackageList onlineOptions={onlinePlanOptions} />
          )}
        </Await>
      </Suspense>
      <StepsToSuccessList stepsList={steps} />
      <ContactInfo containerClassName={styles.contactInfoContainer} />
      <CallOrTextUs />
      <SocialsList />
    </>
  );
}
