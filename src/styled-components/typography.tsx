import React from 'react';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`
export const SubTitle = styled.p`
  font-size: 16px;
  text-align: center;
`

export const Text = styled.p `
    font-size: 16px;
    color: ${props => props.theme.colors.color001};
    margin: 0;
`