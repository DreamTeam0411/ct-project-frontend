import styles from "./CategoriesUI.module.css";

export const CategoriesUI = (props: {
  content: string;
  path: string;
  onClick?: () => void;
}) => {
  const on = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div className={styles.container} onClick={() => on()}>
      <img src={props.path} alt={props.content} />
    </div>
  );
};
