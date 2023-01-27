import "./App.css";
// import Main from "./Main";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "./features/counter/CounterSlice";
import {
  increment,
  decrement,
  resetAmount,
} from "./features/counter/CounterSlice";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  // const addOneHandler = () => {};
  return (
    <div className="container">
      <div>
        <h1 className="counter">{count}</h1>
      </div>
      <div className="buttons">
        <button onClick={() => dispatch(increment(1))}>Add one</button>
        <button onClick={() => dispatch(increment(5))}>Add five</button>
        <button onClick={() => dispatch(decrement(1))}>Remove one</button>
        <button onClick={() => dispatch(decrement(5))}>Remove five</button>
        <button onClick={() => dispatch(resetAmount())}>Reset</button>
      </div>
    </div>
  );
}

export default App;
