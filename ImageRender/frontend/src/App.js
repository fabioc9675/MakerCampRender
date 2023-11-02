import React, { useEffect, useState } from 'react';

function App() {
  
  const [imagenURL, setImagenURL] = useState('http://localhost:3000/my_plot.png'); // Reemplaza con la URL de tu imagen inicial

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambia la URL de la imagen cada segundo
      setImagenURL(`http://localhost:3000/my_plot.png?timestamp=${Date.now()}`); // Reemplaza con la nueva URL de la imagen
    }, 1000); // 1000 milisegundos = 1 segundo

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <header className="App-header" >
        <img src={imagenURL} alt="Imagen Generada" width={"1280"} />
      </header>
    </div>
  );
}

export default App;