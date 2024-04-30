import { FC } from 'react';
import Spinner from 'assets/images/spinner.svg';
import styles from "./styles.module.css";

export const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      <Spinner />
    </div>
  );
};
