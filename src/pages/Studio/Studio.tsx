import { useLayoutEffect } from "react";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import SeeMorePhotos from "../../components/SeeMorePhotos/SeeMorePhotos";
import HistoryList from "../../components/HistoryList/HistoryList";
import styles from "./Studio.module.css";
import NavArticle from "../../components/NavArticle/NavArticle";
import StudioHeroImg from "../../components/StudioHeroImg/StudioHeroImg";
import PhotoCollage from "../../components/PhotoCollage/PhotoCollage";
import mockStudioImg from "../../assets/images/studio-mock-img.jpeg";
import StudioArticle from "../../components/StudioArticle/StudioArticle";
import historyImage from "../../assets/images/mock-history-studio.jpeg";
import { HistoryElementInterface } from "../../interfaces";

export default function Studio() {
  const navArticleData = {
    title: "Witaj w naszym",
    fancyTitleRight: "Studio",
    text: (
      <p>
        Czy tradycyjna siłownia kojarzy Ci się z monotonią, bólem mięśni i
        rutynowym podnoszeniem ciężarów? W NaszymStudio stawiamy na wyjątkowość
        i innowacyjne ćwiczenia, które sprawią, że zapomnisz, czym jest nuda!
      </p>
    ),
  };
  const studioArticleTextList1 = [
    "Naszą wyjątkowość tworzą ćwiczenia wykorzystujące masę własnego ciała, dzięki czemu nigdy nie będziesz zależny/a od sprzętu czy lokalizacji siłowni.",
    "Dzięki naszym innowacyjnym metodom treningowym zyskasz doskonałą sprawność, kondycję oraz elastyczność, której nie osiągniesz tradycyjnymi ćwiczeniami z ciężarami.",
    "W NaszymStudio czeka na Ciebie zespół uśmiechniętych i wykwalifikowanych trenerów, oferujących treningi indywidualne, grupowe oraz zajęcia dla dzieci w wieku 8-12 lat.",
  ];

  const studioArticleTextList2 = [
    "Ćwicząc z nami, nie tylko poprawisz swoją sylwetkę i zdrowie.",
    "Opanujesz imponujące ćwiczenia takie jak stanie na rękach, back lever, planche czy smocza flaga, które zachwycają!",
    "Jeśli chcesz zobaczyć, jak możemy pomóc Ci w metamorfozie sylwetki i dbaniu o zdrowie.",
  ];

  const historyList: HistoryElementInterface[] = [
    {
      title: "2015",
      descriptionList: [
        "Nasze studio powstało z myślą o sportowych pasjonatach. Wyposażone w nowoczesny sprzęt i wsparcie doświadczonych trenerów, zapewniało efektywne i dostosowane do indywidualnych potrzeb treningi. Już od pierwszych dni cieszyliśmy się zaufaniem wielu entuzjastów aktywności fizycznej.",
      ],
      imagesList: [historyImage],
      altForImages: "Studio.",
    },
    {
      title: "2020",
      descriptionList: [
        "Rozwijamy się, by sprostać rosnącym oczekiwaniom. Nasze studio zostało zmodernizowane, aby oferować najnowsze technologie i metody treningowe, zapewniając naszym klientom najwyższy poziom wsparcia. Nowe inwestycje umożliwiły nam poszerzenie oferty o innowacyjne programy treningowe.",
      ],
      imagesList: [historyImage],
      altForImages: "Studio.",
    },
    {
      title: "2024",
      descriptionList: [
        "Kontynuujemy naszą misję, by być liderem w branży fitness. Nasze studio stało się centrum sportowych sukcesów, oferując innowacyjne rozwiązania i wsparcie trenerów, aby każdy trening był maksymalnie efektywny. Dziś jesteśmy miejscem, które inspiruje i motywuje do osiągania najwyższych celów.",
      ],
      imagesList: [historyImage],
      altForImages: "Studio.",
    },
  ];

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <NavArticle
        title={navArticleData.title}
        fancyTitleRight={navArticleData.fancyTitleRight}
        text={navArticleData.text}
      />
      <StudioHeroImg />
      <StudioArticle newLineTextList={studioArticleTextList1} />
      <PhotoCollage
        photoList={[mockStudioImg, mockStudioImg, mockStudioImg, mockStudioImg]}
      />
      <StudioArticle newLineTextList={studioArticleTextList2} />
      <PhotoCollage
        photoList={[mockStudioImg, mockStudioImg, mockStudioImg, mockStudioImg]}
      />
      <HistoryList
        title={"Poznaj naszą"}
        fancyTitleRight={"Historię"}
        historyList={historyList}
        imageStyles={styles.historyImage}
      />
      <ContactInfo containerClassName={styles.contactInfoContainer} />
      <SeeMorePhotos />
    </>
  );
}
