import styles from "./BookmarkAddRecommendation.module.css";
import { useStoreRecommendations } from "../../../../../stores/fakeStores/recommendationsStore.tsx";

const BookmarkAddRecommendation = () => {
  const items = useStoreRecommendations((state) => state.items);
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.content}>
          <div className={styles.forms}>
            <h2>Додати майстра</h2>
            <div className={styles.inputsTitle}>
              <label htmlFor="title">Майстри</label>
              <select
                className={styles.select}
                name="title"
                placeholder="Введіть заголовок"
              >
                <option value="" hidden selected>
                  Виберіть майстра
                </option>
                {items.map((el) => (
                  <option key={el.id} value={el.serviceName}>
                    {el.serviceName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button>Відмінити</button>
          <button>Зберегти</button>
        </div>
      </form>
    </div>
  );
};

export default BookmarkAddRecommendation;
