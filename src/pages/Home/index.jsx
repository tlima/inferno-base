/* eslint-disable camelcase */
import styles from './style.scss';

const Home = () => (
  <div>
    <div>Landing page - {__webpack_hash__}</div>
    <div className={styles.lone}>Red background - line 1</div>
    <div className={styles.lwo}>Green background - line 2</div>
    <div className={styles.lee}>Red background - line 3</div>
  </div>
);

export default Home;
