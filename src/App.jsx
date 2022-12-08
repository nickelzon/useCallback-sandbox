import { useCallback, useState, useEffect } from "react";
import Child from "./child";

const App = () => {
  const [trigger, setTrigger] = useState(false);
  const [number, setNumber] = useState(0);

  const myCallback = () => true; //when the App component rerenders, it returns a new render of myCallback function. In this code, we passed the myCallback as a prop to a child component. In that child component, myCallback is a dependency of an useEffect to check how myCallback changes when we rerender the App component.

  // const myCallback = useCallback(() => true, [trigger]);

  return (
    <div>
      <h1>useCallback Tutorial</h1>
      <button onClick={() => setNumber(number + 1)}>count</button>
      <Child myCallback={myCallback} number={number} />
    </div>
  );
};

export default App;
