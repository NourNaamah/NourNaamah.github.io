import { homePage } from "@db";
import { useEffect, useRef } from "react";
import Zoom from "react-reveal/Zoom";

const TypeWriter = () => {
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    let x = 1;
    const interval = setInterval(() => {
      if (ref.current) {
        ref.current.textContent = homePage.texts[x];
      }
      if (x < homePage.texts.length - 1) {
        x++;
      } else {
        x = 0;
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="type-writer z-50">
      <span className="hero-kicker">Frontend Portfolio</span>
      <Zoom>
        <div className="hero-name uppercase">{homePage.name}</div>
      </Zoom>
      <h1 className="hero-title">Frontend Engineer building thoughtful digital experiences.</h1>
      <span ref={ref} className="text sec-text text-[#6b384b] xl:!text-xl">
        {" "}
        Frontend Engineer
      </span>
    </div>
  );
};

export default TypeWriter;
