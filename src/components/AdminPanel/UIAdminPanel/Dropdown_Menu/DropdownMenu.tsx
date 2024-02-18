import { useState } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
import { useRef } from "react";
import style from "./DropdownMenu.module.css";

function DropdownMenu() {
  const menuRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  useOnClickOutside(menuRef, () => {
    setOpen(false);
  });

  return (
    <header className={style.header}>
      <button
        className={style.menu_button}
        onClick={() => setOpen(!isOpen)}
      >
        <img src="/more-horizontal-min.svg" alt="" />
      </button>
      <nav
        className={`${style.menu} ${isOpen ? style.active : ""}`}
        ref={menuRef}
      >
        <ul className={style.menu__list}>
          <li className={style.menu__item}>Видалити</li>
          <li className={style.menu__item}>Редагувати</li>
        </ul>
      </nav>
    </header>
  );
}

export default DropdownMenu;