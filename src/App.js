import { useState, useEffect } from "react";
import "./App.css";
import CounterComponent from "./components/CounterComponent/CounterComponent";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count)
  }, [count]);

  return <CounterComponent count={count} setCount={setCount} />;
}

export default App;
