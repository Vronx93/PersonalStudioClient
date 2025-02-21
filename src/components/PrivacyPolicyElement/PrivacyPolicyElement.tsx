import styles from "./PrivacyPolicyElement.module.css";

interface PrivacyPolicyElementInterface {
  id: string;
  title: string;
  content: string[];
}

export default function PrivacyPolicyElement({
  element,
  sectionIndex,
}: {
  element: PrivacyPolicyElementInterface;
  sectionIndex: number;
}) {
  const content = element.content.map((string: string, index: number) => (
    <li key={crypto.randomUUID()} className={styles.contentListItem}>
      {sectionIndex}.{!string.startsWith("-") && `${index + 1}. `}
      {string.split("- ").map((item, index) =>
        index === 0 ? (
          <span key={crypto.randomUUID()}>{item}</span>
        ) : (
          <span key={crypto.randomUUID()}>
            <br />- {item}
          </span>
        )
      )}
    </li>
  ));
  return (
    <li className={styles.container}>
      <h2 className={styles.title}>
        {sectionIndex}. {element.title}
      </h2>
      <ol className={styles.list}>{content}</ol>
    </li>
  );
}
