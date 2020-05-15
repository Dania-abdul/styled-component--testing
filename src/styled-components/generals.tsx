import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import { keyframes } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*, *:before, *:after {
	margin: 0;
	padding: 0;

	-webkit-box-sizing: border-box ;
	-moz-box-sizing: border-box ;
	-ms-box-sizing: border-box ;
	box-sizing: border-box ;

`;

export const Header = styled.header`
    padding: 30px;
    color: white;
    background:  ${props => props.theme.colors.Gradiant100};
    @media (min-width: 1025px) {
        padding: 50px;
    }
`

export  const Nav = styled.nav`
    padding: 10px;
    background:  ${props => props.theme.colors.SecondaryColor};
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
// SLIDERS 

const sliderThumbsStyles = (props: any) =>(`
    width: 15px;
    height: 25px;
    background: blue;
    currsor: pointer;

`)

// ${props => (props.state.value > 10) ? (this.state.value /255) : .1}
export const StyledSlide = styled.div `
    display: fex;
    align-items: center;
    color:#888;
    width: 200px;
    justify-content: space-between;
    .value {
        flex: 1;
    }

    .slider {
        flex: 6;
        -webkit-appearance: none;
        width: 100%;
        height: 15px;
        border-radious: 5px;
        background: ${props => props.theme.colors.color200};
        
        &::-webkit-slider-thumb {
            -webkit-appearance:none;
            appearance: none;
            ${props => sliderThumbsStyles(props)}
        }

        &::-moz-range-thumb {
            ${props => sliderThumbsStyles(props)}
        }
    }
`;

export class Slider extends React.Component {
  state = {
      value: 50
  }

  handleOnChange = (e: any) => this.setState({ value: e.target.value})

  render() {
      return (
          <StyledSlide>
              <input type="range" min={0} max={255} value={this.state.value} className="slider" onChange={this.handleOnChange} />
              <div>
                  <p className="value">{this.state.value}</p>
              </div>
          </StyledSlide>    
      )
  }
}

//END SLIDER