import React from "react";
import {connect} from 'react-redux';
import Frame1 from "./introduction";
import Frame2 from "./begin";
import { useDispatch, useSelector } from 'react-redux';


export default function Frame() {
  const pagination = useSelector(state => state.pagination)
  console.log(pagination)
  switch(pagination.page) {
    case 1: {
      return(
        <Frame1/>
      )
    }
    case 2:
      return(
        <Frame2/>
      )
  }
}
