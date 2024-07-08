import { useState , useEffect} from "react";
import Alert from "../components/Alert";
import SymptomsList from "../components/SymptomsList";
import { getSymptoms, getDiagnosis } from "../infermedicaAPI";
import Form from "../components/Form";
import Diagnosis from "../components/Diagnosis";
import UserSymptomsList from "../components/UserSymptomsList";
import Questions from "../components/Questions";

const Sintomas = ({setOpen}) => {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("male");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [diagnosis, setDiagnosis] = useState(null);
  const [listSymptoms, setListSymptoms] = useState([]);
  const [showAlert, setShowAlert] = useState("");
  const [viewquestion, setViewQuestion] = useState(null);
  const [answer, setAnswer] = useState({});


  useEffect(() => {
    setOpen("sintomas");

  }, []);

  const handleSymptomSelect = (nameSymtom, symptomId, isSelected) => {
    setListSymptoms((prev) =>
      isSelected ? [...prev, nameSymtom] : prev.filter((s) => s !== nameSymtom)
    );
    setSelectedSymptoms((prev) =>
      isSelected
        ? [...prev, { id: symptomId, choice_id: "present" }]
        : prev.filter((s) => s.id !== symptomId)
    );
  };

  const handleAgeSubmit = async (age) => {
    setAge(age);
    const symptomsData = await getSymptoms(age);
    setSymptoms(symptomsData);
  };

  const handleGetDiagnosis = async () => {
    const data = await getDiagnosis(selectedSymptoms, age, gender);
    

    if (data.question !== null) {
      setViewQuestion(data.question);
    } else {
      setDiagnosis(data);
      return (location.href = "#diagnosis");
    }
  };


  const handleClean = () => {
    setSelectedSymptoms([]);
    setListSymptoms([]);
  };

  const handleReset = () => {
    setSelectedSymptoms([]);
    setListSymptoms([]);
    setDiagnosis(null);
    setAge(0);
    setGender("male");
    setSymptoms([]);
  };

  return (
    <>
      {showAlert === "success" && (
        <Alert tipo="success" setShowAlert={setShowAlert} />
      )}
      {showAlert === "error" && (
        <Alert tipo="error" setShowAlert={setShowAlert} />
      )}
      <header className=" w-full h-16 flex justify-center items-center mb-5">
        <h1 className="text-4xl font-oxygen font-bold text-black text-center mt-5  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500 ">
          Síntomas de enfermedades
        </h1>
      </header>

      <main className="max-w-6xl mx-auto min-h-screen p-5 flex flex-col  gap-1">
        {!age && (
          <div className=" w-full md:w-1/2 h-[50vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-white flex items-center p-5 ">
            <Form
              onAgeSubmit={handleAgeSubmit}
              setGender={setGender}
              setShowAlert={setShowAlert}
            />
          </div>
        )}

        {symptoms.length === 0 && age > 0 && (
          <div
            role="status"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  "
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Cargando...</span>
          </div>
        )}

        {symptoms.length > 0 && (
          <>
            <div className="w-full h-full mt-5 flex md:flex-row flex-col gap-1">
              <div className="w-full md:w-1/2 h-full p-5 ">
                <SymptomsList
                  symptoms={symptoms}
                  onSymptomSelect={handleSymptomSelect}
                  listSymptoms={listSymptoms}
                />
              </div>

              <div className="w-full md:w-1/2 h-full  p-5 rounded-lg ">
                <h2 className="font-bold text-2xl mb-5">Lista de sintomas</h2>
                <UserSymptomsList listSymptoms={listSymptoms} />
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div className="w-full flex gap-2">
                <button
                  onClick={handleClean}
                  className="w-40 bg-red-500 hover:bg-red-700 text-white cursor-pointer mt-5 rounded-lg "
                >
                  Limpiar lista
                </button>

                <button
                  onClick={handleGetDiagnosis}
                  className="p-2 w-2/5 bg-blue-500 hover:bg-blue-700 text-white cursor-pointer mt-5 rounded-lg disabled:cursor-default disabled:bg-gray-300"
                  disabled={selectedSymptoms.length === 0}
                >
                  Procesar sintomas
                </button>
              </div>

              <button
                onClick={handleReset}
                className="py-1 w-32 bg-blue-950 hover:bg-blue-900 text-white cursor-pointer mt-5 rounded-lg "
              >
                Resetear App
              </button>
            </div>

            <div className="w-full  p-5 mt-5 rounded-lg ">
              <div>
                {diagnosis ? (
                  <Diagnosis diagnosis={diagnosis} />
                ) : (
                  <div>
                    {viewquestion && (
                      <Questions questions={viewquestion} setDiagnosis={setDiagnosis} selectedSymptoms={selectedSymptoms} setAnswer={setAnswer} answer={answer} setViewQuestion={setViewQuestion} setSelectedSymptoms={setSelectedSymptoms} age={age} gender={gender} />
                    ) }
                  </div>
                )}
              </div>

            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Sintomas;
