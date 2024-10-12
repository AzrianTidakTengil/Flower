import React from "react";
import { connect } from "react-redux";
import Frame1 from "./introduction/index.page";
import Frame2 from "./begin";
import { useDispatch, useSelector } from "react-redux";
import StartTransition from "../component/transition/index.page";

export default function Frame() {
  const pagination = useSelector((state) => state.pagination);
  const {page, status} = pagination;
  switch (page) {
    case 1:
      return (
        <>
          <StartTransition />
          <Frame1 />
        </>
      );
    case 2 && status === 'done':
      return <Frame2 />;
  }
}
