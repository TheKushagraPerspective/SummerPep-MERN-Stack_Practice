import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child1 from "./components/Child1.jsx";
import Child2 from "./components/Child2.jsx";
import Child3 from "./components/Child3.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child1 />
      <Child2 />
      <Child3 />
    </>
  );
}

export default App;
