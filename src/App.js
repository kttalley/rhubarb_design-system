import React, { Component } from 'react';
import { DocsSection, DocsColorBox, DocsModalContainer, DocsModalContainerContentExample, DocsCodeBlock } from './Docs';
import Icon from './Rhubarb/Icon'
import {
  GlobalStyle,
  Btn,
  Modal,
  fontSize,
  coreColor,
  coreColors,
  themeColors,
  color
} from './Rhubarb';


class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        
        <DocsSection>
          <h1>Rhubarb Design System</h1>
        </DocsSection>
         <DocsSection>
          <h2>Core Colors</h2>
          <h3>Pink</h3>
          <DocsColorBox color={coreColors.pink[40]}style={{color: `${coreColors.green[80]}`}}>Pink40</DocsColorBox>
          <DocsColorBox color={coreColors.pink[50]}style={{color: `${coreColors.green[80]}`}}>Pink50</DocsColorBox>
          <DocsColorBox color={coreColors.pink[60]}style={{color: `${coreColors.black}`}}>Pink60</DocsColorBox>
          <h3>Green</h3>
          <DocsColorBox color={coreColors.green[60]}style={{color: `${coreColors.pink[50]}`}}>Green60</DocsColorBox>
          <DocsColorBox color={coreColors.green[70]}style={{color: `${coreColors.pink[50]}`}}>Green70</DocsColorBox>
          <DocsColorBox color={coreColors.green[80]}style={{color: `${coreColors.pink[50]}`}}>Green80</DocsColorBox>

          </DocsSection>
          <DocsSection>
          <h2>Theme Colors</h2>
          <h3>Dark UI</h3>
          <DocsColorBox color={themeColors.dui.background.primary} style={{color: `${themeColors.dui.text.primary}`}}>Primary</DocsColorBox>
          <DocsColorBox color={themeColors.dui.background.secondary} style={{color: `${themeColors.dui.text.secondary}`}}>Secondary</DocsColorBox>
          <DocsColorBox color={themeColors.dui.background.tertiary} style={{color: `${themeColors.dui.text.tertiary}`}}>Tertiary</DocsColorBox>
          </DocsSection>

          <DocsSection
            color={themeColors.lui.outline.primary}
            style={{
              backgroundColor: `${themeColors.lui.background.secondary}`,
              color: `${themeColors.lui.text.primary}`,
              outline: `${themeColors.lui.outline.primary}`
            }}
          >
          <h2>Theme Colors</h2>
          <h3>Light UI</h3>
          <DocsColorBox color={themeColors.lui.background.primary} style={{color: `${themeColors.lui.text.primary}`}}>Primary</DocsColorBox>
          <DocsColorBox color={themeColors.lui.background.secondary} style={{color: `${themeColors.lui.text.secondary}`}}>Secondary</DocsColorBox>
          <DocsColorBox color={themeColors.lui.background.tertiary} style={{color: `${themeColors.lui.text.tertiary}`}}>Tertiary</DocsColorBox>
          </DocsSection>
          <DocsSection>
          <h3>Old Pink</h3>
          <DocsColorBox color={coreColor.pink[10]} style={{color: "black"}}>pink10</DocsColorBox>
          <DocsColorBox color={coreColor.pink[20]}>pink20</DocsColorBox>
          <DocsColorBox color={coreColor.pink[30]}>pink30</DocsColorBox>
          <DocsColorBox color={coreColor.pink[40]}>pink40</DocsColorBox>
          <DocsColorBox color={coreColor.pink[50]} style={{color: "black"}}>pink50</DocsColorBox>
          <DocsColorBox color={coreColor.pink[60]}>pink60</DocsColorBox>
                  <DocsColorBox color={coreColor.pink[70]}>pink70</DocsColorBox>
          <DocsColorBox color={coreColor.pink[80]}>pink80</DocsColorBox>
          <DocsColorBox color={coreColor.pink[90]}>pink90</DocsColorBox>
          <DocsColorBox color={coreColor.pink[100]}>pink100</DocsColorBox>
          <h3>Orange</h3>
          <DocsColorBox color={coreColor.orange[10]} style={{color: "black"}}>orange10</DocsColorBox>
          <DocsColorBox color={coreColor.orange[20]} style={{color: "black"}}>orange20</DocsColorBox>
          <DocsColorBox color={coreColor.orange[30]} style={{color: "black"}}>orange30</DocsColorBox>
          <DocsColorBox color={coreColor.orange[40]} style={{color: "gray"}}>orange40</DocsColorBox>
          <DocsColorBox color={coreColor.orange[50]}>orange50</DocsColorBox>
          <DocsColorBox color={coreColor.orange[60]}>orange60</DocsColorBox>
                  <DocsColorBox color={coreColor.orange[70]}>orange70</DocsColorBox>
          <DocsColorBox color={coreColor.orange[80]}>orange80</DocsColorBox>
          <DocsColorBox color={coreColor.orange[90]}>orange90</DocsColorBox>
          <DocsColorBox color={coreColor.orange[100]}>orange100</DocsColorBox>
          <h3>Grayscale</h3>
          <DocsColorBox color="white" style={{color: "gray"}}> white</DocsColorBox>
          <DocsColorBox color={color.gray.g1}>g1</DocsColorBox>
          <DocsColorBox color={color.gray.g2}>g2</DocsColorBox>
          <DocsColorBox color={color.gray.g3}>g3</DocsColorBox>
          <DocsColorBox color={color.gray.g4}>g4</DocsColorBox>
          <DocsColorBox color={color.black}>black</DocsColorBox>
          <DocsColorBox >no props</DocsColorBox>
        </DocsSection>
        <DocsSection>
          <h2>Semantic Colors</h2>
          <DocsColorBox color={color.primary.dark}>Primary dark</DocsColorBox>
          <DocsColorBox color={color.primary.light}>primary light</DocsColorBox>
          <DocsColorBox color={color.secondary.dark}>sec. dark</DocsColorBox>
          <DocsColorBox color={color.secondary.light}>sec. light</DocsColorBox>
          <DocsColorBox color={color.accent.dark}>accent dark</DocsColorBox>
          <DocsColorBox color={color.accent.light}>accent light</DocsColorBox>
          <DocsColorBox color={color.dui.background}>dui bg</DocsColorBox>
          <DocsColorBox color={color.gray.g5} style={{background: "url('https://design.kristiantalley.com/ktt-cloud/art/tumblr_mc26d0dJLj1qfchfvo1_1280.jpg')", outline: color.accent.dark + " solid 1px"}}>bgImg</DocsColorBox>
          <DocsColorBox >no props</DocsColorBox>
        </DocsSection>
        <DocsSection>
          <h2>Buttons</h2>
          <h3>Button styles</h3>
          <Btn color="darkGreen"> 
            <Icon name="add" context="btn" color="#ffffff" size={fontSize[3]}></Icon>
            Join game   
          </Btn>
          <Btn color={color.primary.dark}>Continue</Btn>
          <Btn roundness="pill" color={color.secondary.dark}>Copy</Btn>
          <Btn color={color.secondary.light}  roundness="pill">Ok</Btn>
          <Btn color={color.accent.dark}  roundness="pill">Cancel</Btn>
          <Btn roundness="pill">
            <Icon name="pin" size={fontSize[3]} />
          </Btn>
          <Btn roundness="pill" color={color.lui.text}>
            <Icon name="add" size={fontSize[3]} />
          </Btn>
          <Btn color="dui_gray20" roundness="pill">
            <Icon name="cancel" color={color.black} size={fontSize[3]}></Icon>
          </Btn>
          <DocsCodeBlock>
            {`<Btn> ... </Btn>
            <Btn color="dui_gray80"> ... </Btn>
            <Btn roundness="pill"> ... </Btn>
            <Btn> <Icon name="pin" color="#" size="#"/> </Btn>
            
            `}
          </DocsCodeBlock>
      </DocsSection>
      <DocsSection>
          <h4>Button sizes</h4>
          <Btn size="sm">Submit</Btn>
          <Btn>Submit</Btn>
          <Btn size="lg">Submit</Btn>
           <DocsCodeBlock>
            {`<Btn size="sm"> ... </Btn>
            <Btn> ... </Btn>
            <Btn size="lg"> ... </Btn>
            `}
          </DocsCodeBlock>
        </DocsSection>
        

        <DocsSection>
          <h2>Modals</h2>
         <DocsModalContainer color={color.accent.dark}>
          {/* <DocsModalContainerContentExample>
            <h1>Hello, here is a bunch of content. Hello, here is a bunch of content.Hello, here is a bunch of content.Hello, here is a bunch of content.Hello, here is a bunch of content.Hello, here is a bunch of content.Hello, here is a bunch of content.Hello, here is a bunch of content.Hello, here is a bunch of content.Hello, here is a bunch of content.Hello, here is a bunch of content.</h1>
          </DocsModalContainerContentExample> */}
            <Modal header="Header">
              <p>This is the Modal Body.
              We can describe some stuff here.
              No worries.</p>
              <span><Btn roundness="pill">Cool!</Btn>
              <Btn color={color.accent.dark}  roundness="pill" style={{outline: 'solid white 1px'}}>Not cool.</Btn>
              </span>
              
            </Modal>
            
         </DocsModalContainer >
         <DocsCodeBlock>
            {` // Modal without Overlay
              <Modal header="..."> ... </Modal>

              // Modal with Overlay
              <ModalWithOverlay header="..."> ... </ModalWithOverlay>
            `}
          </DocsCodeBlock>

        </DocsSection>
      </div>
    );
  }
}

export default App;