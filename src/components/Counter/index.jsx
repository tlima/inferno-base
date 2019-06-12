import { connect } from 'inferno-redux';

import { eraseCountAction } from 'store/actions/counters';

const Counter = ({ counters, zeroCount }) => (
  <div>
    <div>
      <span onClick={() => zeroCount('home')}>❎ </span>
      Counter Home: {counters.home}
    </div>
    <div>
      <span onClick={() => zeroCount('one')}>❎ </span>
      Counter One: {counters.one}
    </div>
    <div>
      <span onClick={() => zeroCount('two')}>❎ </span>
      Counter Two: {counters.two}
    </div>
  </div>
);

const mapStateToProps = state => ({
  counters: state.counters,
});

const mapDispatchToProps = dispatch => ({
  zeroCount: target => dispatch(eraseCountAction(target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
