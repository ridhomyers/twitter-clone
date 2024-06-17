import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center 
          items-center
          content-center
          m-auto
          w-full
          h-full
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800
          bg-opacity-70
        "
      >
        <div className="relative sm:w-full mx-auto h-auto">
          {/*content*/}
          <div
            className="
            h-full
            lg:h-auto
            border-0 
            rounded-lg 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            md:px-6
            bg-black 
            outline-none 
            focus:outline-none
            sm:py-3
            "
          >
            {/*header*/}
            <div
              className="
              flex 
              items-center 
              justify-between 
              p-5 
              rounded-t
              "
            >
              <h3 className="text-3xl font-semibold text-white">{title}</h3>
              <button
                className="
                  p-1 
                  ml-auto
                  border-0 
                  text-white 
                  hover:opacity-70
                  transition
                "
                onClick={handleClose}
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/*body*/}
            <div className="relative p-5 flex md:flex-auto">{body}</div>
            {/*footer*/}
            <div className="flex flex-col gap-2 p-5 pt-2">
              <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
