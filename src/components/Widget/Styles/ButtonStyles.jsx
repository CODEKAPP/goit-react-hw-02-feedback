import styled from 'styled-components';

export const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  border-radius: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

// Estilos para el botón "good"
export const GoodButton = styled(Button)`
  background-color: green;

`;

// Estilos para el botón "neutral"
export const NeutralButton = styled(Button)`
  background-color: grey;

`;

// Estilos para el botón "bad"
export const BadButton = styled(Button)`
  background-color: red;

`;
