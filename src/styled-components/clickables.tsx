import React from 'react';
import styled from 'styled-components';

//link
export const Link = styled.a`
  text-decoration:none;
  border-bottom: 1px solid  ${props => props.theme.colors.color100};
  color: inherit;
  
  &:hover{
    color: coral;
  }
`

////buttons
export const PrimaryButton = styled.button`
  color :  ${props => props.theme.colors.PrimaryColor};
  display: inline-block;
  font-size: 16px;
  padding: 10px 20px;
  border: 1px solid ${props => props.theme.colors.PrimaryButton};
  border-radius: 3px;
  transition: color 0.3s ease, background-color 0.3s ease;
  background:  ${props => props.theme.colors.color100};
  max-width: 200px;
  
  &:hover {
    background: "red";
  }
`;

export const SecondaryButton = styled(PrimaryButton) `
  color: ${props => props.theme.colors.color100};
  background:  ${props => props.theme.colors.PrimaryColor};
`

export const CardButton = styled(PrimaryButton)`  
  color: ${props => props.theme === 'light' ? '#fff' : '#fefefe'};
  opacity: ${props => props.theme === 'light' ? 1 : 0.7};
  background-color: ${props => props.theme === 'light' ? '#ff4081' : '#676767'};
`;

