import { createRoot } from "react-dom/client";
import { add } from "./add";
import { useState } from "react";

const root = createRoot(document.getElementById("root"));

root.render(<Counter />);

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Current count: {count}
      <button
        type="button"
        onClick={() => {
          setCount(add(count, 1));
        }}
      >
        Increment
      </button>
    </div>
  );
}
