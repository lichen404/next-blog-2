"use client";

import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p
        onClick={() => {
          setCount(count + 1);
        }}
      >
        You clicked {count} times
      </p>
    </div>
  );
}
