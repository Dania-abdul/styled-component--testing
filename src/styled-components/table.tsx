import React from 'react';
import styled from 'styled-components';


export const TableContainer = styled.div `
    display: flex; 
    flex-wrap: wrap;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 30px;
    box-sizing: border-box;
    flex-direction: column;    
    
    @media(min-width: 1024px) {
        flex-direction: row;    
    }
`

export const TableCell = styled.div `
    box-sizing: border-box;
    min-height: 300px;
    position: relative;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    border:1px solid black;
    margin: 0 auto;
    border: 2px solid ${props => props.theme.colors.SecondaryColor};
    width: 100%;
    margin-bottom: 40px;


    @media(min-width: 1024px) {
        width: 50%;
    }
`

export const CellHeader = styled.div`
    box-sizing: border-box;
    padding: 5px;
    box-sizing:border-box;
    margin-bottom: 30px;
    width: 100%;
    color: white;
    background: ${props => props.theme.colors.SecondaryColor};
`

export const CellContent = styled.div`
    box-sizing: border-box;
    flex: 1;
    margin: 10px;
    width: 100%;
    height: 100%;
`