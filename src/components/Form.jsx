import React from "react";
import { useState } from "react";
import { Select } from "@headlessui/react";
const Form = ({ onAgeSubmit, setGender, setShowAlert }) => {
  const [age, setAge] = useState("");
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age <= 0) {
      setShowAlert("error");
    } else {
      setShowAlert("success");

      onAgeSubmit(age);
      
    }
  };

  return (
    <form className="w-full h-full p-10 space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5 ">
        <label
          className="block text-gray-700 text-xl  text-left font-bold mb-2"
          htmlFor="username"
        >
          Ingresa tu edad
        </label>
        <input
          className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="number"
          placeholder="Edad"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="username"
        >
          Genero
        </label>
        <Select
          name="gender"
          className="border data-[hover]:shadow rounded-sm data-[focus]:bg-gray-100 w-full py-2 px-3"
          aria-label="Genero"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
        </Select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 w-full  rounded focus:outline-none focus:shadow-outline"
      >
        Aceptar
      </button>
    </form>
  );
};

export default Form;
