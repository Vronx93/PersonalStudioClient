import AboutMeHero from "../../components/AboutMeHero/AboutMeHero";
import HistoryList from "../../components/HistoryList/HistoryList";
import SocialsList from "../../components/SocialsList/SocialsList";
import TextMe from "../../components/TextMe/TextMe";
import transformation1 from "../../assets/images/transformation-history-1.jpeg";
import transformation2 from "../../assets/images/transformation-history-2.jpeg";
import transformation3 from "../../assets/images/transformation-history-3.jpeg";
import transformation4 from "../../assets/images/transformation-history-4.jpeg";
import { useLayoutEffect } from "react";

export default function AboutMe() {
  const historyList = [
    {
      title: "2016",
      descriptionList: [
        "W 2016 roku rozpocząłem swoją przygodę z kalisteniką, zainspirowany prostotą i efektywnością tego rodzaju treningu. Jako osoba, która wcześniej zmagała się z rutyną na siłowni, odkryłem, że ćwiczenia z własną masą ciała przynoszą nie tylko niesamowite rezultaty fizyczne, ale także mentalne. Codzienne treningi stały się moją pasją, a ja sam zauważyłem szybkie postępy w sile, wytrzymałości i elastyczności.",
        "W tych pierwszych dwóch latach zdobyłem solidne podstawy techniczne i teoretyczne, które pozwoliły mi zrozumieć, jak ważna jest konsekwencja w treningu. Zacząłem dzielić się swoimi osiągnięciami i wiedzą z innymi, co zainspirowało mnie do rozważenia kariery trenera personalnego. Przekonałem się, że kalistenika to nie tylko trening, ale i styl życia, który może odmienić każdego.",
      ],
      imagesList: [transformation1],
      altForImages: "Trener.",
    },
    {
      title: "2018",
      descriptionList: [
        "Rok 2018 przyniósł nowe wyzwania i możliwości rozwoju. Postanowiłem podnieść poprzeczkę, uczestnicząc w intensywnych szkoleniach z doświadczonymi trenerami. Dzięki temu zdobyłem certyfikację trenera personalnego i zacząłem pracować z pierwszymi klientami. Każda sesja treningowa z moimi podopiecznymi była dla mnie lekcją i możliwością dalszego rozwoju zawodowego.",
        "Moje umiejętności rozwijały się dynamicznie, a ja sam stałem się bardziej świadomy znaczenia indywidualnego podejścia do każdego klienta. Kalistenika stała się moją misją, a ja z radością obserwowałem postępy moich podopiecznych, którzy dzięki moim wskazówkom osiągali swoje cele.",
      ],
      imagesList: [transformation2],
      altForImages: "Trener.",
    },
    {
      title: "2020",
      descriptionList: [
        "Rok 2020 był czasem pełnym wyzwań, ale i nowych możliwości. Globalna pandemia zmusiła mnie do przystosowania się do nowych realiów, co zaowocowało rozwojem treningów online. Dzięki temu mogłem dotrzeć do szerszego grona osób, pragnących zmienić swoje życie poprzez kalistenikę. Moja społeczność rosła, a ja czerpałem ogromną satysfakcję z obserwowania postępów moich klientów.",
        "Pandemia nauczyła mnie elastyczności i kreatywności w podejściu do treningu, co tylko umocniło mnie jako trenera. Zauważyłem, że kalistenika może być praktykowana w każdych warunkach, a jej uniwersalność stała się jednym z jej największych atutów. Z dumą obserwowałem, jak moi podopieczni radzą sobie z wyzwaniami i osiągają imponujące rezultaty, niezależnie od sytuacji.",
      ],
      imagesList: [transformation3],
      altForImages: "Trener.",
    },
    {
      title: "2024",
      descriptionList: [
        "Obecnie, mogę z dumą powiedzieć, że moja transformacja jako trenera i sportowca jest ciągłym procesem. Nadal poszerzam swoją wiedzę i umiejętności, uczestnicząc w licznych warsztatach i szkoleniach. Moim celem jest inspirowanie innych do odkrywania potencjału swojego ciała i umysłu poprzez kalistenikę, niezależnie od wieku czy poziomu zaawansowania.",
        "Wierzę, że każdy może osiągnąć swoje cele treningowe, jeśli tylko znajdzie odpowiednią motywację i wsparcie. Razem możemy osiągnąć więcej, niż kiedykolwiek się spodziewasz, a ja z radością będę Cię wspierać na każdym kroku tej niesamowitej podróży.",
      ],
      imagesList: [transformation4],
      altForImages: "Trener.",
    },
  ];
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <AboutMeHero />
      <HistoryList
        title={"Moja historia"}
        fancyTitleRight={"Transformacji!"}
        historyList={historyList}
      />
      <TextMe />
      <SocialsList />
    </>
  );
}
