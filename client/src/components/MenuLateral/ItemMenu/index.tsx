import type React from "react";
import styles from "./ItemMenu.module.css";

const ItemMenu = ({ children }: React.LiHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={styles.item}>
      {children}
    </li>
  );
}

export default ItemMenu;
