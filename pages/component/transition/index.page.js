import { useDispatch, useSelector } from "react-redux";
import transition from "./style.module.css";
import { progresStatus } from "@/pages/lib/features/main";
import { setTimeout } from "timers";
import { useState } from "react";

export default function StartTransition() {
  const { isStart, status } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();
  const [container, setContainer] = useState(
    "w-10 h-10 absolute end-32 top-1/2 rounded-full"
  );
  const [content, setContent] = useState(false);
  if (isStart) {
    setTimeout(() => {
      setContainer("w-full h-full");
      setContent(true);
    }, 3980);
  }

  return (
    <div
      className={`${container} ${
        isStart ? transition.startTransition : "hidden"
      } flex flex-col justify-center bg-orange-400 z-50`}
    >
      <div className={content ? "flex flex-col justify-center items-center space-y-2" : "hidden"}>
        <div className="text-4xl font-bold">Waiting</div>
        <div className="text-xl font-thin">please use handphone for the best moment</div>
      </div>
    </div>
  );
}
