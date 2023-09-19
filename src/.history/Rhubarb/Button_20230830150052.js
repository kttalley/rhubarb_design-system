import { color, space, isDarkBackground} from './Utils'
import styled from 'styled-components';
export const Btn = styled.button`
  background-color: ${ props => color[props.color] ? color[props.color] : color.black };
  color: ${props => isDarkBackground(props.color) ? color.black : color.white};
  border-radius: ${space[2] + 'px'};
  padding: ${space[3] + 'px'};
  font-size: ${space[1] + 'rem'};
  border: ${props => props.color === "black" || props.color === "darkGreen"  ? '1px solid' + color.pink : 'none'}

  &:hover {
    filter: brightness(1.2);
  }

`;