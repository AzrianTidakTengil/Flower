import { useEffect, useState } from "react";
import LoadingStage from "./loadingPage/index.page";
import Fade from "./darkFade/index.page";
import { useDispatch, useSelector } from "react-redux";
import { nextFrame } from "@/pages/lib/features/main";
import { clearLayer } from "@/pages/lib/features/transition";

export default function Layer({ children }) {
  const { id, name, duration, goTo } = useSelector((state) => state.layer);
  const dispatch = useDispatch();
  const listLayer = [
    { id: 0, element: <></> },
    { id: 1, element: <LoadingStage key={2} /> },
    { id: 2, element: <Fade key={3} /> },
  ];

  if (id) {
    console.log(goTo);
    setTimeout(() => {
      dispatch(clearLayer());
      if (goTo) dispatch(nextFrame(goTo));
    }, duration);
  }

  return (
    <>
      {id ? (
        <>
          {listLayer.filter((val) => val.id === id).map((val) => val.element)}
        </>
      ) : (
        <></>
      )}
      {children}
    </>
  );
}
