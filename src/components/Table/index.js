import { Card } from '../../components'
import styled from "styled-components";
export function Table(props) {
  return (
    <DivMain>
      <DivContent>
        <DivCards>
          <Card source={'http://deckofcardsapi.com/static/img/AD.png'} id={1} />
        </DivCards>
        <DivCards2>
          <Card source={'http://deckofcardsapi.com/static/img/2D.png'} id={2} />
          <Card source={'http://deckofcardsapi.com/static/img/4D.png'} id={4} />
        </DivCards2>
        <DivCards1>
          <Card source={'http://deckofcardsapi.com/static/img/3D.png'} id={3} />
        </DivCards1>
      </DivContent>
    </DivMain>
  )
}

const DivContent = styled.div`
    width: 60vh;        
    border-style: solid;
    border-width: 1vh;
    border-radius: 20px;
    border-color: #D8B16C;
    padding: 10px;   
    background-color : #058A3D;
  `;

const DivMain = styled.div`
  display: flex;
  justify-content: center;    
  margin-top: -5vh;
`;

const DivCards = styled.div`  
  display: flex;
  justify-content: center;
`;
const DivCards1 = styled.div`  
  display: flex;
  justify-content: center;   
`;

const DivCards2 = styled.div`
  display: flex;
  justify-content: space-between;  
`;


