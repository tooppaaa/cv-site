"use client";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 1000,
      offset: -100,
    });
  }, []);

  return null;
};

export default AOSInit;
