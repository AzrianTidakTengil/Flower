import { useDispatch, useSelector } from "react-redux";
import transition from "../style.module.css";
import "animate.css";
import { nextFrame, progresStatus } from "@/pages/lib/features/main";
import { setTimeout } from "timers";
import { useState } from "react";

export default function LoadingStage() {
  const { id, name, duration } = useSelector((state) => state.layer);
  const { isStart, status, page } = useSelector((state) => state.pagination);
  const [outro, toggleOutro] = useState(false);
  const dispatch = useDispatch();
  const [container, setContainer] = useState(
    "w-10 h-10 absolute end-32 top-1/2 rounded-full"
  );
  const [content, setContent] = useState(false);
  if (isStart) {
    setTimeout(() => {
      setContainer("w-full h-full absolute top-0 bottom-0 start-0 end-0");
      setContent(true);
    }, duration - 6500);
  }

  if (content && id) {
    setTimeout(() => {
      toggleOutro(true);
    }, duration - 3800);
  }

  return (
    <div
      className={`${container} ${
        isStart ? transition.startTransition : "hidden"
      } flex flex-col justify-center bg-orange-400 z-50 ${
        outro ? transition.outTransition : ""
      }`}
    >
      <div
        className={
          content
            ? "flex flex-col justify-center items-center animate__animated animate__fadeIn"
            : "hidden"
        }
      >
        <div className={`${transition.heart} mb-56 mt-56`}>
          <div
            className={`${transition.wave}  bg-gradient-to-r from-purple-500 to-pink-500`}
          ></div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="text-4xl font-bold">Waiting</div>
          <div className="text-xl mt-2 font-thin">
            please use handphone for the best moment
          </div>
          <hr className="mt-16 border-gray-100 border-2 border-dashed rounded h-px text-zinc-700 w-full"/>
        </div>
      </div>
    </div>
  );
}
