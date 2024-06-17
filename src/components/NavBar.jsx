import {
  ClipboardDocumentCheckIcon,
  BookOpenIcon,
  GlobeAmericasIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState("sintomas");
  const handleClick = (page) => {
    setOpen(page);
  };

  return (
    <nav className="w-full p-5 fixed top-0 flex justify-center items-center">
      <Link
        className={`flex aspect-square  h-full w-full items-center justify-center gap-1 rounded-md p-2 hover:bg-blue-950 hover:text-white transition-all ${
          open === "sintomas"
            ? "bg-sky-600 text-sky-50"
            : "bg-gray-400 text-gray-700"
        } `}
        to="/"
        onClick={() => handleClick("sintomas")}
      >
        <span>
          <ClipboardDocumentCheckIcon className="w-6 h-6 shrink-0" />
        </span>
        <small class="text-center text-xs font-medium"> Sintomas </small>
      </Link>
    </nav>
  );
};

export default NavBar;
