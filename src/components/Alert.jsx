import { useEffect } from "react";
const Alert = ({ tipo, setShowAlert}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert("");
        }, 2000)
    
        return () => clearTimeout(timer)
      }, []);

  return (
    <>
      {tipo === "success" ? (
        <div
          class="flex items-center w-1/2 transition-all mr-5 fixed z-50 top-4 right-0  p-4 mb-4 text-sm text-white border bg-green-400/95 rounded-lg "
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Proceso Exitoso</span>
          </div>
        </div>
      ) : (
        <div
          class="flex items-center w-1/2 transition-all mr-5 fixed z-50 top-0 right-0   p-4 mb-4 text-sm text-white border bg-red-300/95 rounded-lg "
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Error !</span> Ingresa una edad correcta
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
