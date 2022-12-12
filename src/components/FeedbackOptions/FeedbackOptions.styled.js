import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
`;

const setMargin = (props) => {
  switch (props.action) {
    case 'good':
      return '10px';
    case 'neutral':
      return '10px';
    case 'bad':
      return '0';
    default:
      return '10px';
  }
};

const setBgColor = (props) => {
  switch (props.action) {
    case 'good':
      return '#80ffa0';
    case 'neutral':
      return '#ebfffa';
    case 'bad':
      return '#ff3757';
    default:
      return '#fff';
  }
};

export const Button = styled.button`
  margin-right: ${setMargin};
  padding: 5px;
  min-width: 65px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 250ms linear;

  background-color: ${setBgColor};

  :hover {
    transform: scale(110%);
  }
`;
