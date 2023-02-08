import { useEffect } from "react";

const useFindOutsideClick = (ref, callback) => {
  useEffect(() => {
    console.log("Inside useFindOutsideClick");
    const outsideClick = (e) => {
      console.log("Inside");
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("click", outsideClick);
    return () => document.removeEventListener("click", outsideClick);
  }, [ref, callback]);
};
export default useFindOutsideClick;
