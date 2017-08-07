import React, { Component } from 'react';
import logo from './logo.svg';

import {
  Panel,
  Header,
  LogoReact,
  IntroParagraph,
  Input,
  PrimaryButton,
  InfoButton,
  ErrorButton,
  SuccessButton ,
  WarningButton,
  Link,
  StyledLink,
  Row,
  Column,
} from './utils';

import Nav from './components/nav';

import setThemeHOC from './decorators/set_theme';

class App extends Component {
  render() {
    return (
      <Panel>
        <Header>
          <LogoReact src={logo} alt="logo" />
          <h2>Welcome to React</h2>
          <Nav tabs={[{name: 'name 1'}, {name: 'name 2'}, {name: 'name 3'}]} />
        </Header>
        <IntroParagraph>
          To get started, edit <code>src/App.js</code> and save to reload.
        </IntroParagraph>
        <Row>
          <Column width="33%">
            <Input type="password" placeholder="A small text input" />
            <Input type="text" placeholder="A bigger text input" size="1em" />
          </Column>
          <Column width="33%">
            <PrimaryButton>Primary</PrimaryButton>
            <InfoButton>Info</InfoButton>
            <ErrorButton>Error</ErrorButton>
            <SuccessButton>Success</SuccessButton>
            <WarningButton>Warning</WarningButton>
          </Column>
          <Column width="33%">
            <Link>Unstyled, boring Link</Link>
            <StyledLink>Styled, exciting</StyledLink>
            <Link href="https://www.w3schools.com/html/">Visit our HTML tutorial</Link>
          </Column>
        </Row>
      </Panel>
    );
  }
}

export default setThemeHOC(App);
