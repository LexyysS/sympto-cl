import {
  ClipboardDocumentCheckIcon,
  BookOpenIcon,
  GlobeAmericasIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState("sintomas");
  const handleClick = (page) => {
    setOpen(page);
  };

  return (
    <nav className="w-full bg-white h-20 gap-2 p-2 justify-center items-center flex">
      <Link
        className={`flex aspect-square  h-full w-1/3 items-center justify-center gap-1 rounded-md p-2 hover:bg-blue-950 hover:text-white transition-all ${
          open === "sintomas"
            ? "bg-sky-600 text-sky-50"
            : "bg-white text-gray-700"
        } `}
        to="/"
        onClick={() => handleClick("sintomas")}
      >
        <span>
          <ClipboardDocumentCheckIcon className="w-6 h-6 shrink-0" />
        </span>
        <small class="text-center text-xs font-medium"> Sintomas </small>
      </Link>

      <Link
        className={`flex aspect-square  h-full w-1/3  flex-col items-center justify-center gap-1 rounded-md p-1.5 hover:bg-blue-950 hover:text-white transition-all  ${
          open === "diccionario"
            ? "bg-sky-600 text-sky-50"
            : "bg-white text-gray-700"
        } `}
        to="/diccionario"
        onClick={() => handleClick("diccionario")}
      >
        <span>
          <BookOpenIcon className="w-6 h-6 shrink-0" />
        </span>

        <small class="text-center text-xs font-medium"> Diccionario </small>
      </Link>

      <Link
        to="/gps"
        className={`flex aspect-square h-full w-1/3  flex-col items-center justify-center gap-1 rounded-md p-1.5  hover:bg-blue-950 hover:text-white transition-all ${
          open === "gps"
            ? "bg-sky-600 text-sky-50"
            : "bg-white text-gray-700"
        }  `}
        onClick={() => handleClick("gps")}
      >
        <span>
          <GlobeAmericasIcon className="w-6 h-6 shrink-0" />
        </span>
        <small class="text-center text-xs font-medium"> GPS </small>
      </Link>
    </nav>
  );
};

export default NavBar;
