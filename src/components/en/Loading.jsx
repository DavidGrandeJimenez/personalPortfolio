import React from 'react';

const Loading = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0e1128',
    color: 'white',
    fontSize: '24px', 
    fontWeight: 'bold'
  };

  return (
    <div style={style}>
      Loading...
      Please, wait a second.
    </div>
  );
}

export default Loading;
