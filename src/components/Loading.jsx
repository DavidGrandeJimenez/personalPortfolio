import React from 'react';

const Loading = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Para ocupar toda la altura de la pantalla
    backgroundColor: '#282c34', // Fondo oscuro (opcional)
    color: 'white', // Color del texto blanco
    fontSize: '24px', // Tamaño de fuente (opcional)
  };

  return (
    <div style={style}>
      Loading...
      Please, wait a second.
    </div>
  );
}

export default Loading;
