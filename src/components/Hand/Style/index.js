import styled from "styled-components";
export function Style() {
  const DivJogador = styled.div`
  display: flex;  
  flex-direction: column;  
  align-items: center;    
  width: 70vw;
  flex-wrap: wrap;
`;

  const DivCard = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;   
  flex-direction: row     
`;

  const StyledImg = styled.img`
  width: 10vh;  
`
}