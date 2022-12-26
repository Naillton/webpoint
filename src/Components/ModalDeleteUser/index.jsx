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

const ModalDelete = ({open, close, modalVisible}) => {
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
        <p>Deletar Usuario</p>
        <InputCont>
          <Inputs
            keyboardType="numeric"
            placeholder="Digite o id do usuario"
            type="number"
          />
        </InputCont>
      </ModalBody>
    </Modal>
  );
};

export default ModalDelete;
