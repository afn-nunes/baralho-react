
import styled from "styled-components";
import {string} from 'prop-types';

export function Card({source, id}) {
    return (
        <CardImg src={source} key={'card' + id} />
    )
}

const CardImg = styled.img`
  padding: 2px;  
  max-height: 8vw;
`

Card.propTypes = {
  source: string,
   id: string, 
}

