import { useState, useEffect, useRef } from "react";

export const useDebounce = () => {
  const timerRef = useRef<any>(null);
  function debounce(cb: (...args: any[]) => void, delay: number) {
    // let timer;
    return function (...args: any[]) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  return { debounce };
};
