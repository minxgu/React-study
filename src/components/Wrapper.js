import React from 'react';

function Wrapper({children}) {
  const style = {
    backgroundColor: '#e9ecef',
    padding: '20px',
  };

  return (
    <div style={style}>
        {children}
    </div>
  )
}

export default Wrapper;