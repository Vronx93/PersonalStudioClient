import { getImage } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";

export default function Img({
  imgId,
  alt,
  className,
  handleClick,
  id,
  imgUrl,
  tabIndex,
}: {
  imgId: string;
  imgUrl?: string;
  alt: string;
  className?: string;
  handleClick?: Function;
  id?: string;
  tabIndex?: number;
}) {
  if (!imgUrl) {
    const { data, isLoading, isError } = useQuery({
      queryKey: ["image", imgId],
      queryFn: async () => await getImage(imgId),
      staleTime: Infinity,
    });

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <p>Nie udało się załadować zdjęcia.</p>;
    }
    return (
      <img
        id={id}
        onClick={(event) => handleClick && handleClick(event)}
        className={className}
        src={data!}
        alt={alt}
        tabIndex={tabIndex}
        loading="lazy"
      />
    );
  }

  return (
    <img
      id={id}
      onClick={(event) => handleClick && handleClick(event)}
      className={className}
      src={imgUrl}
      alt={alt}
      tabIndex={tabIndex}
      loading="lazy"
    />
  );
}
