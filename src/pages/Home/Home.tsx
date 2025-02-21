import BenefitList from "../../components/BenefitList/BenefitList";
import Hero from "../../components/Hero/Hero";
import ReviewList from "../../components/ReviewList/ReviewList";
import TrainingOfferSection from "../../components/TrainingOfferSection/TrainingOfferSection";
import TrainingSteps from "../../components/TrainingSteps/TrainingSteps";
import TransformationList from "../../components/TransformationList/TransformationList";
import TransformationsText from "../../components/TransformationText/TransofmationsText";
import { mockReviewList2 } from "../../test/mocks/mockData";
import benefits from "../../benefits.json";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import JoinCommunity from "../../components/JoinCommunity/JoinCommunity";
import styles from "./Home.module.css";
import { getLatestProduct, getTransformations } from "../../api/api";
import { Await, defer, useLoaderData } from "react-router-dom";
import { GetTransformationData, shopItemInterface } from "../../interfaces";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { Suspense, useLayoutEffect } from "react";
import NewestProduct from "../../components/NewestProduct/NewestProduct";

const transformationListQuery = () => {
  return {
    queryKey: ["transformationList"],
    queryFn: async () => await getTransformations(),
    staleTime: 1000 * 60 * 10,
  };
};

const latestProductQuery = () => {
  return {
    queryKey: ["latestProduct"],
    queryFn: async () => await getLatestProduct(),
    staleTime: 1000 * 60 * 10,
  };
};

export async function loader(queryClient: QueryClient) {
  const transformationsQuery = transformationListQuery();
  const newProductQuery = latestProductQuery();
  const transformations =
    queryClient.getQueryData(transformationsQuery.queryKey) ??
    (await queryClient.fetchQuery(transformationListQuery()));
  const newProduct = queryClient.getQueryData(newProductQuery.queryKey) ??
    (await queryClient.fetchQuery(latestProductQuery()));
  return defer({ transformations: transformations, latestProduct: newProduct });
}

export default function Home() {
  const loaderData = useLoaderData() as Awaited<{
    transformations: GetTransformationData[];
    latestProduct: shopItemInterface;
  }>;

  const { data: transformationsList } = useQuery({
    ...transformationListQuery(),
    initialData: loaderData.transformations,
  });

  const { data: latestProduct } = useQuery({
    ...latestProductQuery(),
    initialData: loaderData.latestProduct,
  });

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Hero />
      <TransformationsText />
      <Suspense fallback={<p>Trwa ładowanie transformacji..</p>}>
        <Await resolve={transformationsList}>
          {(transformations) => (
            <TransformationList transformationList={transformations} />
          )}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Ładowanie najnowszego produktu..</p>}>
        <Await resolve={latestProduct}>
          {(latestProduct) => <NewestProduct product={latestProduct} />}
        </Await>
      </Suspense>
      <TrainingSteps />
      <TrainingOfferSection />
      <ReviewList reviews={mockReviewList2} />
      <BenefitList benefits={benefits} />
      <ContactInfo containerClassName={styles.contactInfoContainer} />
      <JoinCommunity />
    </>
  );
}
