import { color, space, isDarkBackground, fontSize} from './Utils';
import styled from 'styled-components';
import css from 'styled-components';
export const Btn = styled.button`
  background-color: ${ props => color[props.color] ? color[props.color] : color.darkGreen };
  color: ${props => isDarkBackground(props.color) ? color.black : color.white};
  border-radius: ${space[6] + 'px'};
  margin: ${space[2] + 'px'};
  font-family: menlo;
  font-weight: bold;
  border: none;
  transition: 0.1s all ease;
  

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
    transform: scale(1.1);
  }

    font-size: 16px;
  padding: ${space[2] + 'px'} ${space[3] + 'px'};

  ${props => props.size === "lg" && css`
    font-size: 18px;
    padding: ${space[2] + 4 + 'px'} ${space[4]+ 'px'};
  `}

  ${props => props.size === "sm" && css`
    font-size: 14px;
    padding: ${space[1] + 'px'} ${space[2] + 'px'};
  `}
`;