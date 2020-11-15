import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import Style from "./Mobile.module.css";
import Link from "next/link";
const MobileNavbar = () => {
  const { y } = useWindowScroll();
  const [visable, setVisable] = useState(false);
  useEffect(() => {
    if (y > 20) {
      setVisable(true);
    } else {
      setVisable(false);
    }
  }, [y]);

  if (!visable) return false;

  return (
    <div className={Style.mobile__container}>
      <div className={Style.mobile__sticky}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/service">
          <a>Service</a>
        </Link>
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
