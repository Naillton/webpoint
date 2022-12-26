import React from 'react';
import { MdAdminPanelSettings, MdWork } from "react-icons/md";

import {
  Container,
  Content,
  ContentText
} from './styles';

const Head = ({ Empresa = "Empresa" }) => {
  return(
    <Container>
      <Content>
        <ContentText><p>Admin</p><MdAdminPanelSettings size={28} /></ContentText>
        <ContentText><p>{Empresa}</p><MdWork size={28} /></ContentText>
      </Content>
    </Container>
  );
}

export default Head;
