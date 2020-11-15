import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import Style from "./Mobile.module.css";
import Link from "next/link";
import IconHome from "../Icon/IconHome";
import IconCliboard from "../Icon/IconCliboard";
import IconPhone from "../Icon/IconPhone";
const MobileNavbar = () => {
  const { y } = useWindowScroll();
  const [visable, setVisable] = useState(false);
  useEffect(() => {
    if (y < 400) {
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
          <a className="flex flex-col justify-center items-center">
            <IconHome />
            Home
          </a>
        </Link>
        <Link href="/service">
          <a className="flex flex-col justify-center items-center">
            <IconCliboard />
            Service
          </a>
        </Link>
        <Link href="/contact">
          <a className="flex flex-col justify-center items-center">
            <IconPhone />
            Contact us
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
