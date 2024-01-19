import styles from "./CategoriesUI.module.css";

export const CategoriesUI = (props: {
  content: string;
  path: string;
  onClick?: () => void;
}) => {
  const onclick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div className={styles.container} onClick={() => onclick()}>
      <img src={props.path} alt={props.content} />
    </div>
  );
};
