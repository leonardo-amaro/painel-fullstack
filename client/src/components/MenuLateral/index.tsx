import ItemMenu from './ItemMenu';
import styles from './MenuLateral.module.css';

const MenuLateral = () => {
  return (
    <aside className={styles.lateral}>
      <nav>
        <ul>
          <ItemMenu>
            Início
          </ItemMenu>
          <ItemMenu>
            SSL
          </ItemMenu>
        </ul>
      </nav>
    </aside>
  );
}

export default MenuLateral;
