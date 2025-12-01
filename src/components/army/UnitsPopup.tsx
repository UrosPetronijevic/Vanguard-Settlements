import { useUnitPopupStore } from "../../stores/unitPopupStore";

export default function UnitsPopup() {
  const { setUnitpopup } = useUnitPopupStore();

  const handleClose = () => {
    setUnitpopup(false);
  };

  return (
    <div className="absolute max-w-screen w-screen max-h-screen h-screen flex items-center justify-center z-50">
      <div className="w-2/3 h-4/5 py-4 px-8 paper-bg shadow-[-7px_9px_6px_4px_rgba(0,_0,_0,_0.3)] rounded-2xl flex flex-col justify-between">
        <div className="w-full flex justify-end">
          <span className="cursor-pointer text-xl" onClick={handleClose}>
            X
          </span>
        </div>

        {/* This is the scrollable content area */}
        <div className="flex-grow overflow-y-auto pr-2">
          {/* Your content goes here. It will scroll if it overflows */}
          <div className="h-full">
            {/* Example content to demonstrate scrolling */}
          </div>
        </div>
      </div>
    </div>
  );
}
