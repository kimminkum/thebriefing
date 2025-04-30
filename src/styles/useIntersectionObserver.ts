import { useEffect } from "react";

const useIntersectionObserver = (
  selector: string,
  options: IntersectionObserverInit
) => {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.classList.add("io-animation");
        } else {
          target.classList.remove("io-animation");
        }
      });
    }, options);

    const ioElements = document.querySelectorAll(selector);
    ioElements.forEach((item) => {
      io.observe(item);
    });

    // Cleanup observer on component unmount
    return () => {
      ioElements.forEach((item) => {
        io.unobserve(item);
      });
    };
  }, [selector, options]);
};

export default useIntersectionObserver;
