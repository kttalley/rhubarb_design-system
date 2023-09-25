import styled from 'styled-components';
import {color, space, isDarkBackground, fontSize} from '../Rhubarb';


export const DocsColorBox = styled.div`
  background-color: ${ props => props.color ? props.color : color.gray.g2 };
  color: ${props => isDarkBackground(props.color) ? color.white : color.gray.g1};
  height: ${space[6] + 'px'};
  width: ${space[6] + 'px'};
  padding-top: 33px;
  text-align: center;
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: ${props => props.color === color.dui.background ? '2px solid' + color.primary.dark : 'none'}
`;


export const DocsSection = styled.section`
  padding:2rem;
  margin-bottom:1rem;
  margin-left:0.6rem;
  margin-right:0.6rem;
  border-radius: 0.6rem;
  background-color: ${ props => props.color ? props.color : color.dui.background };
  box-shadow: 0px 10px 30px rgba(0,0,0,0.6)
  color: ${props => isDarkBackground(props.color) ? color.gray.g1 : color.white};
  border: ${props => props.color === color.dui.background ? 'none' :  '2px solid' + color.primary.dark }
`;

export const DocsModalContainer = styled.section`
  position: relative;
  height: 100%;
  border-radius: 8px;
  padding: 1rem;
  background-color: ${ props => props.color ? props.color : color.gray.g1 };
`;

export const DocsModalContainerContentExample = styled.article`
  margin: 24px;
  position: absolute;
  background: url('https://design.kristiantalley.com/ktt-cloud/art/tumblr_mc26d0dJLj1qfchfvo1_1280.jpg');
  filter: brightness(2.1);
  max-height:72%;
  width: 80%;
  display: flex;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  font-size: 2rem;
  color: black;
  overflow: hidden;
  border: 2px solid ${color.pink};
  backdrop-filter: blur(16px);
  background-size: cover;
  background-position: center;
  box-shadow: 0px 10px 20px ${color.gray.g4};
`;

export const DocsCodeBlock = styled.code`
  border: 1px solid ${color.darkGreen};
  background-color: ${color.black};
  color: ${color.dui_gray20};
  border-radius: 8px;
  display: block;
  font-family: consolas, monospace;
  line-height: 1.3;
  padding: ${space[3] + 'px'};
  white-space: pre-line;
  font-size: ${fontSize[1]};
  margin-top: ${space[3] + 'px'};
   max-width: 832px;
  transition: 0.15s color ease;

  &::selection {
    color: ${color.black};
    background-color: ${color.pink};
  }

  &:hover {
    color: ${color.white};
  }


`;