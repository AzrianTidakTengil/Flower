import "animate.css";
import { useEffect, useState } from "react";
import style from "../style.module.css";
import { useSelector } from "react-redux";

export default function Fade() {
  const { id, name, duration } = useSelector((state) => state.layer);
  const [fadeType, toggleFade] = useState(false);
  const [isStart, toggleStart] = useState(false);

  useEffect(() => {
    if (id) {
      toggleStart(true);
    }
  }, [id]);

  if (id && isStart) {
    setTimeout(() => {
      toggleFade(true);
      toggleStart(false);
    }, duration - 800);
  }

  return (
    <div
      className={`absolute top-0 bottom-0 start-0 end-0 w-full h-full bg-black z-50 ${
        fadeType ? style.outTransition : style.fadeIn
      }`}
    ></div>
  );
}
