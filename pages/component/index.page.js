import Navbar from "./navbar/index.page";
import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
  IconButton,
  Slider,
  Tooltip,
} from "@mui/material";
import { tooltipClasses } from "@mui/material/Tooltip";
import {
  Close,
  RestartAlt,
  VolumeDown,
  VolumeUp,
  Menu,
} from "@mui/icons-material";
import { isClose } from "../lib/features/dialog";
import {
  handleVolume,
  toggleChanged,
  handleValueChanged,
  toggleDefault,
} from "../lib/features/bgm";
import DialogMessage from "./dialogMessage/index.page";
import { ToastContainer } from "react-toastify";
import Layer from "./transition/index.page";
import { useEffect } from "react";
import { isReady } from "../lib/features/main";
import MenuBar from "./menuBar/index.page";

export default function Component({ children }) {
  const dispatch = useDispatch();
  const { dialog, setting, pagination, layer } = useSelector((state) => state);
  const { isStart, ready } = pagination;
  const { isDialogSliders } = dialog;
  const { name, duration } = layer;
  const { volume, isChanged, momenChanged, isDefault } = setting;

  useEffect(() => {
    if (isStart) {
      setTimeout(() => {
        dispatch(isReady());
      }, duration + 200);
    }
  });

  const valueShow = (value) => {
    const result = Math.round(value * 100);
    return `${result}`;
  };

  const handleChange = (event, newValue) => {
    dispatch(handleVolume(newValue));
    dispatch(handleValueChanged(newValue));
    dispatch(toggleDefault(false));
  };

  const handleClose = () => {
    dispatch(isClose());
    if (!isChanged) {
      dispatch(handleVolume(momenChanged));
    }
  };

  const handleResetAll = () => {
    dispatch(handleVolume(0.3));
    dispatch(toggleDefault(true));
  };

  const handleResetVolume = () => {
    dispatch(handleVolume(0.3));
    dispatch(toggleChanged(false));
  };

  const handleSave = () => {
    dispatch(isClose());
    dispatch(toggleChanged(true));
    dispatch(toggleDefault());
  };

  return (
    <Layer>
      <ToastContainer />
      <Navbar />
      <Dialog
        fullWidth={true}
        onClose={handleClose}
        open={isDialogSliders}
        aria-labelledby="Dialog-Sliders"
        sx={{ p: 3 }}
      >
        <div className="flex justify-between items-center mx-3">
          <DialogTitle id="Dialog-Sliders" sx={{ px: 1 }}>
            Settings
          </DialogTitle>
          <IconButton aria-label="close" onClick={handleClose}>
            <Close />
          </IconButton>
        </div>
        <DialogContent>
          <div className="grid grid-rows-2 grid-flow-col gap-4">
            <div className="grid grid-rows-2 grid-flow-col gap-2">
              <div className="flex justify-between items-center">
                <div className="text-md font-semibold">Volume</div>
                <Tooltip title="Reset" placement="top">
                  <IconButton onClick={handleResetVolume}>
                    <RestartAlt />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="flex space-x-2">
                <VolumeDown />
                <Slider
                  aria-label="Volume"
                  valueLabelDisplay="auto"
                  step={0.01}
                  max={1}
                  min={0}
                  valueLabelFormat={valueShow}
                  value={volume}
                  onChange={handleChange}
                />
                <VolumeUp />
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <div className="flex w-full px-2 justify-between items-center">
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <div className="flex space-x-2">
              <Button
                variant="contained"
                onClick={handleResetAll}
                disabled={isDefault}
              >
                Reset All
              </Button>
              <Button variant="contained" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </div>
        </DialogActions>
      </Dialog>
      <div className={`absolute inset-0 z-10`}>
        <div className="relative h-full">
          {ready ? (
            <>
              <div className="absolute inset-x-0 top-0 flex justify-start">
                <MenuBar />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex justify-center">
                <DialogMessage />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      {children}
    </Layer>
  );
}
