
import {Todos} from './components/Todos';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>TODO</h1>
      <Todos />
    </div>
  );
}

export default App;
