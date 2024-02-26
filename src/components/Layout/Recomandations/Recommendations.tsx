import Card from "./Card/Card.tsx";
import styles from "./Recommendations.module.css";
import { useStoreRecommendations } from "../../../stores/localStores/recommendationsStore.tsx";

const Recommendations = () => {
  const items = useStoreRecommendations((state) => state.items);
  console.log(items);
  return (
    <div className={styles.recommendations}>
      <div className={styles.recommendationsTitle}>Рекомендовано</div>
      <div className={styles.cards}>
        {items.length > 0 &&
          items.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              serviceName={item.serviceName}
              cardCategory={item.cardCategory}
              cardAddress={item.cardAddress}
              cardTel={item.cardTel}
            />
          ))}
      </div>
    </div>
  );
};
export default Recommendations;
