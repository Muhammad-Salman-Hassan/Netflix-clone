// Netflix Fixed Scroll Bar with React Next js
import React, { useEffect } from "react";
import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
const Header = () => {
  
  const [scroled, setscroled] = React.useState(false);
  // Fixed Scroll Navbar Code
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 0) {
        setscroled(true);
      } else {
        setscroled(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener('scroll',handlescroll)
    };
  }, []);

  return (
    <header className={`${scroled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-3">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-5 md:flex lg:px-5">
          <li className="headerLink">Home </li>
          <li className="headerLink">About</li>
          <li className="headerLink">Watch</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">List</li>
        </ul>
      </div>
      <div className="flex items-center text-sm font-light space-x-4">
        <SearchIcon className="hidden sm:inline h-6 w-6 cursor-pointer" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6 cursor-pointer" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
