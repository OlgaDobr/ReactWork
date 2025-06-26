import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1> Фаст-Фуд</h1>
    </header>
  );
};

const headerStyle = {
  backgroundColor: 'blue',
  padding: '20px',
  textAlign: 'center',
};

export default Header;
