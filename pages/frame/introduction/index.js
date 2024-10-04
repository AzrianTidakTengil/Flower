import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage, setFrame } from "@/pages/features/main";
import style from "./style.module.css";
import Frame from "..";

export default function Frame1() {
  
  const dispatch = useDispatch()
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
          <div className={style.btnStart} onClick={() => dispatch(setPage(2))}>
            Start
          </div>
        </div>
      </div>
    </div>
  );
}
