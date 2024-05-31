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
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              name="nombre"
              type="text"
              placeholder="Ingrese el nombre"
              ref={nombre}
              required
            />
          </div>
          <div>
            <input
              name="apellido"
              type="text"
              placeholder="Ingrese el apellido"
              ref={apellido}
              required
            />
          </div>
        </div>
        <div>
          <button onClick={handleSubmit}>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default App;
