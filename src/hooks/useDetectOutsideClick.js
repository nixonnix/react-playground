import { useEffect } from "react";

const useOutSideClick = (ref, onClickCallback) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickCallback();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [ref, onClickCallback]);
};

export default useOutSideClick;
