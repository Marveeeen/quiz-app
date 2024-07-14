import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

type TModalProps = {
  title: string;
  children: ReactNode;
};

const Modal = forwardRef<{ open: () => void } | null, TModalProps>(
  ({ title, children }, ref) => {
    const dialog = useRef<HTMLDialogElement | null>(null);

    useImperativeHandle(ref, () => {
      return {
        open: () => {
          dialog.current?.showModal();
        },
      };
    });

    return createPortal(
      <dialog id="modal" ref={dialog}>
        <h2>{title}</h2>
        {children}
      </dialog>,
      document.getElementById("modal") as Element
    );
  }
);

export default Modal;
