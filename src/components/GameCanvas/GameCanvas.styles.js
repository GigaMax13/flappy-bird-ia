import styled from 'styled-components';

import background from '../../assets/images/background.png';

export const Canvas = styled.canvas`
  display: block;
  background-color: transparent;
  background-size: contain;
  background-image: url(${background});
`;
