import { useRef, useState } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
import { Link } from "react-router-dom";
// import useFetchDataCities from "../../../../stores/fetcthCities.tsx";
import style from "./DropdownMenuHeader.module.css";

function DropdownMenuHeader() {
  // const dataStateCities = useFetchDataCities((state) => state.data);
  
  const menuRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  useOnClickOutside(menuRef, () => {
    setOpen(false);
  });

  return (
    <header className={style.container}>
      <button className={style.menu_button} onClick={() => setOpen(!isOpen)}>
        <img src="/Burger-min.svg" alt="" />
      </button>
      <nav
        className={`${style.menu} ${isOpen ? style.active : ""}`}
        ref={menuRef}
      >
        <button onClick={() => setOpen(false)}>
          <img src="/ExitIcon.svg" className={style.exitButton} />
        </button>
        <ul className={style.menu__list}>
          <li className={style.menu__item}>
            <Link to="/for-business" className={style.menu__link}>
              <button className={style.menu__link__btn}>Для бізнесу</button>
            </Link>
          </li>
          <li className={style.menu__item}>
            <Link to="/all-services" className={style.menu__link}>
              <button className={style.menu__link__btn}>Всі сервіси</button>
            </Link>
          </li>
          {/* <li className={style.menu__item}>
          <option value="">Міста</option>
              {dataStateCities.map((el) => (
                <option key={el.id} value={el.slug}>
                  {el.name}
                </option>
              ))}
          </li> */}
          <li className={style.menu__item__categorie}>
            <Link to="/all-services/?category=dogliad-za-nigtiami" className={style.menu__link}>
              <button className={style.menu__link__target}>
                Догляд за нігтями
              </button>
            </Link>
          </li>
          <li className={style.menu__item__categorie}>
            <Link to="/all-services/?category=makiiaz" className={style.menu__link}>
              <button className={style.menu__link__target}>Макіяж</button>
            </Link>
          </li>
          <li className={style.menu__item__categorie}>
            <Link to="/all-services/?category=zinoca-strizka" className={style.menu__link}>
              <button className={style.menu__link__target}>
                Жіноча стрижка
              </button>
            </Link>
          </li>{" "}
          <li className={style.menu__item__categorie}>
            <Link to="/all-services/?category=farbuvannia-volossia" className={style.menu__link}>
              <button className={style.menu__link__target}>
                Фарбування волосся
              </button>
            </Link>
          </li>{" "}
          <li className={style.menu__item__categorie}>
            <Link to="/all-services/?category=vidalennia-volossia" className={style.menu__link}>
              <button className={style.menu__link__target}>
                Видалення волосся
              </button>
            </Link>
          </li>
          <li className={style.menu__item__categorie}>
            <Link to="/all-services/?category=colovica-strizka" className={style.menu__link}>
              <button className={style.menu__link__target}>
              Чоловіча стрижка
              </button>
            </Link>
          </li>
          <li className={style.menu__item__categorie}>
            <Link to="/all-services/?category=viyi-ta-brovi" className={style.menu__link}>
              <button className={style.menu__link__target}>
              Вії та брови
              </button>
            </Link>
          </li>
          <li className={style.menu__item__categorie}>
            <Link to="/all-services/?category=masaz" className={style.menu__link}>
              <button className={style.menu__link__target}>
              Масаж
              </button>
            </Link>
          </li>
          <li className={style.menu__item__categorie}>
            <Link to="/all-services/?category=tatuaz" className={style.menu__link}>
              <button className={style.menu__link__target}>
              Татуаж
              </button>
            </Link>
          </li>
          <li className={style.menu__item__categorie}>
            <Link to="/all-services/?category=kosmetologiia" className={style.menu__link}>
              <button className={style.menu__link__target}>
              Косметологія
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default DropdownMenuHeader;
