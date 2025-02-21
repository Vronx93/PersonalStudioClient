import { useLayoutEffect } from "react";
import CallOrTextUs from "../../components/CallOrTextUs/CallOrTextUs";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import NavArticle from "../../components/NavArticle/NavArticle";
import SocialsList from "../../components/SocialsList/SocialsList";

export default function ContactPage() {
  const articleData = {
    title: "Skontaktuj się z",
    fancyTitleRight: "nami!",
    text: (
      <p>
        Z przyjemnością odpowiem na wszystkie Twoje pytania i pomogę Ci znaleźć
        najlepsze rozwiązania treningowe dopasowane do Twoich potrzeb i celów.
        Zapewniam szybką i profesjonalną odpowiedź na każde zapytanie.
      </p>
    ),
  };

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <NavArticle
        title={articleData.title}
        fancyTitleRight={articleData.fancyTitleRight}
        text={articleData.text}
      />
      <ContactInfo />
      <CallOrTextUs />
      <SocialsList />
    </>
  );
}
