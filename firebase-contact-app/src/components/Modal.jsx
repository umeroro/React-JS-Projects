import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="min-h-[200px] max-w-[80%] m-auto z-40 relative bg-[white] rounded-[8px] p-4">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="cursor-pointer text-xl self-end"
              />
            </div>
          </div>
          <div
            onClick={onClose}
            className="backdrop-blur h-screen w-screen absolute top-0 z-50"
          ></div>
        </>
      )}
    </>
  );
};

export default Modal;
