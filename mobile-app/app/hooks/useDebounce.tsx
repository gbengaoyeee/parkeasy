import { useState, useEffect, useRef } from "react";

export const useDebounce = () => {
  const timerRef = useRef<any>(null);
  function debounce(cb: (...args: any[]) => void, delay: number) {
    // let timer;
    return function (...args: any[]) {
      // console.log(timer);
      // if (timer) clearTimeout(timer);
      // console.log(timerRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        // timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  return { debounce };
};
