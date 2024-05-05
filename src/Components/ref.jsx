
import { useRef } from "react";

export default function MyComponent() {
  const dataRef = useRef({ name: "John", age: 25 });

  // Modifying the current value without triggering re-renders
  dataRef.current.age += 1;

  return (
    <div>
      {dataRef.current.name}, {dataRef.current.age}
    </div>
  );
}
