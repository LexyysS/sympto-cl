import { useEffect , useState} from "react";


const Diccionario = () => {

  const [data, setData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://lexyyss.github.io/ScrappingMedlinePlus/medlineplus_enciclopedia.json');
           
            const json = await response.json();
            
            setData(json);
            
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
}, []);

useEffect(() => {
  setFiltered(
    data.filter((item)=> item.titulo.toLowerCase().includes(searchTerm.toLowerCase()))
  )
}, [searchTerm, data]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    
  };

  return (
    <>
      <header className=" w-full h-16 flex justify-center items-center mb-5">
        <h1 className="text-4xl font-oxygen font-bold text-black text-center mt-5  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500 ">
          Diccionario
        </h1>
      </header>

      <main className="max-w-6xl mx-auto h-screen p-5 flex flex-col  gap-1">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </form>


           <div className="w-full h-full flex flex-wrap overflow-y-auto gap-2" >
              {filtered.map((item) => (
                <div key={item.titulo} className="p-5 bg-white rounded-lg shadow-sm">
                  <h1>{item.titulo}</h1>
                </div>
              ))}
            </div>   
          {}

       
      </main>
    </>
  );
};

export default Diccionario;
