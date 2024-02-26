import { useRef, useState } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
import style from "./DropdownMenu.module.css";

function DropdownMenu({ editMethod, deleteMethod }) {
  const menuRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  useOnClickOutside(menuRef, () => {
    setOpen(false);
  });

  return (
    <header className={style.header}>
      <button className={style.menu_button} onClick={() => setOpen(!isOpen)}>
        <p>...</p>
      </button>
      <nav
        className={`${style.menu} ${isOpen ? style.active : ""}`}
        ref={menuRef}
      >
        <ul className={style.menu__list}>
          <li className={style.menu__item} onClick={deleteMethod}>
            Видалити
          </li>
          <li className={style.menu__item} onClick={editMethod}>
            Редагувати
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default DropdownMenu;
