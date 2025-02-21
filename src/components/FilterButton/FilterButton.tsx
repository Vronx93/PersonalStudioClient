import { useEffect, useState } from "react";
import styles from "./FilterButton.module.css";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export default function FilterButton({
  text,
  paramName,
  paramValue,
}: {
  text: string;
  paramName: string;
  paramValue: string;
}) {
  const queryClient = useQueryClient();
  const [isActive, setIsActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  async function handleClick(paramName: string, paramValue: string) {
    if (!isActive) {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        newParams.set(paramName, paramValue);
        return newParams;
      });
    }
    if (isActive) {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        newParams.delete(paramName, paramValue);
        return newParams;
      });
    }
    setIsActive(!isActive);
    queryClient.invalidateQueries({ queryKey: ["orders"] });
  }

  useEffect(() => {
    if (!searchParams.has(paramName, paramValue)) {
      setIsActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <button
      onClick={() => handleClick(paramName, paramValue)}
      className={`${styles.container} ${isActive && styles.active}`}
    >
      {text}
    </button>
  );
}
