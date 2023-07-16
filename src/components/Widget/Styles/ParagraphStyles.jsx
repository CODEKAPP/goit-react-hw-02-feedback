import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: 18px;
  margin: 0;
  font-weight: 400;
  color: #000000;
  padding: 0;

  text-shadow: #e66a44 3px 3px 5px;
  align-items: flex-start;
`;

// Estilos para el h2
export const Paragraph2 = styled(Paragraph)`
  /* background-color: green; */
  font-weight: 700;
  font-size: 16px;
  text-shadow: #d2d056 3px 3px 5px;
  padding: 0;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* align-content: center; */
  flex-direction: column;
  /* flex-wrap: wrap;
  /* text-shadow: 5px 5px #558abb; */
`;
export const Paragraph3 = styled(Paragraph)`
  /* background-color: green; */
  font-weight: 700;
  font-size: 16px;
  text-shadow: #857cb1 3px 3px 5px;

  margin: 10px 20px;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  /* align-content: center; */
  flex-direction: row;
  /* flex-wrap: wrap;
  /* text-shadow: 5px 5px #558abb; */
`;
export const Paragraph4 = styled(Paragraph)`
  /* background-color: green; */
  padding-left: 20px;
  text-shadow: #b1917c 3px 3px 5px;
`;
