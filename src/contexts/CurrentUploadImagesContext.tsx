import { ReactNode, createContext, useContext, useState } from "react";
import { UUID } from "crypto";

interface CurrentUploadImagesContextInterface {
  currentUploadImages: { image: File; randomId: UUID }[];
  removeImage: (id: string) => void;
  addImages: Function;
  resetImages: Function;
  setCurrentUploadImages: Function;
}

const CurrentUploadImagesContext =
  createContext<CurrentUploadImagesContextInterface | null>(null);

function useCurrentUploadImages() {
  const [currentUploadImages, setCurrentUploadImages] = useState<
    { image: File; randomId: UUID }[] | []
  >([]);

  function addImages(event: any) {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) => file instanceof File) as File[];
    const fileObjects = validFiles.map((image: File) => {
      const randomId = crypto.randomUUID();
      return { image, randomId };
    });
    setCurrentUploadImages((prevImages) => [...prevImages, ...fileObjects]);
  }

  function removeImage(id: string) {
    setCurrentUploadImages((prevImages) =>
      prevImages.filter((image) => image.randomId !== id)
    );
  }

  function resetImages() {
    setCurrentUploadImages([]);
  }

  return {
    currentUploadImages,
    removeImage,
    addImages,
    resetImages,
    setCurrentUploadImages,
  };
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCurrentUploadImagesContext() {
  const context = useContext(CurrentUploadImagesContext);

  if (!context) {
    throw new Error(
      "This comnponent should be placed in CurrentUploadImagesContextProvider"
    );
  }
  return context;
}

export function CurrentUploadImagesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const {
    currentUploadImages,
    removeImage,
    addImages,
    resetImages,
    setCurrentUploadImages,
  } = useCurrentUploadImages();

  return (
    <CurrentUploadImagesContext.Provider
      value={{
        currentUploadImages,
        removeImage,
        addImages,
        resetImages,
        setCurrentUploadImages,
      }}
    >
      {children}
    </CurrentUploadImagesContext.Provider>
  );
}
