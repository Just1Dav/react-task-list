import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt='Logo da lista de tarefas com um pequeno foguete e o termo "to-do"' />
    </header>
  );
}
