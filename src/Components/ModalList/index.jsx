import React from 'react';
import Modal from 'react-modal';

import {
  ModalBody,
  Exit,
  Header,
  InputCont,
} from './styles';

import Inputs from '../Input';

const customStyles = {
  content: {
    backgroundColor: 'forestgreen',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

const ModalList = ({open, close, modalVisible}) => {
  let subtitle;

  function afterOpen() {
    subtitle.style.color = "#00c04b";
  }
  return(
    <Modal
      isOpen={open}
      onAfterOpen={afterOpen}
      style={customStyles}
    >
      <ModalBody>
        <Header>
          <Exit
            onClick={modalVisible}
          >
            Voltar
          </Exit>
        </Header>
        <p>Listar Usuario</p>
        <InputCont>
          <Inputs
            keyboardType="email-address"
            placeholder="Digite seu email"
            icon="AiOutlineMail"
            type="email"
          />
        </InputCont>
      </ModalBody>
    </Modal>
  );
};

export default ModalList;
