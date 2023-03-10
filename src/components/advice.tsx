import { useEffect, useState } from "react";
import { FaDiceFive } from "react-icons/fa";

import axios from "utils/axios";
import styles from "styles/components/advice.module.scss";

interface Advice {
  advice: string;
  id: string;
}

const Advice: React.FC = () => {
  const [advice, setAdvice] = useState<Advice>({ advice: "", id: "" });
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const getAdvice = async () => {
      try {
        const ADVICESLIP_API_URI = "https://api.adviceslip.com/advice";
        const { data } = await axios.get(ADVICESLIP_API_URI);
        setAdvice({ ...data.slip });
      } catch (error) {
        alert(error);
      }
    };

    getAdvice();
  }, [callback]);

  return (
    <div className={styles["advice"]}>
      {advice.id ? (
        <>
          <h3>Advice #{advice.id}</h3>
          <h2>"{advice.advice}"</h2>

          <div className={styles["delimitation"]}>
            <div className={styles["horizontal_line"]} />
            <div className={styles["vertical_line"]} />
            <div className={styles["vertical_line"]} />
            <div className={styles["horizontal_line"]} />
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}

      <div
        className={styles["button"]}
        onClick={() => setCallback(!callback)}
      >
        <FaDiceFive />
      </div>
    </div>
  );
};

export default Advice;
