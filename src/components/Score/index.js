import React from 'react';
import { Card } from 'react-bootstrap';
import styled from "styled-components";
export function Score(props) {
    const{team, score} = props
    return (
        <StyledCard bg={'dark'} key={1}>
            <Card.Title>{team}</Card.Title>                            
            <Card.Text>{score}</Card.Text>            
        </StyledCard>
    );
}

const StyledCard =styled(Card)`
    height: 10vh; 
    width : 20vh;
    display: flex;    
    justify-content: space-between;
    align-items: center;    
`





