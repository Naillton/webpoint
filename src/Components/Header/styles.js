import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 8vw;
  flex-direction: column;
  background-color: #abf7b1;
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #494A51;
  height: 97.6vh;
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
  justify-content: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: space-between;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
