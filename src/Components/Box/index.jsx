import React, {useState} from 'react';

import {
  Container,
  Button,
} from './styles';

import ModalAdd from '../ModalAddUser';
import ModalDelete from '../ModalDeleteUser';
import ModalEdit from '../ModalEditUser';
import ModalList from '../ModalList';

const Box = () => {
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [modalUpdateVisible, setModalUpdateVisible] = useState(false);
  const [modalListVisible, setModalListVisible] = useState(false);

  return(
    <Container>
        <Button
          onClick={() => setModalAddVisible(prevState => !prevState)}
        >
          Add User
        </Button>
        <ModalAdd
          open={modalAddVisible}
          modalVisible={() => setModalAddVisible(prevState => !prevState)}
        />
        <Button
          onClick={() => setModalUpdateVisible(prevState => !prevState)}
        >
          Update User
        </Button>
        <ModalEdit
          open={modalUpdateVisible}
          modalVisible={() => setModalUpdateVisible(prevState => !prevState)}
        />
        <Button
          onClick={() => setModalDeleteVisible(prevState => !prevState)}
        >
          Delete User
        </Button>
        <ModalDelete
          open={modalDeleteVisible}
          modalVisible={() => setModalDeleteVisible(prevState => !prevState)}
        />
        <Button
          onClick={() => setModalListVisible(prevState => !prevState)}
        >
          List User
        </Button>
        <ModalList
          open={modalListVisible}
          modalVisible={() => setModalListVisible(prevState => !prevState)}
        />
    </Container>
  );
}

export default Box;
