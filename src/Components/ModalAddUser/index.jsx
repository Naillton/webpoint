import React from 'react';
import Modal from 'react-modal';

import {
  ModalBody,
  Exit,
  Header,
  InputCont,
} from './styles'

import Inputs from '../Input';
import Button from '../Button';

const customStyles = {
  content: {
    backgroundColor: 'forestgreen',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

const ModalAdd = ({open, close, modalVisible}) => {
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
      <Header>
        <Exit
          onClick={modalVisible}
        >
          Voltar
        </Exit>
      </Header>
      <ModalBody>
        <p>Adcionar Usuario</p>
        <InputCont>
          <Inputs
            placeholder="Digite seu email"
            type="email"
          />
          <Inputs
            placeholder="Nome Completo"
            type="text"
          />
          <Inputs
            placeholder="Senha"
            type="password"
          />
          <Inputs
            placeholder="Numero"
            type="numeric"
          />
        </InputCont>
        <Button func={() => console.log('ok')} text='Adcionar' />
      </ModalBody>
    </Modal>
  );
};

export default ModalAdd;
