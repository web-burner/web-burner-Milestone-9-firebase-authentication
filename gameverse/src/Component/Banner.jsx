import { useState } from "react";
import BannerApp from "./BannerApp";
import { useEffect } from "react";

const Banner = ({ bannerContent }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
      if (count === 2) {
        setCount(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className={`w-10/12 mx-auto`}>
      <BannerApp
        app={bannerContent[count]}
        apps={bannerContent}
      />
    </div>
  );
};

export default Banner;
