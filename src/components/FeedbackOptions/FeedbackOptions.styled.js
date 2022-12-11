import styled from 'styled-components';

const Button = styled.button`
  margin-right: 10px;
  padding: 5px;
  min-width: 65px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 250ms linear;

  :hover {
    transform: scale(110%);
  }
`;

export const GoodBtn = styled(Button)`
  background-color: #80ffa0;
`;

export const NeutralBtn = styled(Button)`
  background-color: #ebfffa;
`;

export const BadBtn = styled(Button)`
  margin-right: 0;
  background-color: #ff3757;
`;

