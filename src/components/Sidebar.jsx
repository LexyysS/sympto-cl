import {ClipboardDocumentCheckIcon ,BookOpenIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
const Sidebar = ({open , setOpen}) => {

    const handleClick = (page) => {
      setOpen(page)
      
    }

  return (
    <nav className="z-20 bg-white/70 md:bg-white flex shrink-0  grow-0 justify-center items-center md:justify-around gap-4 border-t border-gray-200  p-1 md:p-2.5 shadow-lg  fixed top-[8%] md:top-2/4 -translate-y-2/4 left-[45%]  md:left-6 min-h-[auto] rotate-[-90deg] md:rotate-0 w-[60px] md:w-[94px]  h-full md:h-[30vh] flex-col  rounded-lg border">
      <Link
        
        className={`rotate-[90deg] md:rotate-0 flex aspect-square  h-full w-full  flex-col items-center justify-center gap-1 rounded-md p-1.5 hover:bg-blue-950 hover:text-white transition-all ${open === "sintomas" ? 'bg-sky-600 text-sky-50' : 'bg-gray-400 text-gray-700'} `}
        to="/"
        onClick={() =>handleClick("sintomas")}

      >
        <ClipboardDocumentCheckIcon className="w-6 h-6 shrink-0"/>
        <small className="text-center text-xs font-medium"> Síntomas </small>
      </Link>

      <Link
        
        className={`rotate-[90deg] md:rotate-0 flex aspect-square  h-full w-full  flex-col items-center justify-center gap-1 rounded-md p-1.5 hover:bg-blue-950 hover:text-white transition-all  ${open === "diccionario" ? 'bg-sky-600 text-sky-50' : 'bg-gray-400 text-gray-700'} `}
        to="/diccionario"
        onClick={() =>handleClick("diccionario")}
      >
        <BookOpenIcon className="w-6 h-6 shrink-0"/>

        <small className="text-center text-xs font-medium"> Diccionario </small>
      </Link>

      

    </nav>
  );
};

export default Sidebar;
