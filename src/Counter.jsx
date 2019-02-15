import React, { useCallback } from "react";
import { useDispatch, useMappedState } from "./StoreProvider";

export default function Counter() {
  const mapState = useCallback(state => state.count, []);
  const count = useMappedState(mapState);
  const dispatch = useDispatch();
  const reset = useCallback(() => dispatch({ type: "reset" }), []);
  const increment = useCallback(() => dispatch({ type: "increment" }), []);
  const decrement = useCallback(() => dispatch({ type: "decrement" }), []);

  return (
    <div>
      <p>Counter Count: {count}</p>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
