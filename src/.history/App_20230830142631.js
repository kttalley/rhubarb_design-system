import React, { Component } from 'react';
import { DocsSection, DocsColorBox, DocsModalContainer, DocsCodeBlock } from './Docs';
import {
  GlobalStyle,
  Btn
} from './Rhubarb';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <DocsSection>
          <h3>Colors</h3>
          <DocsColorBox color="darkGreen">darkGreen</DocsColorBox>
          <DocsColorBox color="tan">tan</DocsColorBox>
          <DocsColorBox color="lightGreen">lightGreen</DocsColorBox>
          <DocsColorBox color="teal">teal</DocsColorBox>
          <DocsColorBox color="pink">pink</DocsColorBox>

          
        </DocsSection>
      </div>
    );
  }
}

export default App;