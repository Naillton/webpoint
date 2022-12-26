import styled from 'styled-components';

export const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputCont = styled.input`
  border: 2px solid #5ced73;
  border-radius: 8px;
  width: 200px;
  height: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #5ced73;
  margin: 10px;
  color: black;
`;

export const ErrorLabel = styled.div`
  font-size: 13px;
  line-height: 15px;
  color: red;
`;
