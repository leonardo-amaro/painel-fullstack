import Cabecalho from "./components/Cabecalho";
import MenuLateral from "./components/MenuLateral";
import PaginaInicial from "./components/PaginaInicial";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <Cabecalho />
      <main className={styles.conteudo}>
        <MenuLateral />
        <PaginaInicial />
      </main>
    </>
  );
}

export default App;
