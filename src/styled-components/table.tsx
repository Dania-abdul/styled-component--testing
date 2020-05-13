import React from 'react';
import styled from 'styled-components';


export const TableContainer = styled.div `
    display: flex; 
    max-width: 1300px;
    padding: 30px;
    margin: 0 auto;
    box-sizing: border-box;
    flex-direction: column;
    @media(min-width: 1024px) {
        flex-direction: row;
    } 
`

export const TableCell = styled.div `
    box-sizing: border-box;
    position: relative;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    border:1px solid black;
    margin: 0 auto;
    border: 2px solid ${props => props.theme.colors.TeritaryColor};

    
    @media(min-width: 1024px) {
        margin-bottom: 0;
        width: 50%;
        &:first-child {
            margin-right: 15px;
          }
    }
`

export const CellHeader = styled.div`
    box-sizing: border-box;
    padding: 5px;
    box-sizing:border-box;
    margin-bottom: 30px;
    width: 100%;
    background: ${props => props.theme.colors.PrimaryColor};
`

export const CellContent = styled.div`
    box-sizing: border-box;
    flex: 1;
    margin: 10px;
    width: 100%;
    height: 100%;
`