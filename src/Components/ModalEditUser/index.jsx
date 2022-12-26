import React from 'react';
import Modal from 'react-modal';

import {
  ModalBody,
  Exit,
  Header,
  InputCont,
} from './styles';

import Inputs from '../Input';
import Button from '../Button';

const customStyles = {
  content: {
    backgroundColor: 'forestgreen',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

const ModalEdit = ({open, close, modalVisible}) => {
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
        <p>Atualizar Usuario</p>
        <InputCont>
          <Inputs
            keyboardType="numeric"
            placeholder="Digite o id do usuario"
            type="number"
          />
          <Inputs
            keyboardType="email-address"
            placeholder="Digite seu email"
            type="email"
          />
          <Inputs
            keyboardType="default"
            placeholder="Nome Completo"
            type="text"
          />
          <Inputs
            keyboardType="default"
            placeholder="Senha"
            type="password"
          />
          <Inputs
            keyboardType="numeric"
            placeholder="Numero"
            type="numeric"
          />
        </InputCont>
        <Button func={() => console.log('ok')} text='Atualizar' />
      </ModalBody>
    </Modal>
  );
};

export default ModalEdit;
