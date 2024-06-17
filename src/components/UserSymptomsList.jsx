import React from "react";

const UserSymptomsList = ({ listSymptoms }) => {
  return (
    <ul className="w-full h-[50vh] overflow-y-auto">
      {listSymptoms.map((symptom) => (
        <li
          key={symptom}
          className="  shadow-lg  mt-2 mb-2 bg-slate-50 rounded-lg  p-5  w-full flex flex-col "
        >
          <span className="font-bold w-full text-lg text-sky-600 italic ">
            {symptom}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default UserSymptomsList;
