import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="min-h-[200px] max-w-[80%] m-auto z-50 relative bg-[white] rounded-[8px] p-4">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="cursor-pointer text-xl self-end"
              />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="backdrop-blur h-screen w-screen absolute top-0 z-40"
          ></div>
        </>
      )}
    </>,
    document.getElementById("model-root")
  );
};

export default Modal;
