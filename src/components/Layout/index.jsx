import styles from './style.scss';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    {children}
  </div>
);

export default Layout;
