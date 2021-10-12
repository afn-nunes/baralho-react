
import styled from "styled-components";

// const rank = ['A','0','1','2','3','4','5','6','7','8','9','J','Q','K']
// const suit = ['H', 'S', 'D', 'C']
export function Card(props) {   
  const{source}   = props
    return (
        console.log(source)
    )
}

const CardImg = styled.img`
  padding: 2px;  
  max-height: 9vw;
`

// Card.propTypes = {
//   source: string,
//    id: string, 
//    rank: string, 
//    suit: string, 
//    point: number
// }

