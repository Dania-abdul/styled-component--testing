import React from 'react';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  color: ${props => props.theme.colors.SecondaryColor};
`
export const SubTitle = styled.p`
  font-size: 16px;
  text-align: center;
  color: blueviolet;
`

export const Text = styled.p `
    font-size: 16px;
    color: ${props => props.theme.colors.TeritaryColor};
    margin: 0;
`