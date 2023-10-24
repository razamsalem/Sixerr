import { useEffect, useState } from "react";

export function HoverableComponent({ children }) {
  const [isHovered, setHovered] = useState(false);
    useEffect(()=>{
        console.log("ppp");
    },[isHovered])
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isHovered && children}
    </div>
  );
}
