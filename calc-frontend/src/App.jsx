import { useState } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("add");
  const [result, setResult] = useState("");

  const handleCalc = async () => {
    const res = await fetch(
      `https://YOUR_BACKEND_URL.up.railway.app/api/calc?a=${a}&b=${b}&op=${op}`
    );
    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>FastAPI + React Calculator</h1>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="First number"
      />
      <select value={op} onChange={(e) => setOp(e.target.value)}>
        <option value="add">+</option>
        <option value="sub">−</option>
        <option value="mul">×</option>
        <option value="div">÷</option>
      </select>
      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Second number"
      />
      <button onClick={handleCalc}>Calculate</button>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
