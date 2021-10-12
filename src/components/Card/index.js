
import styled from "styled-components";
import {string, number } from 'prop-types';

// const rank = ['A','0','1','2','3','4','5','6','7','8','9','J','Q','K']
// const suit = ['H', 'S', 'D', 'C']
export function Card({source, id, rank, suit, point}) {    
    return (
        <CardImg src={source} key={'card' + id} />
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

