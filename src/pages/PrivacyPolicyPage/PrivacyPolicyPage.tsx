import { useLayoutEffect } from "react";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";

export default function PrivacyPolicyPage() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}
