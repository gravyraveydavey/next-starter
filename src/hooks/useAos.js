import React from "react";
import AOS from "aos";

const useAos = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 50,
      disable: "mobile",
    });
    document.querySelector("body").classList.add("aos-ready");

    //console.log("init aos");
  }, []);
};
export default useAos;
