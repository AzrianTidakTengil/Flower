import { Menu } from "@mui/icons-material";
import { useState } from "react";

export default function MenuBar() {
  const [active, isActive] = useState(false);

    const __click = (event) => {
        switch (event.target.innerHTML) {
            case 'Back':
                return isActive(false)
            case 'Setting':
                return console.log('setting')
            case 'Main Menu':
                return console.log('main menu')
            default:
                return isActive(true)
        }
    }
  
  return (
    <>
      <div
        className="cursor-pointer p-1 m-3 rounded hover:bg-slate-50/20"
        onClick={(event) => __click(event)}
      >
        <Menu />
      </div>
      {
        active ? (
            <div className="w-full h-screen bg-slate-950/80 absolute flex flex-col items-center justify-center space-y-4 z-[99999]">
                <div className="rounded px-3 py-2 bg-white text-black w-4/12 text-center text-2xl font-semibold cursor-pointer hover:bg-slate-50/80" onClick={(event) => __click(event)}>Back</div>
                {/* <div className="rounded px-3 py-2 bg-white text-black w-4/12 text-center text-md font-semibold cursor-pointer hover:bg-slate-50/80" onClick={(event) => __click(event)}>Setting</div> */}
                <div className="rounded px-3 py-2 bg-white text-black w-4/12 text-center text-2xl font-semibold cursor-pointer hover:bg-slate-50/80" onClick={(event) => __click(event)}>Main Menu</div>
            </div>
        ) : ''
      }
    </>
  );
}
