import  styled  from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const OptionButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: 3px solid black;
  border-radius: 8px;
  &:nth-of-type(1) {
    background-color: green;
  }
  &:nth-of-type(2) {
    background-color: yellow;
  }
  &:nth-of-type(3) {
    background-color: red;
  }
  &:hover {
    box-shadow: 1px 1px 6px 3px rgb(34 60 80 / 54%) inset;
  }
`;