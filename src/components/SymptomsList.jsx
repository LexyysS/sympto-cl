import React, { useEffect, useState } from "react";


const SymptomsList = ({ symptoms, onSymptomSelect , listSymptoms }) => {
  const [filteredSymptoms, setFilteredSymptoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setFilteredSymptoms(
      symptoms.filter((symptom) =>
        symptom.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, symptoms]);

  return (
    <div className="w-full h-full ">
      <h2 className="font-bold text-2xl mb-5 ">Selecciona los síntomas</h2>
      <div className="w-full flex gap-2 ">
        <input
          type="text"
          placeholder="Buscar síntoma"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-2"
        />
        
      </div>

      <ul className="w-full h-[50vh] mt-5 p-2 overflow-y-auto">
        {filteredSymptoms.map((symptom) => (
          <li className="p-2 bg-white rounded-lg mb-2" key={symptom.id}>
            <label className="flex items-center">
              <input
                type="checkbox"
                value={symptom.id}
                checked={listSymptoms.includes(symptom.name)}
                onChange={(e) =>
                  onSymptomSelect(symptom.name , e.target.value, e.target.checked)
                }
                className="mr-3 w-4 h-4"
              />
              {symptom.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SymptomsList;
