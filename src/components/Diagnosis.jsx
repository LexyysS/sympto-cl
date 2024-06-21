const Diagnosis = ({ diagnosis }) => {
  
  return (
    <div className="w-full h-full ">
      {diagnosis && (
        <div className="w-full h-full ">
          <h2 className="font-bold text-2xl text-sky-900">Diagnóstico</h2>
          <p className="font-bold text-lg mt-5">A continuación, se presenta una lista de enfermedades con sus respectivas probabilidades según los datos obtenidos.</p>
          <ul className="w-full h-full mt-5 overflow-y-auto">
            {diagnosis.conditions.map((condition) => (
              <li
                key={condition.id}
                className="rounded-lg py-2 w-full flex flex-col "
              >
                <span className="font-bold w-full italic mb-2">{condition.name}</span>
                
                <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: (condition.probability * 100).toFixed(2) + "%" }}
                  >
                    {" "}
                    {(condition.probability * 100).toFixed(2)}%
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Diagnosis;
