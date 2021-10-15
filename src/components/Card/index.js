
import styled from "styled-components";
import {string, number} from 'prop-types';

export function Card({source, id}) {
    return (
        <CardImg src={source} key={'card' + id} />
    )
}

const CardImg = styled.img`
  padding: 2px;  
 height: 6vw;
`

Card.propTypes = {
   source: string,
   id: number, 
}

