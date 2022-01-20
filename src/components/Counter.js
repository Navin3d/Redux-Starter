import { useSelector, useDispatch } from "react-redux";

import classes from './Counter.module.css';
import { counterActions } from "../redux/store";

const Counter = () => {

  let count = useSelector(state => state.counter.counter);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  let visiblity = useSelector(state => state.counter.showCounter);
  
  const dispatch = useDispatch();

  // const toggleCounterHandler = () => {
  //   dispatch({ type: "TOGGLE_COUNTER" });
  // };

  // const incrementCounterHandler = () => {
  //   dispatch({ type: "INCREMENT" });
  // };

  // const incrementByCounterHandler = () => {
  //   dispatch({ type: "INCREMENTBY", count: 5 });
  // };

  // const decrementCounterHandler = () => {
  //   dispatch({ type: "DECREMENT" });
  // };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementByCounterHandler = () => {
    dispatch(counterActions.incrementBy(5));
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div hidden={!isAuthenticated}>
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div hidden={visiblity} className={classes.value}>{ count }</div>
        <div>
          <button onClick={incrementCounterHandler}>Increment</button>
          <button onClick={incrementByCounterHandler}>Increment By 5</button>
          <button onClick={decrementCounterHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    </div>
  );
};

export default Counter;
