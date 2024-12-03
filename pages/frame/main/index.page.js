import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextFrame, setPage, toggleStart } from "@/pages/lib/features/main";
import style from "./style.module.css";
import Frame from "../index.page";
import { layer } from "@/pages/lib/features/transition";

export default function MainMenu() {
  const dispatch = useDispatch()

  const handleStart = () => {
    dispatch(toggleStart())
    dispatch(layer({name: 'loading', goTo: 1}))
  }

  return (
    <div className={style.section}>
      <div className={style.background}>
        <div className={style.langit}></div>
        <div className={style.awan1}></div>
        <div className={style.awan}></div>
        <div className={style.pandangan}></div>
      </div>
      <div className="flex flex-col items-end justify-center px-3 me-5 block absolute top-0 right-0 left-0 h-screen">
        <div className="mb-3 z-20">
          <h1 className="text-8xl font-bold">Adventure Flower</h1>
        </div>
        <div className={style.handleposition}>
          <div className={style.btnStart} onClick={handleStart}>
            Start
          </div>
        </div>
      </div>
    </div>
  );
}
