import React from 'react';
import styled from 'styled-components';

//
export const ButtonsBlock = styled.div`
    display: flex;
    max-width: 400px;
    justify-content: space-around;
    margin: 0 auto;
`

export const Card = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 5px;
    padding: 20px;
`;


export const FormCard = styled(Card) `

    > input, button {
        margin-bottom: 10px;
    }
    
    > p {
        margin-bottom: 15px
    }
`

