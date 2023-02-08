import ReactDOM from "react-dom";
import Modal from "./modal";
// import { ModalContext } from "../contextProvider";

const GlobalModal = ({ children, show }) => {
  if (!show) {
    return;
  }
  return ReactDOM.createPortal(
    <Modal>{children}</Modal>,
    document.getElementById("modal-container")
  );
};

export default GlobalModal;

// const ModalComponents = {
//   create: "COMPONENT_CREATE",
//   edit: "COMPONENT_EDIT",
// };

// storeId === activeId => display modal
