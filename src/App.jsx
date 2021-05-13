import logo from './logo.svg';
import styled from '@emotion/styled'
import React from 'react';

const ButtonP = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {
  return (
    <ButtonP>
      Obtener Frase
    </ButtonP>
  );
}

export default App;
