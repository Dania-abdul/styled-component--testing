import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import { keyframes } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
* {
-webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
        box-sizing: border-box;
}

`;

export const Header = styled.header`
    padding: 30px;
    background: ${props => props.theme.colors.PrimaryColor};
    @media (min-width: 1025px) {
        padding: 50px;
    }
`

export  const Nav = styled.nav`
    padding: 10px;
    background: darkslategray;
    color: white; 
    margin-bottom: 30px;
`

export const Input = styled.input.attrs(props => ({type: props.type }))`
    width:100%;
    height:40px;
    background: red;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.SecondaryColor};
    text-align:center;
    background-color: ${props => props.type == "info" ? "#5eafff" : "white"};
`    


export const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`

export const Line = styled.span `
    display: block;
    height: 1px; 
    background:${props => props.theme.colors.TeritaryColor};
    width: 100%;
    margin: 10px 0;
`