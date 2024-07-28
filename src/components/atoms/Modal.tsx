import Cross from "../../assets/cross.png"

interface ModalProps {
  cross?: boolean;
  children: React.ReactElement;
  onClose?: () => void;
  show: boolean;
}

const Modal = ({ cross = false, children, onClose, show }: ModalProps) => {
  if (show) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50 bg-modalBg backdrop-blur-[2px]">
        <div className="border border-gray-400 w-[500px] bg-mainGray rounded-lg py-8 px-5 flex flex-col relative">
          {cross && onClose && (
            <button
              className="h-7 w-7 rounded-[50%] bg-black flex justify-center items-center absolute right-5 top-4 cursor-pointer"
              onClick={onClose}
            >
              <img src={Cross} className="h-4 w-4" />
            </button>
          )}

          {children}
        </div>
      </div>
    );
  }

  return <></>;
};

export default Modal;

