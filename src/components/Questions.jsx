
import { getDiagnosis } from "../infermedicaAPI";
const Questions = ({
  questions,
  setSelectedSymptoms,
  selectedSymptoms,
  age,
  gender,
  setViewQuestion,
  answer,
  setAnswer,
  setDiagnosis,
}) => {
  

  

  const handleQuestions = (question, e) => {
  
    
    setSelectedSymptoms((prev) => {
      const existingIndex = prev.findIndex((s) => s.id === question.id);
      if (existingIndex !== -1) {
        return [...prev.slice(0, existingIndex), { id: question.id, choice_id: e.target.value }, ...prev.slice(existingIndex + 1)];
      } else {
        return [...prev, { id: question.id, choice_id: e.target.value }];
      }
    });


  };

  const handleGetDiagnosisAnswer = async () => {
    if(Object.keys(answer).length !== 0){
      setSelectedSymptoms((prev) => [...prev, answer]);
    }
    
    try {

      
        const data = await getDiagnosis( Object.keys(answer).length !== 0 ? [...selectedSymptoms,answer] : selectedSymptoms, age, gender);

      

      if (data.question !== null) {
        setViewQuestion(data.question);
        setAnswer({});
      } else {
        setDiagnosis(data);
        setViewQuestion(null);
        return (location.href = "#diagnosis");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelQuestions = async () => {
    const data = await getDiagnosis(selectedSymptoms, age, gender);
    setViewQuestion(null);
    setDiagnosis(data)
    return (location.href = "#diagnosis");
    
  };
  
  return (
    <>
      <div className="h-screen absolute top-0 left-0 w-full bg-[rgba(0,0,0,0.7)] z-40"></div>
      <div className="w-[70vw] md:w-[50vw] max-h-[90vh] p-8  z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl transition-all">
        <h1 className="text-xl text-gray-400">Pregunta</h1>
        <h1 className="text-xl py-2 border-b border-blue-500 font-bold text-blue-500 mb-3">
          {questions.text}
        </h1>
        {questions.type === "group_single" ? (
          <h2 className="text-lg ">
            Seleccione una respuesta para solamente una pregunta
          </h2>
        ) : questions.type === "single" ? (
          <h2 className="text-lg ">Seleccione una respuesta </h2>
        ) : questions.type === "group_multiple" ? (
          <h2 className="text-lg">Seleccione una o mas respuestas</h2>
        ) : (
          <h2 className="text-lg ">Ingrese un valor</h2>
        )}

        <div
          
          className="w-full max-h-[60vh] mt-3 overflow-y-auto "
          
        >
          {
            questions.type === "group_multiple" || questions.type === "single"  ?
              questions.items.map((question) => (
                <div className="relative mb-3 " key={question.id}>
                <select
                key={question.id}
                class="peer p-4 pe-9 block w-full bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-30 disabled:pointer-events-none 
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2"
                onChange={(e) => handleQuestions(question, e)}
                
                
                
              >
                <option value="" className="text-gray-400">
                  Seleccione una respuesta
                </option>
                {question.choices.map((choice) => (
                  <option
                    value={choice.id}
                    key={choice.id}
                    className="text-black"
                  >
                    {choice.label}
                  </option>
                ))}
              </select>
              <label
                class="absolute text-xl  text-blue-900 top-0 start-0 p-3 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-70 peer-disabled:pointer-events-none
              peer-focus:text-lg
              peer-focus:-translate-y-1.5
              peer-focus:text-blue-900 dark:peer-focus:text-blue-900
              peer-[:not(:placeholder-shown)]:text-sm
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-blue-900 dark:peer-[:not(:placeholder-shown)]:text-blue-900 "
              >
                {question.name}
              </label>
            </div>
          )) : (
             questions.type === "group_single" ?
            questions.items.map((item) => (
              <div key={item.id} className="mb-2 ">
                <input
                  type="radio"
                  value={item.id}
                  checked={answer.id === item.id}
                  onChange={() => setAnswer({ id: item.id, choice_id: 'present' })}
                  className="cursor-pointer"
                />

                <label htmlFor={item.id} className="ml-2 text-bold ">{item.name}</label>
              </div>
            )) : (
              <h1>Ingresa un valor</h1>
            )
          )
        
        }
        
        </div>

        <div className="w-full h-1/5 mt-3 flex justify-end ">
          <button
            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg mr-3"
            onClick={handleGetDiagnosisAnswer}
            
          >
            Aceptar
          </button>
          <button className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg "
          onClick={handleCancelQuestions}>
            <a href="#diagnosis">Cancelar preguntas</a>
            
          </button>
        </div>
      </div>
    </>
  );
};

export default Questions;
