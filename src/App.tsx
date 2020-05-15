import React, { useState } from "react";
import './App.css';

import { ThemeProvider } from "styled-components";
import darkTheme from "../src/styled-components/themes/dark";
import lightTheme  from "../src/styled-components/themes/light";

import styled, { keyframes } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import { GlobalStyle, Header, Nav, Input, Rotate, Line, Slider } from './styled-components/generals'
import { Title, Text, SubTitle } from './styled-components/typography'
import { Link, PrimaryButton, SecondaryButton  } from './styled-components/clickables'
import { TableContainer, TableCell, CellHeader, CellContent } from './styled-components/table'
import { List, ListItem} from './styled-components/lists'
import { ButtonsBlock, FormCard, Card } from './styled-components/Cards'




const App = () => {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );

  return (
    <div className="App">
          <GlobalStyle />
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Header>
              <Title>
                Hello Styled-components! <Rotate>&lt; 💅 &gt;</Rotate>
              </Title>
              <SubTitle>This is a React Style-Component Playground</SubTitle>
              <SubTitle>This is a repo that illustrates the very basics of <Link href="https://styled-components.com/">styled-components</Link> with <Link href="https://reactjs.org/"> React</Link>  </SubTitle>
            </Header>
            <Nav>
              <List>
                <ListItem><Link href="https://github.com/Dania-abdul/styled-component--playground">GitHub repository</Link></ListItem>
                {/* <ListItem><Link href="https://github.com/Dania-abdul/styled-component--playground"></Link></ListItem>
                <ListItem></ListItem> */}
    
              </List>
            </Nav>
            <TableContainer>  
                <TableCell>
                  <CellHeader>Change mood </CellHeader>
                  <CellContent>
                    <Card>
                      <Text>
                        Vanilla Mode is {isDarkMode ? "Enabled" : "Disabled"}
                      </Text>
                      <PrimaryButton
                        onClick={() => { setIsDarkMode(!isDarkMode);
                        localStorage.setItem("isDarkMode", `${!isDarkMode}`); }}
                        >
                          Change Mood
                      </PrimaryButton>
                    </Card>
                  </CellContent>
                </TableCell>
                <TableCell>
                  <CellHeader>Login Form  </CellHeader>
                  <CellContent>   
                    <FormCard>
                      <Text>Please Login</Text>
                      <Input type="text" placeholder="yourmail@domain.com"></Input>
                      <Input type="password" placeholder="your password"></Input>
                      <PrimaryButton>Primary</PrimaryButton>
                      <Text>Don't have an account? <Link href="github.com">Create One</Link></Text>
                   
                    </FormCard>
                    </CellContent> 
                </TableCell>  
                <TableCell>
                  <CellHeader> Buttons </CellHeader>
                  <CellContent>
                    <ButtonsBlock>
                      <PrimaryButton>Primary</PrimaryButton>
                      <SecondaryButton>Secondary</SecondaryButton>
                    </ButtonsBlock>
                  </CellContent>
                </TableCell>
      
                <TableCell>
                  <CellHeader> Slider </CellHeader>
                  <CellContent>
                    <Card>
                      <Slider></Slider>
                    </Card>
                  </CellContent>
                </TableCell>  
              </TableContainer>
          </ThemeProvider>
    </div>
  );
}

export default App;
