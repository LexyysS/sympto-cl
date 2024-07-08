
import {
  XCircleIcon
} from "@heroicons/react/24/solid";
const ModalC = ({ setOpenModal, enfermedad }) => {
  
  return (
    <>
      <div className="h-screen absolute top-0 left-0 w-full bg-[rgba(0,0,0,0.7)] z-40"></div>
      <div
        className="w-[80vw] p-10 h-[80vh] z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg overflow-y-auto transition-all"
        onClick={() => setOpenModal(false)}
      >
        <XCircleIcon onClick={() => setOpenModal(false)} className="absolute top-5 right-5 w-12 h-12 text-red-500 hover:text-red-600 cursor-pointer"/>
   
        <div className="w-full p-2 border-b border-gray-800 z-50">
          <h1 className="text-2xl font-bold text-blue-500 ">
            {enfermedad.titulo}
          </h1>
        </div>

        <div className="w-full p-2 rounded-lg bg-slate-200 mt-5">
          <p className="text-lg text-black">{enfermedad.definicion}</p>
        </div>

        <div className="w-full h-full">
          {enfermedad.secciones.map((seccion) => {
            if (
              seccion.sectionTitle !== "Imágenes" &&
              seccion.sectionTitle
            ) {
              return (
                <div  key={seccion.sectionTitle} className="w-full rounded-lg pb-5 bg-slate-200 ">
                  <h2 className="w-full p-3 rounded-t-lg text-xl bg-slate-300 font-bold text-blue-500 my-5">
                    {seccion.sectionTitle}
                  </h2>

                  {seccion.sectionBody.map((content) => {
                    if (content[content.length - 1] === ":") {
                      return (
                        <p key={content} className="text-lg text-black font-bold px-5 my-5">
                          {content}
                        </p>
                      );
                    } else {
                      return (
                        <p key={content} className="text-lg text-black px-5 my-1">
                          {content}
                        </p>
                      );
                    }
                  })}
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default ModalC;
