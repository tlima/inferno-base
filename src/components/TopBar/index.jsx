import { connect } from 'inferno-redux';
import { Link } from 'inferno-router';

import { increaseCountAction } from 'store/actions/counters';

import styles from './style.scss';

const TopBar = ({ upCount }) => (
  <div className={styles.bar}>
    <Link to="/" className={styles.link} onClick={() => upCount('home')}>Home</Link>
    <Link to="/one" className={styles.link} onClick={() => upCount('one')}>Page one</Link>
    <Link to="/two" className={styles.link} onClick={() => upCount('two')}>Page two</Link>
  </div>
);

const mapDispatchToProps = dispatch => ({
  upCount: target => dispatch(increaseCountAction(target)),
});

export default connect(null, mapDispatchToProps)(TopBar);
