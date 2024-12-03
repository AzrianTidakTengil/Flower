/* eslint-disable react-hooks/exhaustive-deps */
import TouchAppIcon from "@mui/icons-material/TouchApp";
import animation from "./animation.module.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "animate.css";
import Typed from "typed.js";
import toaster from "../toast/index.page";
import { isReady } from "@/pages/lib/features/main";
import { transition } from "../transition/index.page";
import { layer } from "@/pages/lib/features/transition";

export default function DialogMessage() {
  const atrSpan = useRef(null);
  const dispatch = useDispatch();
  const [notification, showNotification] = useState(false);
  const [message, setMessage] = useState(null);
  const [doneEl, toggleEl] = useState(false);
  const [point, setPoint] = useState(1);
  const [isSelected, toggleSelected] = useState(false);
  const [option, setOption] = useState(null);
  const [refresh, refreshValue] = useState(true);

  const { page, status, frameData, ready } = useSelector(
    (state) => state.pagination
  );
  const { id, duration } = useSelector((state) => state.layer);

  useEffect(() => {
    const dialogData = frameData
      .filter((val) => val.id === page)
      .map((val) => val.dialog);
    const result = dialogData.length
      ? dialogData[0].filter((val) => val.id === point)
      : [];
    setMessage(result[0]);
    setTimeout(
      () => {
        showNotification(true);
      },
      result[0] && result[0].delay ? result[0].delay : 3000
    );
    setOption(result[0] && result[0].option ? result[0].option : null);

    if (!id) {
      const options = {
        strings: [message ? message.value : "-"],
        typeSpeed: 30,
        startDelay: 350,
        showCursor: false,
        onComplete: (self) => {
          toggleEl(true);
        },
      };

      if (!isSelected) {
        const typed = new Typed(atrSpan.current, options);

        return () => {
          typed.destroy();
        };
      }
    }
    // }
  }, [frameData, message, point, atrSpan]);

  const next = () => {
    if (option && doneEl) {
      toaster("warning", "Please select the option");
    } else {
      if (message && !message.status) {
        showNotification(false);
        if (doneEl) {
          toggleEl(false);
          setPoint(point + 1);
        } else {
          toggleEl(true);
        }
      } else {
        if (doneEl) {
          // dispatch(isReady(true));
          dispatch(layer({ name: "fade", goTo: page + 1 }));
          setPoint(1);
        } else {
          toggleEl(true);
        }
      }
    }
  };

  const selection = (value) => {
    const { id } = value;
    setPoint(id + 1);
    toggleSelected(true);
    toggleEl(false);
    setTimeout(() => {
      toggleSelected(false);
    }, 0);
  };

  // const timer = () => {
  //   setTimeout(() => {
  //     setShow(true);
  //   }, delay);
  // };

  // const option = [
  //   { id: 0, value: "option 1" },
  //   { id: 1, value: "option 2" },
  //   { id: 2, value: "option 3" },
  // ];

  return (
    <div className="container w-5/6 h-72 bg-white mb-8 rounded-md relative">
      <div className="w-36 py-4 px-2 capitalize text-xl font-semibold text-black rounded-md border-2 border-black absolute bg-white -top-8 start-8">
        <p className={`${refresh ? "animate__animated animate__fadeIn" : ""}`}>
          {!id ? message && message.name ? message.name : "" : ''}
        </p>
      </div>
      {option ? (
        <div className="absolute -top-40 end-4 text-black text-medium h-3/6 animate__animated animate__fadeIn flex items-end z-20">
          <div className="flex flex-col justify-end space-y-4">
            {option.map((val, index) => (
              <button
                key={index}
                className="w-56 py-2 px-3 rounded-full bg-white hover:bg-gray-400"
                onClick={() => selection(val)}
              >
                {!id ? val.label : ''}
              </button>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className={`px-8 flex justify-center text-justify3 text-clip overflow-hidden h-full py-12 text-black text-lg`}
        onClick={() => next()}
      >
        <div
          className={`w-fit animate__animated animate__fadeIn leading-loose`}
        >
          {!id ? doneEl ? (
            <p>{message && message.value ? message.value : ""}</p>
          ) : (
            <span
              ref={(el) => {
                atrSpan.current = el;
              }}
            />
          ) : ''}
        </div>
      </div>
      {notification ? (
        <div
          className={`animate__animated animate__fadeIn animate__infinite animate__slow text-black flex absolute end-4 bottom-4 font-bold items-center space-x-4 pointer-events-none`}
        >
          <TouchAppIcon fontSize="large" />
          Click Dialog Content
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
