import { Hand } from '../components'
import styled from "styled-components";
function App() {
  return (
    <Content className="App">
      <Hand/>
    </Content>
  );
}

export default App;

const Content = styled.div`
  display: flex;
  justify-content: center;    
  align-items: center;
  flex-direction: row;
  max-width: 100vw;
`;