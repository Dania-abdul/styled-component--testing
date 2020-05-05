import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { keyframes } from 'styled-components'




const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  margin-bottom: 50px;
`;

const FormWrapper = styled.div`
  width:100vw;
  padding:10px 50px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  border:1px solid black;
  margin: 0 auto;
  border: 2px solid palevioletred;
 
  @media (min-width: 768px) {
    max-width: 400px;
    box-sizing:border-box;
  }
`

const Input = styled.input.attrs(props => ({
  type: props.type
}))`
width:100%;
height:40px;
background: red;
border-radius: 5px;
border: 2px solid palevioletred;
box-sizing:border-box;
text-align:center;
margin: 0.2rem;
background-color: ${props => props.type == "info" ? "#5eafff" : "white"};
`

const Button = styled.button`
width:100%;
  color: palevioletred;
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  display: inline-block;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`; 

const Link = styled.a`
  color:blue;
  text-decoration:none;
`


function App() {
  return (
    <div className="App">

         <Wrapper>
          <Title>
            Hello Styled-components! <Rotate>&lt; 💅 &gt;</Rotate>
          </Title>
        </Wrapper>
        <div>
          <FormWrapper>   
            <Input type="text" placeholder="yourmail@domain.com"></Input>
            <Input type="password" placeholder="your password"></Input>
            <Button>Sign In</Button>
            <span>Don't have an account? <Link href="github.com">Create One</Link></span>
          </FormWrapper>
      </div>
    </div>
  );
}

export default App;
