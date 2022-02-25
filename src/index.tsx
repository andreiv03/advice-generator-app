import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FaDiceFive } from "react-icons/fa";
import axios from "axios";

import "./styles/globals.scss";
import styles from "./styles/components/advice.module.scss";

interface AdviceInterface {
  advice: string;
  id: string;
};

const App: React.FC = () => {
  const [advice, setAdvice] = useState<AdviceInterface>({ advice: "", id: "" });
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const getAdvice = async () => {
      try {
        const { data } = await axios.get("https://api.adviceslip.com/advice");
        setAdvice({ ...data.slip });
      } catch (error) {
        return alert(error);
      }
    }

    getAdvice();
  }, [callback]);

  return (
    <div className={styles.advice}>
      {advice.id ? (
        <>
          <h3>Advice #{advice.id}</h3>
          <h2>"{advice.advice}"</h2>

          <div className={styles.delimitation}>
            <div className={styles.horizontal_line} />
            <div className={styles.vertical_line} />
            <div className={styles.vertical_line} />
            <div className={styles.horizontal_line} />
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}

      <div className={styles.button} onClick={() => setCallback(!callback)}><FaDiceFive /></div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);