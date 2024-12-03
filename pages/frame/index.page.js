import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Frame2 from "./begin";
import { useDispatch, useSelector } from "react-redux";
import MainMenu from "./main/index.page";
import { layer } from "../lib/features/transition";
import { isReady, nextFrame } from "../lib/features/main";

const frames = [{ id: 1, value: <Frame2 /> }];

export default function Frame() {
  const [start, toggleStart] = useState(false);
  const pagination = useSelector((state) => state.pagination);
  const { duration } = useSelector((state) => state.layer);
  const { page, status, isStart } = pagination;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isStart) {
      console.log(page);
      setTimeout(() => {
        toggleStart(true);
      }, duration - 500);
    }
  }, [dispatch, duration, isStart, page]);

  return (
    <>
      {start ? (
        frames.filter((x) => x.id === page).map((x) => x.value)
      ) : (
        <MainMenu />
      )}
    </>
  );
}
