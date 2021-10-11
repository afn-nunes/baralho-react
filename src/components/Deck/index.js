import { Card } from '../../components'
import styled from "styled-components";
const context = require.context('../../images', true, /.png$/);

const cache = {};
function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(context);
const images = Object.entries(cache).map(module => module[1].default);
// const rank = ['A','0','1','2','3','4','5','6','7','8','9','J','Q','K']
// const suit = ['H', 'S', 'D', 'C']
export function Deck() {
  return (
    < DivCard>
      {
        images.map((image, key) => (
          <Card source={image} id={key} />
        ))
      }
    </DivCard >
  )
}

export default Deck;

const DivCard = styled.div`
  display: flex;  
  flex-direction: row;
  max-inline-size: 1;
`;