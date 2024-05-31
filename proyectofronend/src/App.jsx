import React, { useRef } from "react";
import axios from "axios";

const App = () => {
  const nombre = useRef(null);
  const apellido = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        nombre: nombre.current.value,
        apellido: apellido.current.value,
      };
      const baseURL = "http://localhost:3000/re/registro";

      axios.post(baseURL, data).then((response) => {
        console.log(response);

        if (response.status === 200) {
          alert("Registro exitoso");
        } else {
          alert("Error de registro");
        }
      });
    } catch (error) {
      alert("Error de servidor" + error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EDEBDE]">
    <form
      method="post"
      onSubmit={handleSubmit}
      className="w-full max-w-sm p-6 space-y-4 bg-white rounded-lg shadow-md"
    >
      <div className="space-y-4">
        <div>
          <input
            name="nombre"
            type="text"
            placeholder="Ingrese el nombre"
            ref={nombre}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <input
            name="apellido"
            type="text"
            placeholder="Ingrese el apellido"
            ref={apellido}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
  );
};

export default App;
